const homeScoreElem = document.getElementById("home-score");
const guestScoreElem = document.getElementById("guest-score");

const homeOneButton = document.getElementById("home-one");
const homeTwoButton = document.getElementById("home-two");
const homeThreeButton = document.getElementById("home-three");

const guestOneButton = document.getElementById("guest-one");
const guestTwoButton = document.getElementById("guest-two");
const guestThreeButton = document.getElementById("guest-three");

let homeScore = 0;
let guestScore = 0;

homeOneButton.addEventListener("click", function() {
  homeScoreElem.textContent = homeScore += 1;
});

homeTwoButton.addEventListener("click", function() {
  homeScoreElem.textContent = homeScore += 2;
});

homeThreeButton.addEventListener("click", function() {
  homeScoreElem.textContent = homeScore += 3;
});

guestOneButton.addEventListener("click", function() {
  guestScoreElem.textContent = guestScore += 1;
});

guestTwoButton.addEventListener("click", function() {
  guestScoreElem.textContent = guestScore += 2;
});
guestThreeButton.addEventListener("click", function() {
  guestScoreElem.textContent = guestScore += 3;
});
