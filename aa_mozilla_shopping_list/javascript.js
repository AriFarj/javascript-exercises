const listElement = document.querySelector("ul");
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");

buttonElement.onclick = () => {
  const inputValue = inputElement.value;
  inputElement.value = '';
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText)
  listText.textContent = inputValue;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete"
  listElement.appendChild(listItem)

  listBtn.onclick = () => {
    listElement.removeChild(listItem);
  }
  inputElement.focus()
}