const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.onclick = function () {
   sidebar.classList.toggle("expanded");
};