function SetDdd() {
    const ddd = document.getElementById("dddInput").value
        .replaceAll("-", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "")
        .slice(0, 2);

    return ddd;
}

function SetTell() {
    const tell = document.getElementById("telInput").value
        .replaceAll("-", "")
        .replaceAll("(", "")
        .replaceAll(")", "")
        .replaceAll(" ", "")
        .slice(0, 9);

    let cutTell1 = tell.slice(0, 5);
    let cutTell2 = tell.slice(5, 9);

    const resultTell = "(" + SetDdd() + ") " + cutTell1 + "-" + cutTell2;
    document.getElementById("putTel").innerHTML = resultTell;
    return "";
}

function SetName() {
    const names = document.getElementById("nameInput").value
        .toLowerCase()
        .split(" ");

    let allName = "";

    names.forEach(elm => {
        allName += elm.charAt(0).toUpperCase() + elm.substring(1) + " ";
    });

    document.getElementById("putName").innerHTML = allName.trim();
    return "";
}

function SetCpf() {
    const cpf = document.getElementById("cpfInput").value
        .replaceAll(" ", "")
        .replaceAll(".", "")
        .replaceAll("-", "");

    let cutCpf1 = cpf.slice(0, 3);
    let cutCpf2 = cpf.slice(3, 6);
    let cutCpf3 = cpf.slice(6, 9);
    let cutCpf4 = cpf.slice(9, 11);

    let cpfResult = cutCpf1 + "." + cutCpf2 + "." + cutCpf3 + "-" + cutCpf4;

    document.getElementById("putCpf").innerHTML = cpfResult;
    return "";
}
