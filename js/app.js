angular.module('myApp', ['ui.bootstrap', 'angularMoment'])

.config( [
    '$compileProvider',
    function( $compileProvider ) {
      // Angular -1.2.0-rc2 : /^\s*(https?|ftp|file):|data:image\//
      var currentImgSrcSanitizationWhitelist = $compileProvider.imgSrcSanitizationWhitelist();
      newImgSrcSanitizationWhiteList = currentImgSrcSanitizationWhitelist.toString().slice(0,-1)+'|filesystem:chrome-extension:'+'|blob:chrome-extension%3A'+currentImgSrcSanitizationWhitelist.toString().slice(-1);
      $compileProvider.imgSrcSanitizationWhitelist(newImgSrcSanitizationWhiteList);
    }
])

.controller('MainCtrl', function($scope, $http) {

  var searchUrl = "http://tc-search.herokuapp.com"
  var ezUserUrl = "https://ez-user-service.herokuapp.com"
  var ezApiKey = null;

  // check for any settings
  chrome.storage.sync.get({
    ezApiKey: ''
  }, function(settings) {
    ezApiKey = settings.ezApiKey;
  });

  $scope.challengeSearchOptions = [
    {value:'challengeName:', name:'scope: name'},
    {value:'challengeType:', name:'scope: type'},
    {value:'currentPhaseName:', name:'scope: phase'},
    {value:'platforms:', name:'scope: platforms'},
    {value:'technologies:', name:'scope: technologies'},
    {value:'', name:'scope: entire challenge'}
  ];

  // does the user want to see the full details of challenge results
  $scope.showChallengeDetails = false;
  // display message for results of search
  $scope.challengeSearchMessage = '';
  $scope.handleOrEmail = '11';

  $scope.searchCriteria = {
    keyword: '',
    field: $scope.challengeSearchOptions[0],
    excludeComplete: true
  }

  $scope.memberWhois = {
    handleOrEmail: ''
  }

  $scope.memberSearch = function() {

    $http.get(ezUserUrl + "/m/" + $scope.memberWhois.handleOrEmail + "?apiKey=" + ezApiKey)
      .success(function (results) {
        $scope.member = results
        $scope.memberSearchMessage = 'Found the following matching member...';

        $scope.profilePic = 'http://community.topcoder.com/i/m/jeffdonthemic.jpeg';

      })
      .error(function(data, status, headers, config) {
        console.log(status);
        if (status === 404) {
          $scope.memberSearchMessage = 'Member not found.';
          $scope.member = null;
        } else if (status === 403) {
          $scope.memberSearchMessage = 'Not authorized for member lookup. Please contact jeff@appirio.com.';
          $scope.member = null;
        } else {
          $scope.memberSearchMessage = 'Error! Server returned ' + status + ' error.';
        }
      });

  }

  $scope.challengeSearch = function() {

    // build the query string
    var q = $scope.searchCriteria.field.value + $scope.searchCriteria.keyword;
    // append if they want to see completed challenges
    if ($scope.searchCriteria.excludeComplete) {
      q = q + " AND -status:(Completed OR Cancelled - Failed Screening)";
    }

    $http.get(searchUrl + "/challenges/search?q=" + encodeURIComponent(q))
      .success(function (challenges) {

        $scope.challenges = [];

        for (var i=0; i<challenges.length; i++) {
          // set the object for easy use
          var c = challenges[i]._source;
          var totalPrize = 0;
          // calculate the total prize
          for (k = 0; k < c.prize.length; k++) {
            totalPrize += c.prize[k];
          }

          $scope.challenges.push({
            'name': c.challengeName,
            'type': challenges[i]._type,
            'technologies': c.technologies.join(', '),
            'platforms': c.platforms.join(', '),
            'registrants': c.numRegistrants,
            'submissions': c.numSubmissions,
            'challengeType': c.challengeType,
            'phase': c.currentPhaseName,
            'id': c.challengeId,
            'forumId': c.forumId,
            'submissionEndDate': moment(c.submissionEndDate).format("MMM Do"),
            'totalPrize': totalPrize
            });

        }

        $scope.challengeSearchMessage = $scope.challenges.length + ' challenges returned';

      })
      .error(function(data, status, headers, config) {
        $scope.challengeSearchMessage = 'Error! Server returned ' + status + ' error.';
      });

  };

});
