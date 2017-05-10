(function(module){
  const assignmentsController = {};
  assignmentsController.init = function(){
    $('#home').hide();
    $('#grades').hide();
    $('title').html('assignments');
    $('#assignments').fadeIn('slow');
    $('#home-nav').find('a:first').attr('href', '/home').html('home');
    $('#home-nav').find('a:last').attr('href', '/grades').html('grades');
  }
  module.assignmentsController = assignmentsController;
})(window);
