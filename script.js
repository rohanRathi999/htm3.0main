
  const toggleBtn = document.getElementsByClassName('toggle-btn')[0]
  const navitems = document.getElementsByClassName('nav-items')[0]
  
  toggleBtn.addEventListener('click', () => {
    navitems.classList.toggle('active')
  })
  
