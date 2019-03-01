import 'normalize.css'
import './sass/main.sass'

const favorite = document.querySelector('.fav-button');
favorite.addEventListener('click', function(){
  favorite.classList.toggle('active');
})
