module = angular.module 'pelican.DashboardManager'

module.controller 'DashboardCtrl', ['$scope', ($scope) ->
	$scope.var = 'world'
	return
]