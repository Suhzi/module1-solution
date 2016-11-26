(function () {
	'use strict';

	angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.lunchItems = "";
		$scope.message;

		$scope.checkStatus = function () {

				//check if nothing is entered
				if ($scope.lunchItems === "" || $scope.lunchItems === " ") {
					$scope.message = "Please enter data first";
				} else {
					var lunchItemsArray = $scope.lunchItems.split(','); //the split method is used

					//check the number of items
					if (lunchItemsArray.length <= 3) {
						$scope.message = "Enjoy!";
					} else {
						$scope.message = "Too much";
					}
				}
				return $scope.message;
			} //end of checkStatus function

	} //end of LunchCheckController function

})();