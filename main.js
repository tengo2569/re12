const logo = document.getElementById('burgricon')
const viewlist = document.querySelector('.burgerlist')
logo.addEventListener('click', function() {
    viewlist.classList.toggle('active'); 
  
});
