
export const timeConverter = (unixTimestamp, param) => {
  const newDate =  new Date(unixTimestamp * 1000);
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekDay = weekDays[newDate.getDay()];
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const date = newDate.getDate();
  const today = `${weekDay}`;
  if(param === 'dayweek') {
    return today;
  } else {
    return `${date}/${month}/${year}`;
  }

}

// export const getWeatherIcon = wetherState => {
//   if(wetherState === 'Clear') {
//     return imgUrlClear
//   }
//   if(wetherState === 'Clouds') {
//     return imgUrlClouds
//   }
//   if(wetherState === 'Rain') {
//     return imgUrlRain
//   }
//   if(wetherState === 'Snow') {
//     return imgUrlSnow
//   }
// }
