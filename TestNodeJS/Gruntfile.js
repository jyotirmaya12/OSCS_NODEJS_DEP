var grunt = require('grunt');
grunt.registerTask('scan', 'Scan NodeJS Module', function(name){
  var done = this.async();
  var args = require('minimist')(process.argv.slice(2));
  require('OSCS_NODEJS')(args);
});