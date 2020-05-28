[![License: Apache 2](https://img.shields.io/badge/License-apache2-green.svg)](LICENSE)
[![Polyaxon Operator](https://github.com/polyaxon/polyaxon/workflows/Polyaxon%20Operator/badge.svg)](https://github.com/polyaxon/polyaxon/actions?query=workflow%3A%22Polyaxon+Operator%22)
[![Polyaxon Core](https://github.com/polyaxon/polyaxon/workflows/Polyaxon%20Core/badge.svg)](https://github.com/polyaxon/polyaxon/actions?query=workflow%3A%22Polyaxon+Core%22)
[![Docs](https://img.shields.io/badge/docs-0.6.1-brightgreen.svg?style=flat)](https://polyaxon.com/docs/)
[![Release](https://img.shields.io/badge/release-0.6.1-brightgreen.svg?longCache=true)](https://github.com/polyaxon/polyaxon/releases/tag/0.6.1)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/90c05b6b112548c1a88b950beceacb69)](https://www.codacy.com/app/polyaxon/polyaxon?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=polyaxon/polyaxon&amp;utm_campaign=Badge_Grade)
[![Slack](https://img.shields.io/badge/chat-on%20slack-aadada.svg?logo=slack&longCache=true)](https://polyaxon.com/slack/)

# Polyaxon

Welcome to , a platform for building, training, and monitoring large scale deep learning applications.
We are making a system to solve reproducibility, automation, and scalability for machine learning applications.

Polyaxon deploys into any data center, cloud provider, or can be hosted and managed by Polyaxon, and it supports all the major deep learning frameworks such as Tensorflow, MXNet, Caffe, Torch, etc.

Polyaxon makes it faster, easier, and more efficient to develop deep learning applications by managing workloads with smart container and node management. And it turns GPU servers into shared, self-service resources for your team or organization.

# Install

#### TL;DR;

 * Create a deployment

    ```bash
    # Create a namespace
    $ kubectl create namespace polyaxon

    # Add Polyaxon charts repo
    $ helm repo add polyaxon https://charts.polyaxon.com

    # Deploy Polyaxon
    $ helm install polyaxon/polyaxon \
        --name=polyaxon \
        --namespace=polyaxon \
        -f config.yaml
    ```

 * Install CLI

    ```bash
    # Install Polyaxon CLI
    $ pip install -U polyaxon

    # Config Polyaxon CLI
    $ polyaxon config ...

    # Login to your account
    $ polyaxon login
    ```

Please check [polyaxon installation guide](https://polyaxon.com/docs/setup/)

> If you are looking for the documentation of Polyaxon v0.4, please [go here](https://v0-4.polyaxon.com/). 

# Quick start

#### TL;DR;

 * Start a project

    ```bash
    # Create a project
    $ polyaxon project create --name=quick-start --description='Polyaxon quick start.'
    ```

 * Train and track logs & resources

    ```bash
    # Upload code and start experiments
    $ polyaxon run -f experiment.yaml -l
    ```

 * Dashboard

    ```bash
    # Start Polyaxon dashboard
    $ polyaxon dashboard

    Dashboard page will now open in your browser. Continue? [Y/n]: y
    ```

 * Notebook
    ```bash
    # Start Jupyter notebook for your project
    $ polyaxon run --hub notebook
    ```

 * Tensorboard
    ```bash
    # Start TensorBoard for a run's output
    $ polyaxon run --hub tensorboard --run-uuid=UUID
    ```

Please check our [quick start guide](https://polyaxon.com/docs/core/quick-start/) to start training your first experiment.

# Distributed job

Polyaxon supports and simplifies distributed jobs.
Depending on the framework you are using, you need to deploy the corresponding operator, adapt your code to enable the distributed training,
and update your polyaxonfile.

Here are some examples of using distributed training: 

 * [Distributed Tensorflow](https://polyaxon.com/docs/experimentation/distributed/tf-jobs/)
 * [Pytorch distributed](https://polyaxon.com/docs/experimentation/distributed/pytorch-jobs/)
 * [MPI distributed](https://polyaxon.com/docs/experimentation/distributed/mpi-jobs/)
 * [Horovod distributed](https://polyaxon.com/integrations/horovod/)
 * [Spark](https://polyaxon.com/docs/experimentation/distributed/spark-jobs/)
 * [Dask](https://polyaxon.com/docs/experimentation/distributed/dask-jobs/)

# Hyperparameters tuning

Polyaxon has a concept for suggesting hyperparameters and managing their results very similar to Google Vizier called experiment groups.
An experiment group in Polyaxon defines a search algorithm, a search space, and a model to train.

 * [Grid search](https://polyaxon.com/docs/automation/optimization-engine/grid-search/)
 * [Random search](https://polyaxon.com/docs/automation/optimization-engine/random-search/)
 * [Hyperband](https://polyaxon.com/docs/automation/optimization-engine/hyperband/)
 * [Bayesian Optimization](https://polyaxon.com/docs/automation/optimization-engine/bayesian-optimization/)
 * [Hyperopt](https://polyaxon.com/docs/automation/optimization-engine/hyperopt/)
 * [Custom Iterative Optimization](https://polyaxon.com/docs/automation/optimization-engine/iterative/)

# Parallel executions

You can run you processing jobs or model training in parallel, Polyaxon provides a [mapping](https://polyaxon.com/docs/automation/mapping/) abstraction to manage concurrent jobs.

# DAGs and workflows

[Polyaxon DAGs](https://polyaxon.com/docs/automation/flow-engine/) is a tool that provides container-native engine for running machine learning pipelines. 
A DAG manages multiple operations with dependencies. Each operation is defined by a component runtime. 
This means that operations in a DAG can be jobs, services, distributed jobs, parallel executions, or nested DAGs.
 

# Architecture

![Polyaxon architecture](artifacts/polyaxon_architecture.png)

# Documentation

Check out our [documentation](https://polyaxon.com/docs/) to learn more about Polyaxon.

# Dashboard

Polyaxon comes with a dashboard that shows the projects and experiments created by you and your team members.

To start the dashboard, just run the following command in your terminal

```bash
$ polyaxon dashboard -y
```

![compare](artifacts/compare.png)

![dashboards](artifacts/dashboards.png)

![tensorboard](artifacts/tensorboard.png)


# Project status

Polyaxon is stable and it's running in production mode at many startups and Fortune 500 companies. 

# Contributions

Please follow the contribution guide line: *[Contribute to Polyaxon](CONTRIBUTING.md)*.


# Research

If you use Polyaxon in your academic research, we would be grateful if you could cite it.

Feel free to [contact us](mailto:contact@polyaxon.com), we would love to learn about your project and see how we can support your custom need.

# License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fpolyaxon%2Fpolyaxon.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fpolyaxon%2Fpolyaxon?ref=badge_large)
