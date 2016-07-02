'use strict';

const Redis = require('ioredis');

const addr = process.env.REDIS_PORT_6379_TCP_ADDR || 'redis';
const port = process.env.REDIS_PORT_6379_TCP_PORT || '6379';

module.exports = new Redis(port, addr);
