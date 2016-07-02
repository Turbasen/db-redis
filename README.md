# @turbasen/db-redis

[![Build status](https://app.wercker.com/status/5030e064047a362f5b19495b974190b7/s "wercker status")](https://app.wercker.com/project/bykey/5030e064047a362f5b19495b974190b7)
[![Codacy grade](https://img.shields.io/codacy/grade/f1b04663349647a9bb7765a296c7caca.svg "Codacy grade")](https://www.codacy.com/app/Turbasen/db-redis)
[![Codacy coverage](https://img.shields.io/codacy/coverage/f1b04663349647a9bb7765a296c7caca.svg "Codacy coverage")](https://www.codacy.com/app/Turbasen/db-redis)
[![NPM downloads](https://img.shields.io/npm/dm/@turbasen/db-redis.svg "NPM downloads")](https://www.npmjs.com/package/@turbasen/db-redis)
[![NPM version](https://img.shields.io/npm/v/@turbasen/db-redis.svg "NPM version")](https://www.npmjs.com/package/@turbasen/db-redis)
[![Node version](https://img.shields.io/node/v/@turbasen/db-redis.svg "Node version")](https://www.npmjs.com/package/@turbasen/db-redis)
[![Dependency status](https://img.shields.io/david/Turbasen/db-redis.svg "Dependency status")](https://david-dm.org/Turbasen/db-redis)

Internal Redis wrapper for Nasjonal Turbase API.

## Getting started

Download [Docker for Mac or Windows](https://www.docker.com/products/docker).

Run in this directory:

```
$ docker-compose up
```

Docker is now watching for changes and will run the test suite automatically.

## Usage

Connects automatically to Redis using the following configurations:

* `REDIS_PORT_6379_TCP_ADDR` and `REDIS_PORT_6379_TCP_PORT`
* Default to `redis` and `6379`

```js
const redis = require('redis');
```

## [MIT lisenced](https://github.com/Turbasen/db-redis/blob/master/LICENSE)
