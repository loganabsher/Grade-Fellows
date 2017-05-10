'use strict';
(function(module){
  const newController = {};
  newController.init = function(){
    $('#login').hide();
    $('title').html('new');
    $('#new').fadeIn('slow');
    $('#login-nav').find('a').attr('href', '/').html('login');
  }
  module.newController = newController;
})(window);
