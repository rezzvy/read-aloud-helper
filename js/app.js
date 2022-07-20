const inputSourceFormElement = document.querySelector("#main-control form");
const inputSourceContentElement = document.querySelector(
  "#main-control textarea"
);

const outputParentElement = document.querySelector("main article");

let outputChildParagraph, outputChildBtn;

inputSourceFormElement.addEventListener("submit", function (e) {
  e.preventDefault();

  if (inputSourceContentElement.value.trim()) {
    let content = document.createElement("p");
    let button = document.createElement("button");

    button.textContent = "Delete";
    button.ariaHidden = true;
    content.textContent = inputSourceContentElement.value;

    outputParentElement.append(content);

    content.append(button);

    outputChildBtn = document.querySelectorAll("article p button");
    outputChildParagraph = document.querySelectorAll("article p");

    if (outputChildParagraph.length != 0) {
      outputChildBtn.forEach(function (item, index) {
        outputChildBtn[index].addEventListener("click", function () {
          outputChildParagraph[index].remove();
        });
      });
    }
  } else {
    alert("Please input some texts!");
  }

  inputSourceContentElement.value = "";
});
