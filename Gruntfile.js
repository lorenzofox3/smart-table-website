module.exports = function (grunt) {

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        src: {
            js: ['sections/head/code.js',
                'sections/basics/code.js',
                'sections/format/code.js',
                'sections/sort/code.js',
                'sections/filter/code.js',
                'sections/selection/code.js',
                'sections/edit/code.js',
                'sections/style/code.js',
                'sections/cellTemplate/code.js',
                'sections/pagination/code.js',
                'sections/config/code.js'],
            html: ['sections/head/markup.html',
                'sections/introduction/markup.html',
                'sections/basics/markup.html',
                'sections/format/markup.html',
                'sections/sort/markup.html',
                'sections/filter/markup.html',
                'sections/selection/markup.html',
                'sections/edit/markup.html',
                'sections/style/markup.html',
                'sections/cellTemplate/markup.html',
                'sections/pagination/markup.html',
                'sections/config/markup.html',
                'sections/foot/markup.html']
        },
        concat: {
            options: {
            },
            js: {
                src: ['<%= src.js %>'],
                dest: 'assets/js/app.js'
            },
            html: {
                src: ['<%= src.html %>'],
                dest: 'index.html'
            }
        }
    });
    // Default task(s).
    grunt.registerTask('default', ['concat', 'copy']);
};
