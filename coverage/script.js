const btnent = document.querySelector(".ent");
const btnext = document.querySelector(".ext");
const sss = document.querySelector(".sum");
const img = document.querySelector(".img");
let sum1 = null;
let sum2 = null;
let sum3 = 2;

btnent.addEventListener("click", function () {
  sum1 = new Date();
  img.style.right = "50%";
  return sum1;
});

btnext.addEventListener("click", function () {
  sum2 = new Date();
  img.style.right = "150%";
  let parkingtotalMinutes = Math.abs(
    sum1.getHours() * 60 +
      sum1.getMinutes() -
      (sum2.getHours() * 60 + sum2.getMinutes())
  );
  let parkingHours = Math.floor(parkingtotalMinutes / 60);
  let parkingMinutes = parkingtotalMinutes % 60;
  alert(parkingHours + "soat", parkingMinutes + "minut");

  if (parkingMinutes > 0) {
    parkingHours = parkingHours + 1;
  }
  if (parkingHours !== 0 || parkingMinutes !== 0) {
    sum3 = parkingHours * 4 + 1;
  }
  sss.innerHTML = sum3;
});
