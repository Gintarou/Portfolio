var ham = document.getElementById('ham');
var ham_menu_wrapper = document.getElementById('ham_menu_wrapper');

ham.addEventListener('click', function() {
  ham.classList.toggle('clicked');
  document.getElementById('home_name').classList.toggle('home_name_rotate');
  ham_menu_wrapper.classList.toggle('clicked');

  if( $('#ham_menu_wrapper').hasClass('clicked') ) {
    $('#ham_menu_wrapper').fadeIn();
  } else {
    $('#ham_menu_wrapper').fadeOut();
  }

});
