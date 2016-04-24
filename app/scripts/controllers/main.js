'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
	.factory('getNames', function ($http, $q) {
		var defer = $q.defer();
	    return {
	    	get: function (call) {
				$http.get(call)
					.success(function(res) {
						defer.resolve(res);
					})
					.error(function(err, status) {
						defer.reject(err);
					});

				return defer.promise;
	  		}
	    };
	})
  	.controller('MainCtrl', function ($http, $q, $scope, getNames) {

	  	var i, j;

	  	function add(a, b) {
	      	return a + b;
	  	}

	  	var githubGet = 'https://api.github.com';
	  	var commitContainer = [];
	  	var repoContainer = [];
	  	var commitTotal = 0;
	  	var commitOwnerTotal = [];

	  	function pushCalledCommits(res, container) {
	  		
	  		for (i=0; i < res.length; i++) {

	  			if (res[i].total > 0) {

	  				for (j=0; j < res[i].days.length; j++) {
	  					container.push(res[i].days[j]);

	  				}
	  			}
	  		}

	  		return container.reduce(add, 0);

	  	}



	  	function getGithubStuff() {
	  		return $http.get(githubGet + '/users/InvalidPleb/repos')
		  		.then(function(res){
		  			pushCalledRepo(res.data);
		  			return getOwnerCommits(repoContainer[0], -1, repoContainer.length);
		  		});
		  		
			
	  	}

	  	function getOwnerCommits (repo, repoNum, maxRepos) {
	  		return $http.get(githubGet + '/repos/' + repo + '/stats/participation')
	  			.then(function(res){
	  				commitOwnerTotal.push(res.data.owner.reduce(add, 0));

	  				repoNum++;

	  				if (repoNum < maxRepos) {
	  					return getOwnerCommits(repoContainer[repoNum], repoNum, maxRepos);
	  				}
	  			});
	  	}
	  	
	  	function getCommits (repo, repoNum, maxRepos) {

	  		return $http.get(githubGet +'/repos/' + repo + '/stats/commit_activity')
	  			.then(function(res){
		  			pushCalledCommits(res.data, commitContainer);		
		  			commitTotal = commitContainer.reduce(add, 0);

		  			repoNum++;

		  			if (repoNum < maxRepos) {
		  				return getCommits(repoContainer[repoNum], repoNum, maxRepos);
		  			}
		  			
		  		});
	  		
	  	}


	  	function pushCalledRepo (res) {
	  		for (i = 0; i < res.length; i++) {
	  			repoContainer.push(res[i].full_name);
	  		}
	  	}

	  	var calls = getGithubStuff();

	  	$q.all([calls]).then(function(){
	  		console.log(commitOwnerTotal);
	  	});

	  	/*

	  	

	  	githubInfo(githubGet + reposGet).then(function(res){

	  		var fullNames = [];

	  		for (i = 0; i < res.length; i++) {
	  			fullNames.push(res[i].full_name);

	  		}

	  		return githubInfo(githubGet + '/repos/' + fullNames[0] + '/stats/commit_activity');


	  	}).then(function(res){

	  	}).catch(function(err){

	  	});

	  	githubInfo(githubGet + runCalcCommitGet).then(function(res){
	  		console.log(loopCommits(res, commitContainer));

	  	}).catch(function(err){
	  		console.log("nop");

	  	});



	  	/*

	  	var commits;

	  	var promise = $http.get('https://api.github.com/repos/InvalidPleb/Runner-Calculator/stats/commit_activity');
	  	promise.then(function(payload) {
	  		return payload.data;
	  	});

	  	/*

	  	function(a,u){
	        u.getUser().then(function(user){
	            a.user = user;
	            console.log(a.user);
	        });
	    }
	    */

	  	//console.log(commits);
});
