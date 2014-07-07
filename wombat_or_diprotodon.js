$(function() {
  renderCurrentImage();

  $("#wombat").click(function() {
    checkGuess("wombat");
    return false;
  });

  $("#diprotodon").click(function() {
    checkGuess("diprotodon");
    return false;
  });
});

var correctGuesses = 0;
var currentImage = 0;
var images = [
  { kind: "wombat", src: "http://www.thomryng.com/images/wombatinabox.jpg" },
  { kind: "diprotodon", src: "http://resources1.news.com.au/images/2011/07/05/1226088/383573-diprotodon.jpg" },
  { kind: "wombat", src: "http://4.bp.blogspot.com/_X1IWXuEbgXI/S7r6QmBIqPI/AAAAAAAACbo/gkCdqFOxbbM/s640/wombat+australia.jpg" },
  { kind: "diprotodon", src: "http://jasonfischer.com.au/wp-content/uploads/2013/02/drusillapimp.jpg" },
  { kind: "diprotodon", src: "http://museumvictoria.com.au/pages/8762/mm-diprotodon-illustration-big.jpg" },
  { kind: "wombat", src: "http://resources0.news.com.au/images/2011/07/07/1226089/905572-wombat.jpg" }
]

function renderCorrectGuesses() {
  $("#correct-guesses").html(correctGuesses);
}

function renderCurrentImage() {
  $("img").prop("src", images[currentImage].src);
}

function currentKind() {
  return images[currentImage].kind;
}

function nextImage() {
  if (currentImage >= images.length - 1) {
    currentImage = 0;
  } else {
    currentImage++;
  }

  renderCurrentImage();
}

function checkGuess(kind) {
  if (kind === currentKind()) {
    correctGuesses++;
    renderCorrectGuesses();
  }

  nextImage();
}
