module.exports = function (grunt) {
    //описываем конфигурацию 
    grunt.initConfig({

        less: {
              main: {
                  files: {
                      "dev/assets/css/main.css": "dev/assets/css/main.less"
                  }
              }
          },
          
        cssmin: { //описываем работу плагина минификации и конкатенации css.
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'  //комментарий который будет в output файле.
                },
                files: {
                    'build/assets/css/main.min.css' : 'dev/assets/css/main.css'   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
                }
            }
        },

        csscomb: {
            options: {
                config: 'csscomb.json'
            },
            main: {
               expand: true,
               cwd: 'dev/assets/css/',
               src: ['base/*.less','project/*.less','cosmetic/*.less'],
               dest: 'dev/assets/css/'
            }
        },

        watch: { //описываем работу плагина слежки за файлами.
            options: {
                livereload: true
            },
            html: {
                files: ['dev/assets/index.html']
            },
            css: {
                files: ['dev/assets/css/**/*.less'], //следить за всеми less файлами в папке src
                tasks: ['less','cssmin'] //при их изменении запускать следующую задачу
            }
        }
    });
 
    //подгружаем необходимые плагины
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-csscomb');

    //регистрируем задачу 
    grunt.registerTask('default', ['less', 'cssmin', 'watch']); //задача по умолчанию, просто grunt
    grunt.registerTask('test', ['']); //пока пусто, но кто знает, возможно в следующих уроках мы этим воспользуемся <img src="http://loftblog.ru/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley"> 
};