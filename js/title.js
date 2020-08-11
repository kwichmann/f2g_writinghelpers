function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function makeTitle() {
  const form = document.querySelector("form");
  const choice = form.elements.titleType.value;

  let title;

  switch (choice) {
    case "nounNoun":
      title =
        capitalize(RiTa.randomWord("nn")) +
        " " +
        capitalize(RiTa.randomWord("nn"));
      break;
    case "adjectiveNoun":
      title =
        capitalize(RiTa.randomWord("jj")) +
        " " +
        capitalize(RiTa.randomWord("nn"));
      break;
    case "verbNoun":
      title =
        capitalize(RiTa.randomWord("vb")) +
        " the " +
        capitalize(RiTa.randomWord("nn"));
      break;
  }

  document.querySelector("#title").innerHTML = "<em>" + title + "</em>";
}
