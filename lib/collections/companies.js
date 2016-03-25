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


var imageStore = new FS.Store.S3("images", {
  region: "eu-west-1", //optional in most cases
  accessKeyId: "AKIAJJKOEX7UZ4RLP6LA", //required if environment variables are not set
  secretAccessKey: "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", //required if environment variables are not set
  bucket: "beamer-logos", //required
  ACL: "public-read-write", //optional, default is 'private', but you can allow public or secure access routed through your app URL
  folder: "logos", //optional, which folder (key prefix) in the bucket to use 
  // The rest are generic store options supported by all storage adapters
  // transformWrite: myTransformWriteFunction, //optional
  // transformRead: myTransformReadFunction, //optional
  // maxTries: 1 //optional, default 5
});

Images = new FS.Collection("images", {
  stores: [imageStore]
});