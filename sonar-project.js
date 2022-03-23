const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://18.233.154.94:9980/rahul/',
       options : {
	    'sonar.projectDescription': 'React Application',
	    'sonar.projectName': 'React application',
	    'sonar.projectKey':'ReactApplication',
	    //'sonar.login': '007fa4025c11328682eea2bf88c1479976633faf',
	    'sonar.login': 'admin',
	    'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	    'sonar.javascript.file.suffixes':'.js,.jsx' 
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
