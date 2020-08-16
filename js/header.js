var ham = document.getElementById('ham');
var ham_menu_wrapper = document.getElementById('ham_menu_wrapper');
var ham_link = document.getElementsByClassName('ham_link');
var home_name = document.getElementById('home_name');

ham.addEventListener('click', function() {
  for(let i = 0; i < ham_link.length; i++) {
    ham_link[i].addEventListener('click', function() {
      ham.classList.remove('clicked');
      ham_menu_wrapper.classList.remove('clicked');
      $('#ham_menu_wrapper').fadeOut();
      home_name.classList.remove('home_name_rotate');
    });
  }

  ham.classList.toggle('clicked');
  ham_menu_wrapper.classList.toggle('clicked');

  if( $('#ham_menu_wrapper').hasClass('clicked') ) {
    $('#ham_menu_wrapper').fadeIn();
    home_name.classList.add('home_name_rotate');
  } else {
    $('#ham_menu_wrapper').fadeOut();
    home_name.classList.remove('home_name_rotate');
  }

});
