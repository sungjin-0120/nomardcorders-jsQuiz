const h2 = document.querySelector("h2");

function getTime() {
  const now = new Date();
  const christmas = new Date("December 25, 2023 00:00:00");
  const date = christmas.getTime() - now.getTime();
  const day = String(Math.floor(date / (24 * 60 * 60 * 1000) + 1)).padStart(
    2,
    "0"
  );
  const dayRemain = Math.floor(date % (24 * 60 * 60 * 1000));
  const hour = String(Math.floor(dayRemain / (60 * 60 * 1000))).padStart(
    2,
    "0"
  );
  const hourRemain = dayRemain % (60 * 60 * 1000);
  const minutes = String(Math.floor(hourRemain / (60 * 1000))).padStart(2, "0");
  const minutesRemain = Math.floor(hourRemain % (60 * 1000));
  const secs = String(Math.floor(minutesRemain / 1000)).padStart(2, "0");
  h2.innerText = `${day}d:${hour}h:${minutes}m:${secs}s`;
}
getTime();
setInterval(getTime, 1000);
