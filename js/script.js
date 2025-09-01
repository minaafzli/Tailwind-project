const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((item) => item.addEventListener("click", onTabClick));

function onTabClick(e) {
  tabs.forEach((item) => {
    item.children[0].classList.remove("border-b-4");
  });

  panels.forEach((item) => item.classList.add("hidden"));

  e.target.classList.add("border-gray-400", "border-b-4");

  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

function valid(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
const email = "example@domain.com";
console.log(valid(email) ? "Valid email address" : "Invalid email address");
