
module.exports = function(grunt) {

    grunt.config.set('clean', {
        dev: ['.tmp/public/**'],
        build: ['www'],
        unused: [
            './tmp/public/js/concat/**',
            '.tmp/public/js/dist/gz/**',
            '.tmp/public/styles/dist/gz/**'
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};