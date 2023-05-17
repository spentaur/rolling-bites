function isOpen(data) {
  const now = new Date();

  const results = data.filter((item) => {
    const open = new Date(item.datetimeOpen);
    const close = new Date(item.datetimeClose);
    return now >= open && now <= close;
  });
  return results.length > 0;
}

function isCurrentShift(data) {
  const now = new Date();
  const open = new Date(data.datetimeOpen);
  const close = new Date(data.datetimeClose);
  return now >= open && now <= close;
}

function formatUnixTime(datetimeOpen, datetimeClose) {
  // convert Unix timestamp to milliseconds
  var dateOpen = new Date(datetimeOpen * 1000);
  var dateClose = new Date(datetimeClose * 1000);

  // get formatted date
  var optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var formattedDate = dateOpen.toLocaleDateString(undefined, optionsDate);

  // get formatted time
  var optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
  var formattedTimeOpen = dateOpen.toLocaleTimeString(undefined, optionsTime);
  var formattedTimeClose = dateClose.toLocaleTimeString(undefined, optionsTime);

  // combined formatted time
  var formattedTime = formattedTimeOpen + " - " + formattedTimeClose;

  // return formatted date and time
  return {
    date: formattedDate,
    time: formattedTime,
  };
}

export { isOpen, isCurrentShift, formatUnixTime };
