const root = document.documentElement;

const themeBtn = document.getElementById('theme-btn');

//Body -theme
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeBtn.classList.toggle('bi-moon-stars');
  if (document.body.classList.contains('dark-theme')) {
    root.style.setProperty('--text-theme', 'white');
  } else {
    root.style.setProperty('--text-theme', 'black');
  }
});


const seconds = document.querySelector('.seconds');
const hours   = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');

const themes = document.getElementById('themes');


let update = () => {
  let time = new Date();
  let setSeconds = ((time.getSeconds()) / 60 ) * 360;
  let setHours = ((time.getHours()) / 12) * 360;
  let setMinutes = ((time.getMinutes()) / 60) * 360;
  seconds.style.transform = `rotate(${setSeconds}deg)`;
  hours.style.transform = `rotate(${setHours}deg)`;
  minutes.style.transform = `rotate(${setMinutes}deg)`;
};


setInterval(update,1000);

// Themes

themes.addEventListener('change',() => {
  let color = themes.value;
  root.style.setProperty('--theme',color);
});