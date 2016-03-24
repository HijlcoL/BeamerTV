Meteor.subscribe("companies");
Meteor.subscribe("images");

Template.companies.helpers({
	companies: function () {
		return Companies.find();
	},
	picture: function () {
		return Images.findOne({_id: this.picture});
	}
});


Template.companies.events({
	'change .switch input': function(event) {
		var change = event.target.checked;
		Meteor.call('toggle', change, this._id);
	},
	'click .delete': function(event) {
		var logo = this.picture;
		event.preventDefault();
	    if (confirm("Are you sure?") == true) {
	        Images.remove(logo);
	        Companies.remove(this._id);
	        console.log("Deleted!");
	    } else {
	        console.log("You pressed Cancel!");
	    }
	}
});