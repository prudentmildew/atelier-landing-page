module.exports = function (shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            workspace: '/tmp/atelier/landing-page',
            deployTo: '/var/www/atelier/landing-page',
            dirToCopy: 'public',
            branch: 'master',
            repositoryUrl: 'https://github.com/prudentmildew/atelier-landing-page.git',
            ignores: ['.git', 'node_modules'],
            keepReleases: 2,
            deleteOnRollback: false,
            key: '~/.ssh/id_rsa',
            shallowClone: true
        },
        staging: {
            servers: 'erland@getatelier.com'
        }
    });
};
