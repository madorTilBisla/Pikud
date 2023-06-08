let boxId;

window.addEventListener("load", () => {
    document.getElementById("go-back-to-new").addEventListener("click", goToNew);
    document.getElementById("symbol").addEventListener("click", goToMain);

    for(let i=1; i<=8; i++) {
        document.getElementById('box-'+[i]).addEventListener("click", saveId);
        if(localStorage.getItem('isChecked-box-'+[i]) === "true") {
            document.getElementById("box-"+[i]).setAttribute("src", "assets/CHECKEDBOX.png");
            document.getElementById("box-"+[i]).setAttribute("class", "boxes checked");
        }
    }
})

function goToNew() {
    window.location.href = "../new/new.html";
}

function goToMain() {
    window.location.href = "../../index.html";
}

function saveId(event) {
    boxId = event.target.id;
    document.getElementById("close-btn").addEventListener("click", ()=> {
        document.getElementById("code-container").style.display = "none";
        document.getElementById("blur-div").style.display = "none";

    })
    document.getElementById("code-container").style.display = "block";
    document.getElementById("blur-div").style.display = "block";
}

function checkCode() {
let code = document.getElementById("code-inserted").value;
document.getElementById("code-inserted").value = "";

    if(code === document.getElementById(boxId).getAttribute("name")) {
        document.getElementById(boxId).setAttribute("src", "assets/CHECKEDBOX.png");
        document.getElementById(boxId).setAttribute("class", "boxes checked");
        document.getElementById(boxId).removeEventListener("click", saveId);

        localStorage.setItem(`isChecked-${boxId}`, "true");
        document.getElementById("code-container").style.display = "none";
        document.getElementById("blur-div").style.display = "none";
    }
}
