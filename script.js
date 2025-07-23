function watchTutorials() {
  window.location.href = "https://youtube.com/@kiddexcodes?si=x9G0T_aTxSk7h92r target= _blank";
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formStatus").textContent = "Thanks, " + name + "! Your message has been sent.";
    this.reset();
  } else {
    document.getElementById("formStatus").textContent = "Please fill out all fields.";
  }
});