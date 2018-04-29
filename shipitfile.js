var argv = require('yargs')
.option('servers', {
  type: 'string'
})
.argv;

const workspace = '/tmp/facturapi-docs';

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  shipit.initConfig({
    default: {
      workspace,
      dirToCopy: 'build',
      deployTo: '~/facturapi-docs',
      repositoryUrl: 'https://github.com/FacturAPI/facturapi-docs.git',
      keepReleases: 2,
      shallowClone: true,
      branch: 'master'
    },
    prod: {
      servers: argv.servers
    }
  });

  shipit.task('default', ['deploy']);

  shipit.blTask('build', () => {
    return shipit.local('npm run build', { cwd: workspace });
  });

  shipit.on('fetched', () => {
    return shipit.start('build');
  });
};
