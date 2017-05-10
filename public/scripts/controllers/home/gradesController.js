(function(module){
  const gradesController = {};
  gradesController.init = function(){
    $('#home').hide();
    $('#assignments').hide();
    $('title').html('grades');
    $('#grades').fadeIn('slow');
    $('#home-nav').find('a:first').attr('href', '/home').html('home');
    $('#home-nav').find('a:last').attr('href', '/assignments').html('assignments');
  }
  module.gradesController = gradesController;
})(window);
