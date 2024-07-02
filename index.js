const now = new Date();
const Day = now.getUTCDay();
const Time = now.toISOString().slice(11, 19);
const dayElement = document.querySelector('[data-testid="currentDay"]');
  const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = daysOfWeek[Day];
  dayElement.textContent = `TODAY IS : ${dayOfWeek}`;
  timeElement.textContent = `THE TIME IS: ${Time}`;
  dayElement.style.color = 'rgb(76, 251, 114)';
  dayElement.style.fontsize