export const parseTimestampDateToString = () => `Sunday, Febrary 11th, 2022`;
export const parseTimestampTimeToString = () => `15:34:10`;

export const parseUNIXTimestampToString = (timestamp) => {
  let a = new Date(timestamp * 1000);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
  return time;
};
