module.exports = (grunt) ->
  require('time-grunt')(grunt)
  endOfLine = require('os').EOL
  require('load-grunt-config') grunt,
    jitGrunt:
      staticMappings:
        'webpack-dev-server': 'grunt-webpack'

  grunt.registerTask 'serve', (target) ->
    if target is 'dist'
      grunt.task.run ['build', 'open:dist', 'connect:dist']
    else
      grunt.task.run [
        'open:dev',
        'webpack-dev-server'
      ]

  grunt.registerTask 'test', ['karma']

  grunt.registerTask 'build', ['clean', 'copy', 'webpack']

  grunt.registerTask 'deploy', ['build', 'gh-pages']

  grunt.registerTask 'default', ['serve']

  `grunt.registerTask('csvToJson', 'move dialogs from csv to json', function() {
      var csvFile = grunt.file.read('dialog.tsv');
      var csvLines = csvFile.split(endOfLine);
      var dialog = [];
      csvLines.forEach(function(line) {
          var cells = line.split('\t');
          var diaObj = {
              min: parseInt(cells[0]),
              max: parseInt(cells[1]),
              "intro": cells[2],
              "effects": {
                  "win": cells[4],
                  "fail": cells[3]
              },
              "noSelection": {
                  "result": cells[5],
                  "effect": parseInt(cells[6])
              },
              "selection": []
          };
          var foundSelections = true;
          var counter = 8;
          while (foundSelections) {
              if (cells[counter]) {
                  diaObj.selection.push({
                      text: cells[counter],
                      effect: parseInt(cells[counter + 1]),
                      result: cells[counter + 2]
                  });
                  counter += 3;
              } else {
                  foundSelections = false;
              }
          }
          dialog.push(diaObj);
      });
      // write element to a json file
      grunt.file.write('src/data/decisionNodes.json', JSON.stringify(dialog, undefined, '  '));
  });`
