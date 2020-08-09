function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function setWords() {
  const lis = document.querySelectorAll("li");
  for (li of lis) {
    li.innerHTML = capitalize(RiTa.randomWord());
  }
}

window.onload = () => setWords();
