# mean-booster

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


#### Details to deploy a generic Node.js app on minishift

1. Install nodeshift and kube-probe:
```console
$ npm install nodeshift -D
$ npm install kube-probe -S
```
2. Create `.nodeshift` directory and use the `.yml` files for configuration.

(The file `.nodeshift/deployment.yml` has the config path provided by kube-probe `path: /api/health/readiness`)

3. Add `files` property to avoid nodeshift to create a tar from CWD:
```js
"files": [
  "package.json",
  "README.md",
  "server.js",
  "app"
],
```
4. Add `scripts` property:
```js
"scripts": {
  "openshift": "nodeshift --osc.strictSSL=false",
  "start": "PORT=8080 node server.js"
},
```
