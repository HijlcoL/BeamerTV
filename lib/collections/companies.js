Companies = new Mongo.Collection('companies');

Companies.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Company name",
		min: 4
	},
	picture:{
    	type: String,
    	optional: true,
    	autoform: {
      		afFieldInput:{ 
        		type: 'fileUpload',
        		collection: 'Images',
        		label: 'Choose file'
    		}
    	}
    },
    display: {
        type: Boolean,
        defaultValue: false,
    }
}));

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: Meteor.absoluteUrl() + "/public/uploads"})]
});