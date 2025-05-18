  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (username === "admin" && password === "admin") {
      window.location.href = "/src/home.html";
    } else {
      errorMsg.style.display = "block";
    }
});

function validarFormulario(form) {
  const campos = form.querySelectorAll("[required]");
  for (let campo of campos) {
    if (!campo.value.trim()) {
      alert("Preencha todos os campos obrigatórios!");
      return false;
    }
  }
  return true;
}
