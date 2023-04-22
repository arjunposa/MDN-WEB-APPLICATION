//theme changer
function darktheme() {
  let element = document.body;
  element.classList.toggle("dark-theme");
}
 //logo changer 
 let logo = () => {  
  let logo = document.getElementById('logo');
  let whiteLogo = './assets/images/MDN_Web_Docs_logo.svg';
  let darkLogo = './assets/images/MDN_Web_Docs_logo_2.svg';
  let currentLogo = logo.getAttribute('src');
  if (currentLogo === whiteLogo){
    logo.setAttribute('src',darkLogo);
  }
  else {
    logo.setAttribute('src',whiteLogo);
  }
 }
//toggle action of fa-bars to show the nav-links2 class
function toggleNav() {
  const navs = document.querySelectorAll('.nav-links2');
  
  navs.forEach(function(nav) {
    if (nav.classList.contains('Navbar__ToggleShow')) {
      nav.classList.remove('Navbar__ToggleShow');
    } else {
      nav.classList.add('Navbar__ToggleShow');
    }
  });
}


  
