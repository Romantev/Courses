date1 = new Date(1999, 10, 5, 15); //PM
date2 = new Date();
date3 = new Date(2019, 12, 3, 12); //PM
date4 = new Date(2000, 1, 1, 11); //AM

const period = (date) => {
  let hour = date.getHours();

  if (hour < 12) {
    console.log(hour + " AM");
  } else {
    console.log(hour + " PM");
  }
};

period(date1);
period(date2);
period(date3);
period(date4);
