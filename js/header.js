var ham = document.getElementById('ham');
var ham_menu_wrapper = document.getElementById('ham_menu_wrapper');
var ham_link = document.getElementsByClassName('ham_link');

ham.addEventListener('click', function() {
  ham.classList.toggle('clicked');
  ham_menu_wrapper.classList.toggle('clicked');

  for(let i = 0; i < ham_link.length; i++) {
    ham_link[i].addEventListener('click', function() {
      ham.classList.remove('clicked');
    });
  }

  if( $('#ham_menu_wrapper').hasClass('clicked') ) {
    $('#ham_menu_wrapper').fadeIn();
    document.getElementById('home_name').classList.add('home_name_rotate');
  } else {
    $('#ham_menu_wrapper').fadeOut();
    document.getElementById('home_name').classList.remove('home_name_rotate');
  }

});
