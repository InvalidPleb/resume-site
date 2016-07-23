(function(){
	
	'use strict';

	angular
		.module('resumeApp')
		.factory('dataParse', dataParse)
		.factory('maths', maths);

	dataParse.$inject = ['maths'];

	function maths() {
		return {
			add: function(a, b) {
					return a + b;
			     },
			getRandom: function(min, max) {
					  	return Math.random() * (max - min) + min;
					},
			numRound: function(value,dec){
				        value=Math.floor(value * dec + 0.05) / dec;
				        return(value);
	    			},
			setArr: function(arr, num) {
						arr = [];
					  	for (let i=0; i < num; i++) {arr.push(i);}
					  	return arr;
					},
		    openLink: function(url) {
						return window.open(url, '_blank');
					},
		};
	}

	function dataParse(maths) {
		return {
			getDayCommits: function (inputArr) {

					  			let inputArrSlice = [],
						  		    weekCurrTotal = [],
						  		    outputDays = [],
						  		    outputRepos = [];

						  		for (let i=0; i < 4; i++) {
						  			inputArrSlice[i] = inputArr[i+1];
						  		}

						  		for (let i=0, n=inputArrSlice.length; i < n; i++) {

						  			let weekCurr = inputArrSlice[i];
						  			weekCurrTotal[i] = [];

						  			for (let j=0; j < 52; j++) {

						  				if (outputDays[j] === undefined) {
						  					outputDays[j] = [];
						  					outputDays[j].push(weekCurr[j].days);
						  				} else {
						  					outputDays[j].push(weekCurr[j].days);
						  				}
						  				weekCurrTotal[i].push(weekCurr[j].total);
						  			}
						  			outputRepos[i] = (weekCurrTotal[i].reduce(maths.add, 0));
						  		}
						  		return [outputRepos, outputDays];
					  		},
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
					  		},
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
				  		},
		    streakData: function(inputArr) {

				  			let streakArr = [];
				  			for (let i=0, n=inputArr.length; i < n; i++) {

				  				let currInputArr = inputArr[i];

				  				for (let j=0, m=currInputArr.length; j < m; j++) {

				  					streakArr.push(currInputArr[j]);
				  				}
				  			}
				  			return streakArr;
				  		},
			getStreaks: function(inputArr) {

							let streakCounter = 0,
							    longestStreak = 0,
							    currStreak = 0,
							    endCurrStreak = false;

							for (let i = (inputArr.length - 1); i > 0; i--) {

								if (inputArr[i] === 0) {

									if (streakCounter === 0) {

									} else {

										if (currStreak > longestStreak) {
											longestStreak = currStreak;
										}
										endCurrStreak = true;
										streakCounter = 0;
									}

								} else {

									if (endCurrStreak === false) {
										currStreak = streakCounter;
									}
									streakCounter++;
								}
							}
							return [currStreak, longestStreak];
						},
	    	};
	}
})();