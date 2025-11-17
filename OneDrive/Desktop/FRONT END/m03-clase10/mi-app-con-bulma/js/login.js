// =========================================
// Esperar a que el DOM esté cargado
// Inicializar usuarios y eventos
// =========================================
document.addEventListener("DOMContentLoaded", function () {
  initUsers();
  setupEventListeners();
});

// =========================================
// Crear usuarios iniciales si no existen
// Simulación de una base de datos en localStorage
// =========================================
function initUsers() {
  if (!localStorage.getItem("users")) {
    const initialUsers = [
      {
        username: "admin",
        email: "admin@ejemplo.com",
        password: "admin123",
      },
      {
        username: "estudiante",
        email: "estudiante@ejemplo.com",
        password: "estudiante123",
      },
    ];
    localStorage.setItem("users", JSON.stringify(initialUsers));
  }
}

// =========================================
// Registrar listeners para los formularios
// =========================================
function setupEventListeners() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }
}

// =========================================
// Manejar inicio de sesión del usuario
// =========================================
function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  // Validar campos vacíos
  if (!username || !password) {
    showError("Por favor, completa todos los campos");
    return;
  }

  // Obtener usuarios almacenados
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Buscar coincidencia por username o email
  const user = users.find(
    (u) =>
      (u.username === username || u.email === username) &&
      u.password === password
  );

  // Si coincide → iniciar sesión
  if (user) {
    showSuccess("¡Inicio de sesión exitoso! Redirigiendo...");

    // Guardar sesión persistente o temporal
    if (remember) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.username,
          email: user.email,
        })
      );
    } else {
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: user.username,
          email: user.email,
        })
      );
    }

    // Redirigir al home
    setTimeout(() => {
      window.location.href = "/index.html";
    }, 1000);
  } else {
    showError("Usuario o contraseña incorrectos. Por favor, intenta de nuevo.");
  }
}

// =========================================
// Manejar registro de nuevos usuarios
// =========================================
function handleRegister(e) {
  e.preventDefault();

  const username = document.getElementById("reg-username").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const password = document.getElementById("reg-password").value;
  const passwordConfirm = document.getElementById("reg-password-confirm").value;

  // Validaciones básicas del formulario
  if (!username || !email || !password || !passwordConfirm) {
    showError("Por favor, completa todos los campos");
    return;
  }

  if (username.length < 3) {
    showError("El nombre de usuario debe tener al menos 3 caracteres");
    return;
  }

  if (!isValidEmail(email)) {
    showError("Por favor, ingresa un email válido");
    return;
  }

  if (password.length < 6) {
    showError("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  if (password !== passwordConfirm) {
    showError("Las contraseñas no coinciden");
    return;
  }

  // Obtener usuarios existentes
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Verificar si ya existe un usuario o email igual
  const userExists = users.some(
    (u) => u.username === username || u.email === email
  );

  if (userExists) {
    showError("El usuario o email ya está registrado. Por favor, usa otro.");
    return;
  }

  // Crear nuevo usuario
  const newUser = {
    username: username,
    email: email,
    password: password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Mostrar mensaje de éxito
  showSuccess("¡Registro exitoso! Ahora puedes iniciar sesión.");

  // Limpiar formulario y volver al login
  document.getElementById("register-form").reset();

  setTimeout(() => {
    showLogin();
    document.getElementById("username").value = username;
  }, 2000);
}

// =========================================
// Validar formato de correo electrónico
// =========================================
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// =========================================
// Mostrar mensaje de error contextual
// =========================================
function showError(message) {
  const registerBox = document.getElementById("register-box");
  const isRegisterVisible =
    registerBox && !registerBox.classList.contains("is-hidden");

  let errorDiv, errorText, successDiv;

  if (isRegisterVisible) {
    errorDiv = document.getElementById("error-message-register");
    errorText = document.getElementById("error-text-register");
    successDiv = document.getElementById("success-message-register");
  } else {
    errorDiv = document.getElementById("error-message");
    errorText = document.getElementById("error-text");
    successDiv = document.getElementById("success-message");
  }

  if (errorDiv && errorText) {
    errorText.textContent = message;
    errorDiv.classList.remove("is-hidden");

    // Ocultar mensaje de éxito si está abierto
    if (successDiv) {
      successDiv.classList.add("is-hidden");
    }

    // Ocultar automáticamente después de 5 segundos
    setTimeout(() => {
      if (isRegisterVisible) {
        closeErrorRegister();
      } else {
        closeError();
      }
    }, 5000);
  }
}

// =========================================
// Mostrar mensaje de éxito contextual
// =========================================
function showSuccess(message) {
  const registerBox = document.getElementById("register-box");
  const isRegisterVisible =
    registerBox && !registerBox.classList.contains("is-hidden");

  let successDiv, successText, errorDiv;

  if (isRegisterVisible) {
    successDiv = document.getElementById("success-message-register");
    successText = document.getElementById("success-text-register");
    errorDiv = document.getElementById("error-message-register");
  } else {
    successDiv = document.getElementById("success-message");
    successText = document.getElementById("success-text");
    errorDiv = document.getElementById("error-message");
  }

  if (successDiv && successText) {
    successText.textContent = message;
    successDiv.classList.remove("is-hidden");

    if (errorDiv) {
      errorDiv.classList.add("is-hidden");
    }
  }
}

// =========================================
// Ocultar mensaje de error login
// =========================================
function closeError() {
  const errorDiv = document.getElementById("error-message");
  if (errorDiv) {
    errorDiv.classList.add("is-hidden");
  }
}

// =========================================
// Ocultar mensaje de error register
// =========================================
function closeErrorRegister() {
  const errorDiv = document.getElementById("error-message-register");
  if (errorDiv) {
    errorDiv.classList.add("is-hidden");
  }
}

// =========================================
// Mostrar el formulario de registro
// =========================================
function showRegister() {
  const loginBox = document.querySelector(".box");
  const registerBox = document.getElementById("register-box");

  if (loginBox && registerBox) {
    loginBox.classList.add("is-hidden");
    registerBox.classList.remove("is-hidden");
    closeError();
    closeErrorRegister();
  }
}

// =========================================
// Mostrar el formulario de login
// =========================================
function showLogin() {
  const loginBox = document.querySelector(".box");
  const registerBox = document.getElementById("register-box");

  if (loginBox && registerBox) {
    loginBox.classList.remove("is-hidden");
    registerBox.classList.add("is-hidden");
    closeError();
    closeErrorRegister();
  }
}
