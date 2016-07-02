'use strict';

const redis = require('.');
const assert = require('assert');
const Ioredis = require('ioredis');

describe('redis', () => {
  it('returns Redis instance', () => {
    assert(redis instanceof Ioredis);
  });

  it('is connected to the database', done => {
    redis.info((err, info) => {
      assert.ifError(err);
      assert.equal(typeof info, 'string');
      done();
    });
  });

  it('connects via REDIS_PORT_6379_TCP_* environment variables', () => {
    process.env.REDIS_PORT_6379_TCP_ADDR = 'redis';
    process.env.REDIS_PORT_6379_TCP_PORT = '6379';

    delete require.cache[require.resolve('.')];
    const redisOverEnv = require('.'); // eslint-disable-line global-require
    assert(redisOverEnv instanceof Ioredis);

    delete process.env.MONGO_PORT_27017_TCP_ADDR;
    delete process.env.MONGO_PORT_27017_TCP_PORT;
  });
});
