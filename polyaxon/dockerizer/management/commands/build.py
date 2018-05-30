import logging

from django.core.management.base import BaseCommand
from docker.errors import DockerException

from constants.jobs import JobLifeCycle
from db.models.build_jobs import BuildJob
from db.models.repos import Repo
from dockerizer import builder

_logger = logging.getLogger('polyaxon.dockerizer.commands')


class Command(BaseCommand):
    """Management utility to start building a docker image."""
    help = 'Used to build a docker image.'

    def add_arguments(self, parser):
        parser.add_argument('build_job_id')
        super(Command, self).add_arguments(parser)

    def handle(self, *args, **options):
        build_job_id = options['build_job_id']
        try:
            build_job = BuildJob.objects.get(id=build_job_id)
        except BuildJob.DoesNotExist:
            self.stdout.write(
                'The build job %s does not exist anymore.' % build_job_id,
                ending='\n')
            return

        build_job.set_status(JobLifeCycle.BUILDING)

        # Building the docker image
        try:
            status = builder.build(build_job=build_job, token=token, image_tag=image_tag)
        except DockerException as e:
            _logger.warning('Failed to build job %s', e)
            build_job.set_status(JobLifeCycle.FAILED)
            return
        except Repo.DoesNotExist:
            _logger.warning('No code was found for this project')
            build_job.set_status(JobLifeCycle.FAILED,
                                 message='No code was found for to build this job.')
            return
        except Exception as e:  # Other exceptions
            _logger.warning('Failed to build experiment %s', e)
            build_job.set_status(JobLifeCycle.FAILED)
            return

        if not status:
            return

        build_job.set_status(JobLifeCycle.SUCCEEDED)
