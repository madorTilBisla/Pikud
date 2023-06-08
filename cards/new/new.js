window.addEventListener("load", () => {
    document.getElementById("go-to-clearance").addEventListener("click", goToClearence);
    document.getElementById("go-to-tadrats").addEventListener("click", goToTadrats);
    document.getElementById("symbol").addEventListener("click", goToMain);
})

function goToClearence() {
    window.location.href = "../clearance/clearance.html";
}

function goToMain() {
    window.location.href = "../../index.html";
}

function goToTadrats() {
    window.location.href = "../tadrats/tadrats.html";
}