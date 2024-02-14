const icons = document.querySelectorAll(".nav-icon");
const dropdown = document.querySelector(".nav-items");
const nav = document.querySelector(".nav");


const toggleDropdown = function(e){
    if(!e.target.classList.contains("icon")) return;

    icons.forEach(icon => icon.classList.remove("hidden"));
    dropdown.classList.toggle("hidden");
    e.target.classList.add("hidden");
}

nav.addEventListener("click", toggleDropdown);
