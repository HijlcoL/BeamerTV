Meteor.publish("companies", function () {
    return Companies.find();
  });

Meteor.publish("images", function () {
    return Images.find();
  });