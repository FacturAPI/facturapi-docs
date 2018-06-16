const argv = require('yargs')
  .option('servers', {
    type: 'string'
  })
  .argv;

// const workspace = '/tmp/facturapi-docs';

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  shipit.initConfig({
    default: {
      dirToCopy: 'build',
      deployTo: '~/facturapi-docs',
      repositoryUrl: 'https://github.com/FacturAPI/facturapi-docs.git',
      keepReleases: 2,
      branch: 'master'
    },
    prod: {
      servers: argv.servers
    }
  });

  shipit.task('default', ['deploy']);

  shipit.blTask('build', async () => {
    await shipit.local('npm run build', { cwd: shipit.workspace });
  });

  shipit.on('fetched', () => {
    return shipit.start('build');
  });
};
