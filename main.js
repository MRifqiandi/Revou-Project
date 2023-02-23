let name = document.querySelector("#fname");
let date = document.querySelector("#fdate");
let gender = document.querySelectorAll("input[name=jenis-kelamin]");
let message = document.querySelector("#fname");

// function validateForm() {
//   document.getElementsByClassName("biodata__name").innerText = nameValue;
//   document.getElementsByClassName("biodata__email").innerText = date;
//   document.getElementsByClassName("biodata__gender").innerText = gender;
//   document.getElementsByClassName("biodata__text-area").innerText = messages;
//   return false;
// }

document.querySelector("#biodata-user").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(document.querySelector("#biodata-user"));

  console.log([...formData]);
});
