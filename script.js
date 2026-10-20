/* =========================================================
   script.js: makes every control on the page work
   ========================================================= */

/* ---------- 1. Select the elements ---------- */
const themeToggle = document.querySelector("#themeToggle");
const likeBtn     = document.querySelector("#likeBtn");
const resetBtn    = document.querySelector("#resetBtn");
const likeCount   = document.querySelector("#likeCount");
const navLinks    = document.querySelectorAll(".nav-link");

const START_COUNT = 24;
let count = START_COUNT;


/* ---------- 2. Like button: add 1 and save ---------- */
function showCount() {
    likeCount.textContent = count;
}

likeBtn.addEventListener("click", () => {
    count++;
    showCount();
    localStorage.setItem("likes", count);
});

/* ---------- 3. Reset button: back to 24 ---------- */
resetBtn.addEventListener("click", () => {
    count = START_COUNT;
    showCount();
    localStorage.setItem("likes", count);
});

/* On load: restore the saved count (localStorage gives a string, so convert) */
const savedCount = localStorage.getItem("likes");
if (savedCount !== null) {
    count = Number(savedCount);
    showCount();
}


/* ---------- 4. Dark mode switch ---------- */
themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeToggle.checked);
    localStorage.setItem("theme", themeToggle.checked ? "dark" : "light");
});

/* On load: restore the saved theme */
if (localStorage.getItem("theme") === "dark") {
    themeToggle.checked = true;
    document.body.classList.add("dark");
}


/* ---------- 5. Nav links: the clicked link gets the underline ---------- */
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();               // single page, so don't jump around

        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});
