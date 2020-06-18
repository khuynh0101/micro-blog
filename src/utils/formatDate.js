const formatDate = (dateInMilliseconds) => {
  const dateNowInSeconds = Date.now();
  const diffInSeconds = dateNowInSeconds - dateInMilliseconds;

  if (diffInSeconds < 60000) return 'less than a minute';

  for (let i = 1; i <= 2; i++) {

    if (diffInSeconds <= 3600000 * i) return 'less than ' + i + ' hour ago';
  }
  if (diffInSeconds >= 86400000 && diffInSeconds < 172800000)
    return '1 day ago';

  const date = new Date(parseInt(dateInMilliseconds));
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return (
    date.toLocaleString('default', { month: 'long' }) +
    ' ' +
    date.getDate() +
    ', ' +
    date.getFullYear() +
    '  ' +
    strTime
  );
};
export default formatDate;
