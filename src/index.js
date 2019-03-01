import 'normalize.css'
import './sass/main.sass'

const favorite = document.querySelector('.fav-button');
favorite.addEventListener('click', function(){
  favorite.classList.toggle('active');
})

const api = `http://api.openweathermap.org/data/2.5/find?q=Kyiv&units=metric&appid=ffa19df254477b52e5f0e38980606a54`
fetch(api)
  .then((res) => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err);
  });
