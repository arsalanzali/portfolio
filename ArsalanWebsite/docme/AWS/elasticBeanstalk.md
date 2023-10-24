<h1 align="center">Elastic Beanstalk</h1>

## What is EB?

- Quickly deploy and manage web apps on AWS
- Elastic Beanstalk is a <strong>PaaS(Platform as a service)</strong> 
  - A platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.
- Not recommended for “production” applications but can be used for them
- Supported Languages:
  - Ruby -> Rails
  - Python -> Django
  - PHP -> Laravel
  - Tomcat -> Spring
  - NodeJS -> ExpressJS

## Web Environment
- Web Environment Types for EB:
  - Single Instance Environment:
    - Still uses Auto Scaling Group(ASG) but the desired capacity is set to one to ensure that the server is always running
    - No ELB(Elastic Load Balancer) to save cost
    - Public IP Address has to be used to route traffic to server
  - Load Balanced Environment:
    - Uses ASG to set to scale
    - Uses an ELB
    - Designed to scale

## Types of Deployment
- Deployment policies available with Elastic Beanstalk:
<div align="center">
  <a href="https://github.com/asadzali89/docme/blob/01c2b09d347770f18254dc9189d11d1b85a9065b/_media/EB/EB1.png?raw=true">
    <img src="_media/EB/EB1.png?raw=true" alt="Logo" width="500px" height="150px">
  </a>
</div>


### All at Once Deplyment
  - Deploys the new app version to all instances at the same time
  - Takes all instances out of service while the deployment processes 
  - Servers become available again
  - Fastest deployment method but also the most dangerous
    - In case of failure you may need to roll back the changes by re-deploying the original version again to all instances.

### Rolling Deployment
  - Deploys the new app version to a batch of instances at a time
  - Take batches instances out of service while the deployment processes 
  - Reattaches updated instances
  - Goes onto next batch, taking them out of service
  - Reattaches those instances (rinse and repeat)
  - In case of failure you need to perform an additional rolling update in order to roll back the changes.

### Rolling with additional Batch
  - Launch new instance that will be used to replace a batch
  - Deploy update app version to new batch 
  - Attach the new batch and terminate the existing batch
  - Rolling with Additional Batch’s ensures that our capacity is never reduced. This is important for applications where a reduction in capacity could cause availability issues for users.
    - In case of failures you need to perform a additional rolling update to roll back the changes.

### Immutable
  - Create a new ASG group with EC2 Instances
  - Deploy the update version of the app on the new EC2 instances
  - Point the ELB to the new ASG and delete the old ASG which will terminate the old EC2 instances
  - Safest way to deploy for critical applications
    - In case of failures you need to terminate the new instances since the existing instances still remain

### Deployment Methods Diagram

<div align="center">
  <a href="https://github.com/asadzali89/docme/blob/fe7218a18c536dcf39e6c580e647c4763ee20f16/_media/EB/EB2.png?raw=true">
    <img src="_media/EB/EB2.png?raw=true" alt="Logo" width="750px" height="350px">
  </a>
</div>

## Configuration Methods
- Configuration Files
  - Elastic Beanstalk environments can be customized using configuration files
    - .ebextensions is a hidden folder at the root of your project which contains the config files
    - .config is the extension of the config files which need to be stored in .ebextensions
  - Configuration files can config:
    - 1. Option settings
    - 2. Linux/Windows Server Configuration
    - 3. Custom Resources
- ENV Manifest or env.yml
  - The Environment Manifest is a file called env.yml which is stored in the root of your project
- Server Configuration
  - Linux server configuration
    - Packages- Download and install prepackaged application and components
    - Groups- create linux/unix groups and to assign group IDs
    - Users- create Linux/unix users
    - Files- create files on EC2 instance (inline or from URL)
    - Commands- execute commands on EC2 instance before app is setup
    - Services- Define which services should be started or stopped when the instance is launched 
    - Container Commands- Execute commands that affect your application source code

## CLI
  - CLI is hosted on Github

<div align="center">
  <a href="https://github.com/asadzali89/docme/blob/2f19e4cf2f9ce8d9245d6a38e03e9c5f650cb311/_media/EB/EB3.png?raw=true">
    <img src="_media/EB/EB3.png?raw=true" alt="Logo" width="750px" height="200px">
  </a>
</div>

## Custom Image
  - Custom AMI(Amazon Machine Images) improve provisioning times when instances are launched in your environment 

<div align="center">
  <a href="https://github.com/asadzali89/docme/blob/603221a324eb1e36fb8f81c84a5b1335ab026ac2/_media/EB/EB4.png?raw=true">
    <img src="_media/EB/EB4.png?raw=true" alt="Logo" width="550px" height="75px">
  </a>
</div>

## Configuring RDS
  - When a database is being added to your EB Environment you have the option to have it inside or outside

- Inside:
  - Intended for dev environments
  - When the EB environment is terminated the database will also terminate

<div align="center">
  <a href="https://github.com/asadzali89/docme/blob/4df2dac8ee91720eaeaa5d8ef911bad12eeeafaf/_media/EB/EB5.png?raw=true">
    <img src="_media/EB/EB5.png?raw=true" alt="Logo" width="400px" height="200px">
  </a>
</div>

- Outside:
  - Intended for prod environments
  - When the EB environment is terminated the database will remain

<div align="center">
  <a href="https://github.com/asadzali89/docme/blob/4df2dac8ee91720eaeaa5d8ef911bad12eeeafaf/_media/EB/EB6.png?raw=true">
    <img src="_media/EB/EB6.png?raw=true" alt="Logo" width="400px" height="200px">
  </a>
</div>

