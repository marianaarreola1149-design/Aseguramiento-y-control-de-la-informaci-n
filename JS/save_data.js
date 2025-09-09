// Función para guardar en localStorage
function saveUser(username, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
}
