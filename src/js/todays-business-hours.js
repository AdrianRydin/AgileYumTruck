export function displayBusinessHours() {
  const businessHoursElem = document.querySelector('#todays-business-hours');
  const businessHours = getRightBusinessHours();
  businessHoursElem.textContent = `ÖPPET IDAG ${businessHours}`;
}

function getRightBusinessHours() {
  const businessHours = initBusinessHours();
  const day = getTodaysDay();
  if (day === 0 || day === 6) {
    return businessHours.weekend;
  } else {
    return businessHours.weekday;
  }
}

function initBusinessHours() {
  return {
    weekday: '12:00 - 22:00',
    weekend: '15:00 - 17:00',
  };
}

function getTodaysDay() {
  const todaysDate = new Date();
  return todaysDate.getDay();
}
