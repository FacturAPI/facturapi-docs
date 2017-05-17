var argv = require('yargs')
.option('servers', {
  type: 'string',
})
.argv;

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/facturapi-docs',
      dirToCopy: 'build',
      deployTo: '~/facturapi-docs',
      repositoryUrl: 'https://github.com/FacturAPI/facturapi-docs.git',
      keepReleases: 2,
      key: '~/.ssh/id_rsa.pub',
      shallowClone: true
    },
    prod: {
      servers: argv.servers
    }
  });

  shipit.task('default', ['deploy']);
};
