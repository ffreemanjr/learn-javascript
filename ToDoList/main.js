let ourForm = document.getElementById("ourForm");
let ourItem = document.getElementById("ourItem");
let ourList = document.getElementById("ourList");

ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(ourItem.value);
});

function createItem(newItem) {
  let ourHTML = `<li class="items">${newItem} <button onclick="deleteItem(this)">Delete</button></li>`
  ourList.insertAdjacentHTML("beforeend", ourHTML);
  ourItem.value = "";
  ourItem.focus();
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove();
}