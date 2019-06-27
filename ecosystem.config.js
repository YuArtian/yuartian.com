module.exports = {
  apps : [{
    name      : 'yuartian.com',
    script    : 'yarn',
    args      : 'start',
    watch     : true,
    interpreter: '/bin/bash',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }]
};
