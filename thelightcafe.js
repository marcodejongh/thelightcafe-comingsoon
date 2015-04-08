if(Meteor.isClient) {
    Meteor.startup(function () {
        $('#header').delay(100).fadeIn(1000);
        $('#intro').delay(300).fadeIn(500);
    });
}
