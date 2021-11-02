const app = document.querySelector("#app");

function setScreen($container) {
  app.innerHTML = "";
  app.appendChild($container);
}

export { setScreen };
