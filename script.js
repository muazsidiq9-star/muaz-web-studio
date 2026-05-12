// =========================
// IMPROVED SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });

}, {
  threshold: 0.15
});

reveals.forEach(el => revealObserver.observe(el));

// =========================
// HAMBURGER MENU TOGGLE
// =========================

const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById("navLinks");

if (hamburger && navLinksContainer) {
  hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
  });
}

// =========================
// DARK MODE TOGGLE
// =========================

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

if (themeToggle) {

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
}

// =========================
// EMAILJS CONTACT FORM
// =========================

const contactForm = document.querySelector(".contact-form");

if (contactForm && typeof emailjs !== "undefined") {

  contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const button = this.querySelector("button");

    // Store original text
    const originalText = button.innerHTML;

    // Loading state
    button.innerHTML = "Sending...";
    button.disabled = true;

    emailjs.send(
  "service_lurvzf3",
  "template_5ikyn4f",
  {
    from_name: this.querySelector("input[type='text']").value,
        from_email: this.querySelector("input[type='email']").value,
        message: this.querySelector("textarea").value
      },
      "I0bQVvInt_gXvNDtR"
    )

    .then(() => {

      button.innerHTML = "Message Sent ✓";

      alert("Message sent successfully!");

      this.reset();

      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
      }, 2000);

    })

    .catch((error) => {

      console.error("EmailJS Error:", error);

      button.innerHTML = "Failed";

      alert("Failed to send message.");

      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
      }, 2000);

    });

  });

}

// =========================
// SPLASH SCREEN CONTROL
// =========================

window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");

  if (!splash) return;

  // allow browser paint first (prevents flash glitches)
  requestAnimationFrame(() => {
    setTimeout(() => {
      splash.classList.add("hide");
    }, 600); // short, smooth exit animation
  });
});

// =========================
// SCROLL PROGRESS BAR
// =========================

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;

  const scrollPercent = (scrollTop / docHeight) * 100;

  document.getElementById("progress-bar").style.width =
    scrollPercent + "%";
});

// =========================
// ACTIVE NAV ON SCROLL
// =========================

const sections = document.querySelectorAll("section");
const navLinkItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if(pageYOffset >= sectionTop - sectionHeight / 3){
      current = section.getAttribute("id");
    }

  });

  navLinkItems.forEach(link => {
    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });

});

const phoneBtn = document.getElementById("copyPhone");

if (phoneBtn) {
  phoneBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const phoneNumber = "+2347059728014";
    navigator.clipboard.writeText(phoneNumber);

    phoneBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    
    setTimeout(() => {
      phoneBtn.innerHTML = '<i class="fa-solid fa-phone"></i> +234 705 972 8014';
    }, 2000);
  });
}

// =========================
// SCROLL TO TOP BUTTON
// =========================

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {

  window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }

  });

  scrollBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

}

document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("click", function (e) {
  const menu = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    menu.classList.remove("active");
  }
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});
