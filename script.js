document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector("#toggleBtn");
    const closeBtn = document.querySelector("#closeBtn");
    const sidebar = document.querySelector("#sidebar");

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show");
    });
});
