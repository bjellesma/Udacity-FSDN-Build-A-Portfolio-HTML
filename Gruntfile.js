module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		responsive_images: {
      dev: {
        options: {
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 20
          },{
            name: 'large',
            width: '50%',
            suffix: '_large',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
		pagespeed: {
		  options: {
		    nokey: true,
		    url: "https://developers.google.com"
		  },
		  prod: {
		    options: {
		      url: "https://developers.google.com/speed/docs/insights/v1/getting_started",
		      locale: "en_US",
		      strategy: "desktop",
		      threshold: 80
		    }
		  },
		  paths: {
		    options: {
		      paths: ["/speed/docs/insights/v1/getting_started", "/speed/docs/about"],
		      locale: "en_US",
		      strategy: "desktop",
		      threshold: 80
		    }
		  }
		},
		sass: {
			dist: {
				files: {
					'css/styles.css' : 'css/styles.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-pagespeed');
	grunt.registerTask('default',['watch']);
}
