Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

Router.route('display', {
	path: '/display'
});

Router.route('/admin', function () {
	Router.go('companies');
})

Router.route('companies', {
	name: 'companies',
	path: '/admin/companies',
	layoutTemplate: 'adminLayout'
});

Router.route('addCompany', {
	name: 'addCompany',
	path: '/admin/add',
	layoutTemplate: 'adminLayout'
});

// Default route
Router.route('', function () {
    Router.go('display');
});