'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
  .controller('MainCtrl', function ($http, $q) {

  	var gitHub = 'https://api.github.com';

  	function githubInfo() {
		var defer = $q.defer();
		$http.get(gitHub + '/repos/InvalidPleb/Runner-Calculator')
			.success(function(res) {
				defer.resolve(res);
			})
			.error(function(err, status) {
				defer.reject(err);
			});

		return defer.promise;
  	}

  	console.log(githubInfo());

	    
  });
