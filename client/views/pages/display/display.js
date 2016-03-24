Meteor.subscribe("companies");
Meteor.subscribe("images");

Template.display.helpers({
	companies: function () {
		return Companies.find();
	},
	picture: function () {
		return Images.findOne({_id: this.picture});
	}
});