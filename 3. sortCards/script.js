const tags = document.querySelector(".block__tag");
const filterCard = document.querySelectorAll(".block__cards .card");

tags.onclick = (selectedTag) => {
  if (selectedTag.target.classList.contains("tag")) {
    tags.querySelector(".tag--active").classList.remove("tag--active");
    selectedTag.target.classList.add("tag--active");

    let filterName = selectedTag.target.getAttribute("data-name");

    filterCard.forEach((card) => {
      let filterCards = card.getAttribute("data-name");
      if (filterCards == filterName || filterName == "all") {
        card.classList.remove("card--hide");
      } else {
        card.classList.add("card--hide");
      }
    });
  }
};
