// jQuery $('document').ready(); function

var app = $.sammy('#main', function() {

    this.get('#/', function (context) {
        context.partial("parts/home.html")
    });
    this.get('#/about', function (context) {
        context.partial("parts/about.html")
    });


});


$('document').ready(function(){
    app.run('#/');
});
