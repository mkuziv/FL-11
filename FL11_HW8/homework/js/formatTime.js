function formatTime(min) {
  let days = min/1440;
  let fullD = Math.floor(days);
  let hours = (days - fullD) * 24;
  let fullH = Math.floor(hours);
  let minutes = (hours - fullH) * 60;
  let fullM = Math.round(minutes)
  
  return `${fullD} day(s)  ${fullH} hour(s)  ${fullM} minute(s)`
}
formatTime(3600);