let inputTxt = document.querySelector("#input-text");
const translateBtn = document.querySelector("#translate");
const outputTxt = document.querySelector("#output-text");

const url = "https://api.funtranslations.com/translate/minion.json";

translateBtn.addEventListener("click", fetchData);

function err(error) {
  alert("something wrong due to error " + error);
}

function fetchData() {
  const newUrl = `${url}?text=${inputTxt.value}`;
  fetch(newUrl)
    .then((rep) => {
      console.log(rep.json);
    })
    .then((json) => {
      outputTxt.innerText = json.contents.translated;
      console.log(json);
    })
    .catch(err);

  inputTxt.value = "";
}

window.addEventListener("load", () => {
  inputTxt.value = "";
});
