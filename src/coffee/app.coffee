app = angular.module 'pelican', ['ngRoute', 'pelican.DashboardManager']

app.config ['$routeProvider', ($routeProvider) ->
	$routeProvider.when '/', {
		templateUrl: '/partials/dashboard.html',
		controller: 'DashboardCtrl'
	}
	return
]