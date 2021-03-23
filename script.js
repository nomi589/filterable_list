const searchTerm = document.querySelector(".token");
const listOfTerms = document.querySelectorAll(".list ul li");

searchTerm.addEventListener("keyup", updateList);

function updateList() {
  listOfTerms.forEach((term) => {
    if (term.innerText.includes(searchTerm.value)) {
      term.style.display = "block";
    } else {
      term.style.display = "none";
    }
  });
}
