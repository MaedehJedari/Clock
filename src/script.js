setInterval(function () {
  let losangelesElement = document.querySelector("#Losangeles");
  let losangelesDateElement = losangelesElement.querySelector(".date");
  let losangelesTimeElement = losangelesElement.querySelector(".time");
  let losAngelesTime = moment();
  losangelesDateElement.innerHTML = losAngelesTime
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losangelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let sydneyElement = document.querySelector("#Sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment();
  sydneyDateElement.innerHTML = sydneyTime
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let tokyoElement = document.querySelector("#Tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment();
  tokyoDateElement.innerHTML = tokyoTime
    .tz("Asia/tokyo")
    .format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let parisElement = document.querySelector("#Paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment();
  parisDateElement.innerHTML = parisTime
    .tz("Europe/Paris")
    .format("MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}, 1000);
