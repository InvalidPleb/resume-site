(function(){

	'use strict';

	angular
		.module('resumeApp')
		.factory('dataParse', dataParse)
		.factory('maths', maths);

	dataParse.$inject = ['maths'];


	// Factory containing general math functions
	function maths() {
		return {
			// Adds two numbers together
			add: function(a, b) {
					return a + b;
			     },
			// Generates a random number between min - max values
			getRandom: function(min, max) {
					  	return Math.random() * (max - min) + min;
					},
			// Rounds the number to the dec place specified
			numRound: function(value,dec){
				        value=Math.floor(value * dec + 0.05) / dec;
				        return(value);
	    			},
	    	// Creates an array with set length
			setArr: function(arr, length) {
						arr = [];
					  	for (let i=0; i < length; i++) {arr.push(i);}
					  	return arr;
					},
			// Opens a link with a given url. Acts like anchor tag.
		    openLink: function(url) {
						let link = window.open(url, '_blank');
						return link.focus();
					},
		};
	}//end maths

	// Factory containing functions to turn Github API data into workable objects
	function dataParse(maths) {
		return {

			// Gets the day commits from all Github repos in 'inputArr' and returns an array
			// containing an array of the repo names as strings, and an array with the daily
			// commits for each repo.
			getDayCommits: function (inputArr) {

					  			let inputArrSlice = [],
						  		    weekCurrTotal = [],
						  		    outputDays = [],
						  		    outputRepos = [];

						  		let error = false;

						  		for (let i=0; i < 4; i++) {
						  			inputArrSlice[i] = inputArr[i+1];
						  		}

						  		for (let i=0, n=inputArrSlice.length; i < n; i++) {

						  			let weekCurr = inputArrSlice[i];
						  			weekCurrTotal[i] = [];

						  			for (let j=0; j < 52; j++) {

						  				if (outputDays[j] === undefined) {
						  					outputDays[j] = [];
						  					
						  					if (weekCurr[j] !== undefined) {
						  						outputDays[j].push(weekCurr[j].days);
						  					} else {

						  						error = true; 
						  					}
						  					
						  				} else {

						  					if (weekCurr[j] !== undefined) {
						  						outputDays[j].push(weekCurr[j].days);
							  				} else {

							  					error = true;
							  				}
						  				}

						  				if (weekCurr[j] !== undefined) {
						  					weekCurrTotal[i].push(weekCurr[j].total);
						  				} else {
						  					error = true;
						  				}
						  			}
						  			outputRepos[i] = (weekCurrTotal[i].reduce(maths.add, 0));
						  		}

						  		// TODO: find solution to Github API errors
						  		if (error === true) {
						  			location.reload();
						  		}

						  		return [outputRepos, outputDays];
					  		},// end getDayCommits

			// Takes in a Github repo array and returns an array with all repo commits summed
			sumDayCommits: function(inputArr) {

						  		let daySums = [];

						  		for (let i=0, n=inputArr.length; i < n; i++) {

						  			let weekCurr = inputArr[i];

						  			if (daySums[i] === undefined) {
						  				daySums[i] = [];
						  			}

						  			for (let j=0, n=weekCurr.length; j < n; j++) {
						  				let dayCurr = weekCurr[j];
						  				for (let l=0, m=dayCurr.length; l < m; l++) {

						  					daySums[i].push(dayCurr[l]);
						  				}
						  			}
						  		}
						  		return daySums;
					  		},//end sumDayCommits

			// Takes in the Github day array and returns an array containing
			// an array of all week commits summed by week, and an array
			// containing each day commit by day.
			parseCommits: function(inputArr) {

				  			let dayArr = [],
				  			    weekCommits = [],
					  		    daySumsCurr = [],
					  		    dayArrCurr = [],
					  		    j = 0;

					  		for (let i=0, n=inputArr.length; i < n; i++) {

					  			if (dayArr[i] === undefined) {

					  				dayArr[i] = [];

					  			}

					  			daySumsCurr = inputArr[i];
					  			weekCommits.push(inputArr[i].reduce(maths.add, 0));

					  			for (let l=0, m=daySumsCurr.length; l < m; l++) {

					  				if (l % 7 === 0) {
						  				j = 0;
						  			} else {
						  				j++;
						  			}

					  				dayArrCurr = dayArr[i];
					  				if (dayArrCurr[j] === undefined) {

					  					dayArrCurr[j] = daySumsCurr[l];
					  				} else {

					  					dayArrCurr[j] = (dayArrCurr[j] + daySumsCurr[l]);
					  				}
					  			}
					  		}
					  		return [weekCommits, dayArr];
				  		},//end parseCommits

			// Takes in a Github day array and returns the streak of days	  		
		    streakData: function(inputArr) {

				  			let streakArr = [];
				  			for (let i=0, n=inputArr.length; i < n; i++) {

				  				let currInputArr = inputArr[i];

				  				for (let j=0, m=currInputArr.length; j < m; j++) {

				  					streakArr.push(currInputArr[j]);
				  				}
				  			}
				  			return streakArr;
				  		},//end steakData

			// Counts the streaks and determines the current streak and longest streak
			getStreaks: function(inputArr) {

							let streakCounter = 0,
							    longestStreak = 0,
							    currStreak = 0,
							    endCurrStreak = false;

							for (let i=0; i < inputArr.length; i++) {

								if (inputArr[i] === 0) {

									if (streakCounter !== 0) {

										if (longestStreak < streakCounter) {
											longestStreak = streakCounter;
										}
										streakCounter = 0;
									}
								} else {
									streakCounter++;
									currStreak = streakCounter;
								}
							}
							return [currStreak, longestStreak];
						},
	    	};//end getStreaks
	}//end dataParse
})();//end IIFE
