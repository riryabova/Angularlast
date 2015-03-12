angular
    .module("app", ["filtersModule", "directivesModule"])
    .controller("Contorller1", ["$scope",
        function ($scope) {

            $scope.name = "fill";
            $scope.filterName = "";
            $scope.items = [];
            $scope.items2 = [];
            $scope.newItem = {
                name: "",
                priority: "",
                author: ""
            };
            $scope.add = function () {
                if (($scope.newItem.name != "") && ($scope.newItem.author != "") && (($scope.newItem.priority == "high") || ($scope.newItem.priority == "medium") || ($scope.newItem.priority == "low"))) {
                    $scope.items.push({
                        name: $scope.newItem.name,
                        priority: $scope.newItem.priority,
                        author: $scope.newItem.author
                    });
                    $scope.newItem.name = "";
                    $scope.newItem.priority = "";
                    $scope.newItem.author = "";
                } else {
                    alert("Error");
                }
            };


            $scope.del = function (item) {
                var index = $scope.items.indexOf(item);
                $scope.items.splice(index, 1);

            }
            $scope.replace = function (mname, mpr, misp, i) {
                $scope.items2.push({
                    name: mname,
                    priority: mpr,
                    author: misp
                });
                $scope.del(i);
            };

        }]);