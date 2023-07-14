function toggleMenu() {
    var navbarTitles = document.querySelector('.navbar-titles');
    navbarTitles.classList.toggle('show');
    var hamburgerLines = document.querySelectorAll('.hamburger-line');
    hamburgerLines.forEach(function (line) {
      line.classList.toggle('active');
    });
  }
  