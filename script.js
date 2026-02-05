const courseGrid = document.getElementById("courseGrid");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const CARD_WIDTH = 280; // card width + gap

nextBtn.addEventListener("click", () => {
  courseGrid.scrollBy({
    left: CARD_WIDTH,
    behavior: "smooth"
  });
});

prevBtn.addEventListener("click", () => {
  courseGrid.scrollBy({
    left: -CARD_WIDTH,
    behavior: "smooth"
  });
});

const emailInput = document.querySelector(".sub-search-box input");
const sendBtn = document.querySelector(".sub-search-box a");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!email.includes("@")) {
    alert("Please enter a valid email address");
  } else {
    alert("Thanks for subscribing!");
    emailInput.value = "";
  }
});

const faders = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => observer.observe(el));

