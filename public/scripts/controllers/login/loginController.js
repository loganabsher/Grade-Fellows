'use strict';
(function(module){
  const loginController = {};
  loginController.init = function(){
    $('#new').hide();
    $('title').html('login');
    $('#login').fadeIn('slow');
    $('#login-nav').find('a').attr('href', '/new').html('new');
  }
  module.loginController = loginController;
})(window);
