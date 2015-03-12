angular
    .module("directivesModule", [])
    .directive("prioritycolor", function () {

        return {
            restrict: "A",
            require: "?ngModel",
            link: function ($scope, $element, attrs, ngModel) {
                if ($scope.i.priority == "high") {

                    $element.css({ "color": "red" });

                }
                if ($scope.i.priority == "medium") {

                    $element.css({ "color": "yellow" });

                }
                if ($scope.i.priority == "low") {

                    $element.css({ "color": "green" });

                }
            }
        };
    });