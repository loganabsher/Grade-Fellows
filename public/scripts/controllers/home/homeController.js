(function(module){
  const homeController = {};
  homeController.init = function(){
    $('#grades').hide();
    $('#assignments').hide();
    $('title').html('home');
    $('#home').fadeIn('slow');
    $('#home-nav').find('a:first').attr('href', '/grades').html('grades');
    $('#home-nav').find('a:last').attr('href', '/assignments').html('assignments');
  }
  module.homeController = homeController;
})(window);
