window.addEventListener("load", () => {
    document.getElementById("go-back-to-main").addEventListener("click", goToMain);
    document.getElementById("symbol").addEventListener("click", goToMain);
})

function goToMain() {
    window.location.href = "../../index.html";
}