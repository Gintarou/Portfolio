var ham = document.getElementById('ham');
var ham_menu_wrapper = document.getElementById('ham_menu_wrapper');
var header = document.querySelector('header');

ham.addEventListener('click', function() {
  ham.classList.toggle('clicked');
  ham_menu_wrapper.classList.toggle('clicked');

  if( $('#ham_menu_wrapper').hasClass('clicked') ) {
    $('#ham_menu_wrapper').fadeIn();
  } else {
    $('#ham_menu_wrapper').fadeOut();
  }

});
