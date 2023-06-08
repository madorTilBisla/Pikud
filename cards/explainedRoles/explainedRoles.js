const srcs = ["../../assets/explainedRoles/M.MEGAMA.png", "../../assets/explainedRoles/S.M.MEGAMA.png", "../../assets/explainedRoles/KAHADIT.png"
, "../../assets/explainedRoles/MASHAD.K.png", "../../assets/explainedRoles/M.MEGAMA.png", "../../assets/explainedRoles/RASAP.K.png",
"../../assets/explainedRoles/OVDIM.png", "../../assets/explainedRoles/M.HASHLAMA.CIPA.png", "../../assets/explainedRoles/MADKATZ.CIPA.png",
"../../assets/explainedRoles/S.M.HASHLAMA.CIPA.png", "../../assets/explainedRoles/SHALISHA.png", "../../assets/explainedRoles/M.HASHLAMA.KELA.png",
"../../assets/explainedRoles/MADKATZ.KELA.png","../../assets/explainedRoles/M.HASHLAMA.HETZ.png", "../../assets/explainedRoles/MADKATZ.HETZ.png",
"../../assets/explainedRoles/-HASHLAMA.Y.png", "../../assets/explainedRoles/MADKATZ.Y.png","../../assets/explainedRoles/-MEFAKDIM.png", 
"../../assets/explainedRoles/MASHAD.png", "../../assets/explainedRoles/M.TZVATIM.png", "../../assets/explainedRoles/S.M.MEFAKDIM.png",
"../../assets/explainedRoles/RASAP.png", "../../assets/explainedRoles/SAMALIM.png"];

window.addEventListener("load", () => {
    document.getElementById("symbol").addEventListener("click", goToMain);
    document.getElementById("roles-container").addEventListener("click", explainedRole);
    document.getElementById("go-back-to-roles").addEventListener("click", goToRoles);
})

function goToRoles() {
    window.location.href = "../roles/roles.html";
}

function goToMain() {
    window.location.href = "../../index.html";
}

function explainedRole(event) {
    console.log(event.target.id);
    let roleNum = Number(event.target.id)
    console.log(1 + roleNum);
    if(!isNaN(Number(event.target.id))) {
        document.getElementById("explain-container").style.display = "block";
        document.getElementById("explain-text").setAttribute("src", srcs[roleNum])
        document.getElementById("close-btn").addEventListener("click", ()=> {
            document.getElementById("explain-container").style.display = "none";  
        })
    }
}