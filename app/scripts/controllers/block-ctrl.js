'use strict';

angular
    .module('resumeApp')
    .controller('BlockCtrl', BlockCtrl);

BlockCtrl.$inject = ['$scope'];

function BlockCtrl($scope) {

	// -------- Block Template Instance Data -------- //
		$scope.darkreader = {

			attr:  {	
						blockClass: 'darkreader-cont',
		  				id: "darkreader",
		  				href: "https://github.com/alexanderby/darkreader",
		  				nameClass: "block-name-def-dark",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {
						nameHide: "false",
			  			paraHide: "false",
						skill1Hide: "true",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "",
			  			skill2: "",
			  			skill3: "",
			  			skill4: ""
					},

			text:   {
						nameTxt: "Dark Reader",
						paraTxt: "A chrome extension that inverts brightness of web pages and aims to reduce eyestrain while browsing the web.",
			  			txt1: "View on",
			  			txt2: "Github",
					}
		};

		$scope.tmtheme = {

			attr:   {
						blockClass: "tmtheme-cont",
		  				id: "tmtheme",
		  				href: "https://github.com/aziz/tmTheme-Editor",
		  				nameClass: "block-name-def-tm",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "false",
						skill1Hide: "true",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "",
			  			skill2: "",
			  			skill3: "",
			  			skill4: ""
					},

			text:   {
						nameTxt: "TmTheme Editor",
						paraTxt: "A color scheme editor for SublimeText, Textmate and other text editors. It allows you to edit tmtheme files easier and faster.",
			  			txt1: "View on",
			  			txt2: "Github",
					}
		};


		$scope.html = {

			attr:  {
						blockClass: "htmlBlock-cont",
		  				id: "htmlBlock",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2 col-centered"
					},

			binding: {
						nameHide: "false",
		  				paraHide: "true",
						skill1Hide: "true",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "",
			  			skill2: "",
			  			skill3: "",
			  			skill4: ""
					},

			text:   {
						nameTxt: "HTML",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.javascript = {

			attr:  {
						blockClass: "javascript-cont",
		  				id: "javascript",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2 col-centered"
					},

			binding: {
						nameHide: "false",
		  				paraHide: "true",
						skill1Hide: "true",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "",
			  			skill2: "",
			  			skill3: "",
			  			skill4: ""
					},

			text:   {
						nameTxt: "JavaScript",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.css = {

			attr:  {
						blockClass: "css-cont",
		  				id: "css",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2 col-centered"
					},

			binding: {
						nameHide: "false",
		  				paraHide: "true",
						skill1Hide: "true",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "",
			  			skill2: "",
			  			skill3: "",
			  			skill4: ""
					},

			text:   {
						nameTxt: "CSS",
						paraTxt: "",
		  				txt1: "",
		  				txt2: "",
					}
		};


		$scope.angular = {

			attr:   {
						blockClass: "angular-cont",
		  				id: "angular",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "false",
			  			skill3Hide: "false",
			  			skill4Hide: "false",
					},

			skills: {
						skill1: "Data Binding",
			  			skill2: "Templating",
			  			skill3: "Routing",
			  			skill4: "MVC/MVW",
					},

			text:   {
						nameTxt: "Angular",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.jQuery = {

			attr:   {
						blockClass: "jquery-cont",
		  				id: "jquery",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "false",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "DOM Manipulation",
			  			skill2: "AJAX",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "jQuery",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.bootstrap = {

			attr:   {
						blockClass: "bootstrap-cont",
		  				id: "bootstrap",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "Responsive Design",
			  			skill2: "",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "Bootstrap",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.git = {

			attr:   {
						blockClass: "git-cont",
		  				id: "git",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "false",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "Version Control",
			  			skill2: "Github",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "Git",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.yeoman = {

			attr:   {
						blockClass: "yeoman-cont",
		  				id: "yeoman",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "false",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "Yeoman Workflow",
			  			skill2: "Scaffolding",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "Yeoman",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.grunt = {

			attr:   {
						blockClass: "grunt-cont",
		  				id: "grunt",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "false",
			  			skill3Hide: "false",
			  			skill4Hide: "false",
					},

			skills: {
						skill1: "Compiling",
			  			skill2: "Minification",
			  			skill3: "Linting",
			  			skill4: "Livereload",
					},

			text:   {
						nameTxt: "Grunt",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.bower = {

			attr:   {
						blockClass: "bower-cont",
		  				id: "bower",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "Package Managing",
			  			skill2: "",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "Bower",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.sass = {

			attr:   {
						blockClass: "sass-cont",
		  				id: "sass",
		  				href: "",
		  				nameClass: "block-name-def-sass",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "false",
			  			skill3Hide: "false",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "Simple CSS Syntax",
			  			skill2: "Variables",
			  			skill3: "Inheritance",
			  			skill4: "",
					},

			text:   {
						nameTxt: "Sass",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.cscript = {

			attr:   {
						blockClass: "cscript-cont",
		  				id: "cscript",
		  				href: "",
		  				nameClass: "block-name-def-cscript",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "Simple JS Syntax",
			  			skill2: "",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "CoffeeScript",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.gimp = {

			attr:   {
						blockClass: "gimp-cont",
		  				id: "gimp",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "false",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "Image Editing",
			  			skill2: "Bitmapping",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "Gimp",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.balsamiq = {

			attr:   {
						blockClass: "balsamiq-cont",
		  				id: "balsamiq",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "false",
			  			skill2Hide: "false",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "Wireframing",
			  			skill2: "Mockups",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "Balsamiq",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.d3 = {

			attr:   {
						blockClass: "d3-cont",
		  				id: "d3",
		  				href: "",
		  				nameClass: "block-name-def",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "false",
						skill1Hide: "false",
			  			skill2Hide: "false",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "Data Visualization",
			  			skill2: "SVG Manipulation",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "D3",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.email = {

			attr:   {
						blockClass: "email-cont",
		  				id: "email",
		  				href: "",
		  				nameClass: "block-name-def-soc",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "true",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "",
			  			skill2: "",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "E-Mail",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.linkedin = {

			attr:   {
						blockClass: "linkedin-cont",
	  					id: "linkedin",
		  				href: "",
		  				nameClass: "block-name-def-soc",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "false",
						skill1Hide: "true",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "",
			  			skill2: "",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "Linkedin",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

		$scope.githubsocial = {

			attr:   {
						blockClass: "githubsocial-cont",
		  				id: "githubsocial",
		  				href: "",
		  				nameClass: "block-name-def-soc",
		  				bsCol: "col-lg-2 col-md-2 col-sm-2 col-xs-2"
					},

			binding: {

						nameHide: "false",
						paraHide: "true",
						skill1Hide: "true",
			  			skill2Hide: "true",
			  			skill3Hide: "true",
			  			skill4Hide: "true",
					},

			skills: {
						skill1: "",
			  			skill2: "",
			  			skill3: "",
			  			skill4: "",
					},

			text:   {
						nameTxt: "Github",
						paraTxt: "",
			  			txt1: "",
			  			txt2: "",
					}
		};

} 
