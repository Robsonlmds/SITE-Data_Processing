SetTell();

function SetDdd (){
    const ddd = window
        .prompt("DDD: ")
        .replaceAll("-","")
        .replaceAll("(","")
        .replaceAll(")","")
        .replaceAll(" ","")
        .slice(0, 2);

    return ddd;
};

//////////////////////////////////////////////////////////////////////////////

function SetTell (){
    const tell = window
        .prompt("Tel: ")
        .replaceAll("-","")
        .replaceAll("(","")
        .replaceAll(")","")
        .replaceAll(" ","")
        .slice(0, 9)
        .replaceAll("11","");
   
    let cutTell1 = tell.slice(0, 5);
    let cutTell2 = tell.slice(5, 11);
   
    const resultTell = "(" +  SetDdd() + ") " + " " + cutTell1 + "-" + cutTell2; 
   
    document.getElementById("putTel").innerHTML = resultTell;

    return "";
};

///////////////////////////////////////////////////////////////////////////////

function SetName (){
    const names = window
        .prompt("Name: ")
        .toLowerCase()
        .split(" ");

    let allName = "";

    names.forEach(elm => {
        allName += elm.charAt(0).toUpperCase() + elm.substring(1) + " ";
    });

    document.getElementById("putName").innerHTML = allName;
    return "";
};

////////////////////////////////////////////////////////////////////////////////

function SetCpf(){
    const cpf = window
        .prompt("CPF: ")
        .replaceAll(" ","")
        .replaceAll(".","")
        .replaceAll("-","");


    let cutCpf1 = cpf.slice(0, 3);
    let cutCpf2 = cpf.slice(3, 6);
    let cutCpf3 = cpf.slice(6, 9);
    let cutCpf4 = cpf.slice(9, 12);

    let cpfResult = cutCpf1 + "." + cutCpf2 + "." + cutCpf3 + "-" + cutCpf4; 

    document.getElementById("putCpf").innerHTML = cpfResult;
    return "";
};

////////////////////////////////////////////////////////////////////////////////