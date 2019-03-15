const argv = require('yargs')
  .option('bucket', {
    type: 'string'
  })
  .argv;
const { bucket } = argv;

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-gcs')(shipit);

  shipit.initConfig({
    default: {
      dirToCopy: 'build',
      deployTo: '/',
      repositoryUrl: 'https://github.com/FacturAPI/facturapi-docs.git',
      branch: 'master',
      gcs: { bucket }
    },
    prod: {
      servers: bucket
    }
  });

  shipit.task('default', ['gcs-deploy']);

  shipit.blTask('build', async () => {
    await shipit.local('npm i', { cwd: shipit.workspace });
    await shipit.local('npm run build', { cwd: shipit.workspace });
  })

  shipit.on('fetched', () => shipit.start('build'));
};
