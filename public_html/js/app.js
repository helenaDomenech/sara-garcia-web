
$(document).ready(function(){
  //COOKIES
  
  var showModal = $.cookie('showModal') !== 'false';
  if (showModal){
    $("#myModal").on('hide.bs.modal', function(){
      $.cookie('showModal', false);
    });
    $("#myModal").modal('show');
  }

  $('a.ancla').click(function(e){
    e.preventDefault();
    $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
  });

  var Menu = {
    
    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },
    
    init: function() {
      Menu.bindUIactions();
    },
    
    bindUIactions: function() {
      Menu.el.ham
          .on(
            'click',
          function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
    }
  };

  Menu.init();

  $('.nav-trigger').click(function(event){
    event.preventDefault();
    $('body').toggleClass('nav-open');
    $('#navigation').toggle();
  });

  $(function(){
    var animated='animated fadeInRight';
    $('.link').addClass(animated);
  });

      

  /*Animacion de formulario*/
  $('.mat-input').click(function(){
    event.preventDefault();
    $('.mat-div').addClass('is-active, is-completed');
  });


  /*Animacion de los contenedores con el scroll*/
  $(function() {
    $(window).scroll( function(){


      $('.animate').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
        bottom_of_window = bottom_of_window + 200;

        if( bottom_of_window > bottom_of_object ){

          $(this).animate({'opacity':'1'}, 400, "linear");

        }
      });

    });
  });

});