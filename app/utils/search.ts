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

export { isOpen, isCurrentShift };
