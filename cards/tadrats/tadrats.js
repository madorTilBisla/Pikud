window.addEventListener("load", () => {
    document.getElementById("symbol").addEventListener("click", goToMain);
    document.getElementById("go-back-to-new").addEventListener("click", goToNew);
})

function goToMain() {
    window.location.href = "../../index.html";
}

function goToNew() {
    window.location.href = "../new/new.html";
}