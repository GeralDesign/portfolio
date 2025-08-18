const prj1_btn = document.getElementById("prj1_btn");
const prj1_modal = document.getElementById("prj1_modal");
const prj1_close = document.getElementById("prj1_close");

const prj2_btn = document.getElementById("prj2_btn");
const prj2_modal = document.getElementById("prj2_modal");
const prj2_close = document.getElementById("prj2_close");


const prj3_btn = document.getElementById("prj3_btn");
const prj3_modal = document.getElementById("prj3_modal");
const prj3_close = document.getElementById("prj3_close");

const prj4_btn = document.getElementById("prj4_btn");
const prj4_modal = document.getElementById("prj4_modal");
const prj4_close = document.getElementById("prj4_close");

const prj5_btn = document.getElementById("prj5_btn");
const prj5_modal = document.getElementById("prj5_modal");
const prj5_close = document.getElementById("prj5_close");

const prj6_btn = document.getElementById("prj6_btn");
const prj6_modal = document.getElementById("prj6_modal");
const prj6_close = document.getElementById("prj6_close");

const prj7_btn = document.getElementById("prj7_btn");
const prj7_modal = document.getElementById("prj7_modal");
const prj7_close = document.getElementById("prj7_close");

const prj8_btn = document.getElementById("prj8_btn");
const prj8_modal = document.getElementById("prj8_modal");
const prj8_close = document.getElementById("prj8_close");

const prj9_btn = document.getElementById("prj9_btn");
const prj9_modal = document.getElementById("prj9_modal");
const prj9_close = document.getElementById("prj9_close");

const prj10_btn = document.getElementById("prj10_btn");
const prj10_modal = document.getElementById("prj10_modal");
const prj10_close = document.getElementById("prj10_close");

const prj11_btn = document.getElementById("prj11_btn");
const prj11_modal = document.getElementById("prj11_modal");
const prj11_close = document.getElementById("prj11_close");

const prj12_btn = document.getElementById("prj12_btn");
const prj12_modal = document.getElementById("prj12_modal");
const prj12_close = document.getElementById("prj12_close");


const closeBtns = document.querySelectorAll(".closeModal"); // optional, still ok to keep
const nav = document.querySelector(".top-nav-menu");



function openModal(modal) {
  modal.style.display = "block";
  if (nav) nav.style.display = "none";
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.style.display = "none";
  if (nav) nav.style.display = "";
  document.body.style.overflow = "";
}

// open
prj1_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj1_modal); });
prj2_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj2_modal); });
prj3_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj3_modal); });
prj4_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj4_modal); });
prj5_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj5_modal); });
prj6_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj6_modal); });
prj7_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj7_modal); });
prj8_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj8_modal); });
prj9_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj9_modal); });
prj10_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj10_modal); });
prj11_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj11_modal); });
prj12_btn.addEventListener("click", e => { e.preventDefault(); openModal(prj12_modal); });

// close (per ID)
prj1_close.addEventListener("click", () => closeModal(prj1_modal));
prj2_close.addEventListener("click", () => closeModal(prj2_modal));
prj3_close.addEventListener("click", () => closeModal(prj3_modal));
prj4_close.addEventListener("click", () => closeModal(prj4_modal));
prj5_close.addEventListener("click", () => closeModal(prj5_modal));
prj6_close.addEventListener("click", () => closeModal(prj6_modal));
prj7_close.addEventListener("click", () => closeModal(prj7_modal));
prj8_close.addEventListener("click", () => closeModal(prj8_modal));
prj9_close.addEventListener("click", () => closeModal(prj9_modal));
prj10_close.addEventListener("click", () => closeModal(prj10_modal));
prj11_close.addEventListener("click", () => closeModal(prj11_modal));
prj12_close.addEventListener("click", () => closeModal(prj12_modal));

// optional: click overlay to close
[prj1_modal, prj2_modal,prj3_modal,prj4_modal,prj5_modal,prj6_modal,prj7_modal,prj8_modal,prj9_modal,prj10_modal,prj11_modal,prj12_modal].forEach(m => {
  m.addEventListener("click", e => { if (e.target === m) closeModal(m); });
});

// optional: ESC key closes any open modal
document.addEventListener("keydown", e => {
  if (e.key === "Escape") [prj1_modal, prj2_modal,prj3_modal,prj4_modal,prj5_modal,prj6_modal,prj7_modal,prj8_modal,prj9_modal,prj10_modal,prj11_modal,prj12_modal].forEach(m => {
    if (m && m.style.display === "block") closeModal(m);
  });
});