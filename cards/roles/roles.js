window.addEventListener("load", () => {
    document.getElementById("go-to-tree").addEventListener("click", goToTree);
    document.getElementById("go-to-explainedRoles").addEventListener("click", goToExplainedRoles);
    document.getElementById("symbol").addEventListener("click", goToMain);
})

function goToTree() {
    window.location.href = "../tree/tree.html";
}

function goToMain() {
    window.location.href = "../../index.html";
}

function goToExplainedRoles() {
    window.location.href = "../explainedRoles/explainedRoles.html";
}