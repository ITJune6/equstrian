let menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', function () {

  var sideNav = document.getElementById('sideNav');
  
  if (sideNav.style.right === '-500px') {
    sideNav.style.right = '0px';
    menuIcon.style.color = "#fff";
    menuIcon.innerHTML = '<i id="closeIcon" class="fas fa-times fa-lg"></i>'; // Close icon
  } else {
    sideNav.style.right = '-500px';
    menuIcon.innerHTML = '<i class="fas fa-bars fa-lg"></i>'; // Menu icon

    // change the color of the menu icon pased on the page (location)
    if (window.location.pathname.includes("index")) {
      //home page - make the color white
      menuIcon.style.color = "whitesmoke";
    } else {
      //other pages - make the color dark gray (default)
      menuIcon.style.color = "#333";
    }
  }
});