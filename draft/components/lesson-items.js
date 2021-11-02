class LessonItem {
  $container = document.createElement("div");
  $cardBody = document.createElement("div");
  $cardTitle = document.createElement("h5");
  $cardTxt = document.createElement("p");
  $cardBtn = document.createElement("button");
  constructor(cardTitle, cardTxt) {
    this.$cardTitle.innerHTML = cardTitle;
    this.$cardTxt.innerHTML = cardTxt;

    this.$container.appendChild(this.$cardBody);
    this.$cardBody.appendChild(this.$cardTitle);
    this.$cardBody.appendChild(this.$cardTxt);
    this.$cardBody.appendChild(this.$cardBtn);

    // this.$container.classList.add("card", "w-50");
    // this.$cardBody.classList.add("card-body");
    // this.$cardTitle.classList.add("card-title");
    // this.$cardTxt.classList.add("card-text");
    // this.$cardBtn.classList.add("btn", "btn-primary");

    // this.$cardBtn.addEventListener("click");
  }
}

export { LessonItem };
