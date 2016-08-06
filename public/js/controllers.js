myApp.controller('HomeCtrl', ['$scope',
        function($scope) {
            $scope.test = "111";
        }
    ])
    .controller('ArticlesCtrl', ['$scope', 'CRUD', function($scope, CRUD) {
        $scope.articles = [{
            title: 't1'
        }, {
            title: 't2'
        }];

        $scope.pageChanged=function(newPage){
          CRUD.articles.findAll(newPage,$scope.limit).then(function(res){
            $scope.articles=res.data.articles;
          });
        };
    }])
    .controller('QuestionsCtrl', ['$scope', 'CRUD', function($scope, CRUD) {
        $scope.total = 0;
        $scope.page = 1;
        $scope.limit = 5;

        $scope.pageChanged = function(newPage) {
            CRUD.questions.findAll(newPage, $scope.limit).then(function(res) {

                $scope.questions = res.data.questions;
                var meta = res.data.meta;
                $scope.meta = meta;

                $scope.limit = meta.limit;
                $scope.total = meta.total;
                $scope.page = meta.page;

                //console.log(JSON.stringify(res.data));

            });

        };

        $scope.pageChanged($scope.page, $scope.limit);

    }]);
