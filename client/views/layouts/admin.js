Template.adminLayout.rendered = function() {   
    $("#"+Router.current().route.getName()).addClass('active');     
    $('ul.tabs').tabs(); 
  }


Template.adminLayout.events({
  'click .tabs li': function(e, t){
    var href = e.target.id;     
    Router.go(href);
  }  
})