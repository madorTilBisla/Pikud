window.addEventListener("load", () => {
    document.getElementById("go-back-to-main").addEventListener("click", goToRoles);
    document.getElementById("symbol").addEventListener("click", goToMain);
})

function goToMain() {
    window.location.href = "../../index.html";
}

function goToRoles() {
    window.location.href = "../roles/roles.html";
}