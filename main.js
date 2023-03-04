

const seconds = document.querySelector('.seconds');
const hours   = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');



let update = () => {
  let time = new Date();
  let setSeconds = ((time.getSeconds()) / 60 ) * 360;
  let setHours = ((time.getHours()) / 12) * 360;
  let setMinutes = ((time.getMinutes()) / 60) * 360;
  console.log(setSeconds);
  seconds.style.transform = `rotate(${setSeconds}deg)`;
  hours.style.transform = `rotate(${setHours}deg)`;
  minutes.style.transform = `rotate(${setMinutes}deg)`;
};


setInterval(update,1000);