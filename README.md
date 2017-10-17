# mean-booster

[![Build Status](https://travis-ci.org/bucharest-gold/mean-booster.svg?branch=master)](https://travis-ci.org/bucharest-gold/mean-booster)

MEAN stack CRUD

#### How to run

1. Start minishift
2. Setup MongoDB:
```
oc new-app https://raw.githubusercontent.com/openshift/origin/master/examples/db-templates/mongodb-ephemeral-template.json -p DATABASE_SERVICE_NAME=contacts -p MONGODB_USER=default -p MONGODB_PASSWORD=default -p MONGODB_DATABASE=contacts
```
3. Deploy:
```
npm install
npm run openshift
```

![Alt 1](https://github.com/bucharest-gold/mean-booster/raw/master/mb.png)
