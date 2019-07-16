
 */
module.exports = function(grunt) {

    grunt.config.set('cssmin', {
        dist: {
            src: ['.tmp/public/styles/app.css'],
            dest: '.tmp/public/styles/app.min.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};