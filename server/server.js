Images.allow({
  'insert': function () {
    // add custom authentication code here
    return true;
  },
  'download': function () {
  	return true;
  }
});

Meteor.methods({
	'toggle': function(change, docId){
		Companies.update({_id: docId}, {$set: {display: change}});
	}
});