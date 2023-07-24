const readMoreBtn = document.querySelector("#read-more-btn");
const content = document.querySelector(".aside");

readMoreBtn.addEventListener("click", function (){
  content.classList.toggle("open");
  readMoreBtn.textContent = content.classList.contains("open") ? "read Less" : "read More...";
});