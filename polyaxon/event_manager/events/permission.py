from event_manager.event import Attribute, Event

PERMISSION_PROJECT_DENIED = 'permission.project.denied'
PERMISSION_REPO_DENIED = 'permission.repo.denied'
PERMISSION_EXPERIMENT_GROUP_DENIED = 'permission.experiment_group.denied'
PERMISSION_EXPERIMENT_DENIED = 'permission.experiment.denied'
PERMISSION_TENSORBOARD_DENIED = 'permission.tensorboard.denied'
PERMISSION_NOTEBOOK_DENIED = 'permission.notebook.denied'
PERMISSION_EXPERIMENT_JOB_DENIED = 'permission.experiment.job.denied'
PERMISSION_CLUSTER_DENIED = 'permission.cluster.denied'
PERMISSION_USER_ROLE_DENIED = 'permission.user_role.denied'


class PermissionProjectDeniedEvent(Event):
    event_type = PERMISSION_PROJECT_DENIED
    attributes = (
        Attribute('id'),
        Attribute('user.id'),
        Attribute('actor_id'),
        Attribute('event')
    )


class PermissionRepoDeniedEvent(Event):
    event_type = PERMISSION_REPO_DENIED
    attributes = (
        Attribute('project.id'),
        Attribute('project.user.id'),
        Attribute('actor_id'),
        Attribute('event')
    )


class PermissionExperimentGroupDeniedEvent(Event):
    event_type = PERMISSION_EXPERIMENT_GROUP_DENIED
    attributes = (
        Attribute('project.id'),
        Attribute('project.user.id'),
        Attribute('actor_id'),
        Attribute('event')
    )


class PermissionExperimentDeniedEvent(Event):
    event_type = PERMISSION_EXPERIMENT_DENIED
    attributes = (
        Attribute('project.id'),
        Attribute('project.user.id'),
        Attribute('actor_id'),
        Attribute('event')
    )


class PermissionTensorboardDeniedEvent(Event):
    event_type = PERMISSION_TENSORBOARD_DENIED
    attributes = (
        Attribute('project.id'),
        Attribute('project.user.id'),
        Attribute('actor_id'),
        Attribute('event')
    )


class PermissionNotebookDeniedEvent(Event):
    event_type = PERMISSION_NOTEBOOK_DENIED
    attributes = (
        Attribute('project.id'),
        Attribute('project.user.id'),
        Attribute('actor_id'),
        Attribute('event')
    )


class PermissionExperimentJobDeniedEvent(Event):
    event_type = PERMISSION_EXPERIMENT_JOB_DENIED
    attributes = (
        Attribute('project.id'),
        Attribute('project.user.id'),
        Attribute('actor_id'),
        Attribute('event')
    )


class PermissionClusterDeniedEvent(Event):
    event_type = PERMISSION_CLUSTER_DENIED
    attributes = (
        Attribute('actor_id'),
        Attribute('event')
    )


class PermissionUserRoleEvent(Event):
    event_type = PERMISSION_USER_ROLE_DENIED
    attributes = (
        Attribute('user_id'),
        Attribute('actor_id'),
        Attribute('event')
    )
