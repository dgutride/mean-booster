# mean-booster

[![Build Status](https://travis-ci.org/bucharest-gold/mean-booster.svg?branch=master)](https://travis-ci.org/bucharest-gold/mean-booster)

MEAN stack CRUD

## Running the application

You can run the application locally for application development, or deployed
to a running OpenShift Version 3 cluster.

### Running locally for development

You need docker installed and running for the mongodb instance. But first
you should just install all of the npm dependencies.

```sh
$ npm install
```

Then, start mongodb in one terminal and the application in another terminal window.

```sh
$ # terminal window 1
$ npm run mongodb
```

This will pull the latest mongodb docker container from docker hub and then start it with a
simple contacts database created. Docker will keep the mongodb logs scrolling in your terminal
so you can watch what's going on as you make changes.

Next start the application. Since the mongodb URLs are a little different between localhost
and an OpenShift environment, we have a `localhost` npm script that sets the `MONGO_URL`
environment variable to localhost before starting the application.

```sh
$ # terminal window 2
$ npm run localhost
```

You can then access the application front end at http://localhost:8080.

#### Running on OpenShift

This application can be easily run on the OpenShift platform as two separate Kubernetes
pods: the mongodb instance, and the node application which connects to it. You'll need
to be logged in to the OpenShift cluster for this to work. The easiest way to do this
is to use [`minishift`](https://github.com/minishift/minishift/releases).

For the time being it is necessary to use the [`oc`](https://github.com/openshift/origin/releases)
comand line tool to install the `mongodb` instance.

```sh
$ minishift start
# make coffee while it starts up
$ oc new-app https://raw.githubusercontent.com/openshift/origin/master/examples/db-templates/mongodb-ephemeral-template.json -p DATABASE_SERVICE_NAME=contacts -p MONGODB_USER=default -p MONGODB_PASSWORD=default -p MONGODB_DATABASE=contacts
```

Once your mongodb pod is running, you can deploy the application.

```
$ npm install
$ npm run openshift
```

This command will create an archive of your application, apply it to a docker image with the latest
Node.js runtime, and run it as a Kubernetes pod in OpenShift. You will see in the output, the URL
for your application, which you can copy and paste into your browser. it will look something like
this in the logs.

```
2017-10-19T21:21:42.873Z INFO route host mapping mean-booster-myproject.192.168.99.100.nip.io
```

You can also run `minishift console` to bring up the OpenShift console, and access the pod's logs
URL and other information, as well as scale instances up and down.

![Alt 1](https://github.com/bucharest-gold/mean-booster/raw/master/mb.png)

