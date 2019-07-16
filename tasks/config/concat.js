
module.exports = function(grunt) {

    grunt.config.set('concat', {
        css: {
            src: [
                'assets/styles/dependencies/**/*.css'
            ],
            dest: '.tmp/public/concat/styles/dependencies.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
