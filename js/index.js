var imageCount = 9;
var currentImg = 5;

function clickNext() {
  if (currentImg === 9) {
    return;
  }
  if (currentImg <= 4) {
    currentImg = 5;
  }
  var element = document.getElementById(`img_${currentImg}`);
  currentImg++;
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function clickPrev() {
  if (currentImg > 4) {
    currentImg = currentImg - 4;
  }
  currentImg--;
  if (currentImg === 0) {
    currentImg = 1;
    return;
  }
  var element = document.getElementById(`img_${currentImg}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
