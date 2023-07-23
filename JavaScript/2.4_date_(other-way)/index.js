function getCurrentDate() {
  const date = new Date(Date.now());
  const options = {
    weekday: { weekday: "long" },
    month: { month: "long" },
  };
  const dayOfWeek = date.toLocaleDateString(undefined, options.weekday);

  console.log(dayOfWeek);

  const dayOfMonth = date.getDate();

  console.log(dayOfMonth);

  const month = date.toLocaleDateString(undefined, options.month);

  console.log(month);

  const year = date.getFullYear();

  console.log(year);
}
