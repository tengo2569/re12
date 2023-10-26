const logo = document.getElementById('burgricon')

const viewlist = document.querySelector('.burgerlist')
const box = document.querySelector('.headtxt')
logo.addEventListener('click', function() {
    viewlist.classList.toggle('active'); 
    if (viewlist.classList.contains('active')) {
        viewlist.style.display = "block";
        box.style.display = "none"
     logo = document.getElementById('xxx')
    } else {
        viewlist.style.display = "none";
        box.style.display = "block"
    }
});