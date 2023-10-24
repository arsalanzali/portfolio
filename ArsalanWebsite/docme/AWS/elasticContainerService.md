<h1 align="center">Elastic Container Service (ECS)</h1>

## What is ECS?
AWS Service that is a fully managed container orchestration service. Highly secure, reliable, and scalable way to run containers.

## Components of ECS

- Cluster- multiple EC2 instances which will house the docker containers
- Task Definition- a JSON file that defines the configuration of (upto 10) containers you want to run
- Task- Launches containers defined in Task Definition. Tasks do not remaining running once workload is complete
- Service- Ensures tasks remaining running eg. Web-app
- Container Agent- Binary on each EC2 instance which monitors, starts and stops tasks

## Creating an ECS cluster

### Create Cluster
  - Use spot or on demand
  - EC2 Instance Type
  - Number of Instances
  - EBS Storage Volume
  - EC2 can be on Amazon Linux 1 or Amazon Linux 2
  - Choose VPC or create a new VPC
  - Assign an IAM role
  - Option to turn on CloudWatch Container Insights
  - Choose a key pair- You can SSH into an EC2 Container Instance and make changes but its not generally recommended.

### Task Definition File
- Create a new Task Definition 
  - You can define multiple containers within a task definition
  - The (docker) images can be provided either via ECR or an official docker repository eg. Docker Hub
  - You must have one essential container. If this container stops or fails than all other containers will be stopped.
  - AWS has a wizard to create Task Definitions instead of having to create a file by hand

### ECR(Elastic Container Registry)

- A fully managed docker container registry that makes it easy for developers to store, manage and deploy docker container images.
