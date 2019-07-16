
module.exports = function(grunt) {

	grunt.config.set('watch', {
        sass: {
            files: ['assets/styles/**/*'],
            tasks: ['sass:dev', 'concat', 'copy:concatStyles']
        },
        options: {
            livereload: true
        } 
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
