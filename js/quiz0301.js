const h2 = document.querySelector("h2");

function getTime() {
  const now = new Date();
  const christmas = new Date("December 25, 2023 00:00:00");
  const date = christmas.getTime() - now.getTime();
  //getTime()은 1970, 1.1,00:00:00 부터 현재까지 걸린 시간을 초로 환산 해주는 함수이다
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
