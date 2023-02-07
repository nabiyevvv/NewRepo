const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector(".create");
btn.addEventListener("click", () => {
  if (input.value.length === 0) {
    alert("Metn yazin");
  } else {
    const li = document.createElement("li");
    const p = document.createElement("p");
    ul.append(li);
    li.innerHTML = `<span>
    ${document.querySelector("input").value}
          </span>
      <img src="/image/icons_image/x.png"/ class="x">`;
  }
  input.value = "";
  const current_tasks = document.querySelectorAll(".x");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
});
