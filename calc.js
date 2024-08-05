// Obtener los botones.
let buttons = document.getElementsByTagName("button");

// Inicializar los valores que formaran parte de la operación.
let valorPrimero = "";
let valorSecundario = null;
let operador = "";
let valorGuardado = null;
let valorPrimeroFinal = null;
let resultado = null;
let divisor = null;
let ultimoValor = null;

let calc = true;

if (valorPrimero == "") {
    document.getElementsByClassName("mainScreen")[0].innerHTML = "0"
}

// Operaciones.
function division(val1, val2) {
    return(val1 / val2);
}

function multiplicacion(val1, val2) {
    return(val1 * val2);
}

function resta(val1, val2) {
    return(val1 - val2);
} 

function suma(val1, val2) {
    return(val1 + val2);
}

function convertir(val) {
    return(-(val));
}

buttons[12].addEventListener("click", () => {
    if(valorPrimero.length < 16) {
        valorPrimero += "1";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}});

buttons[14].addEventListener("click", () => {
    if(valorPrimero.length < 16) {
        valorPrimero += "3";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}});

buttons[0].addEventListener("click", () => {
    valorPrimero = "";
    valorSecundario = null;
    operador = "";
    valorGuardado = null;
    valorPrimeroFinal = null;
    resultado = null;
    divisor = null;
    ultimoValor = null;
    valorPrimero = "";
    valorPrimeroFinal = null;
    operador = "";
    document.getElementsByClassName("mainScreen")[0].innerHTML = "0";
    document.getElementsByClassName("secondScreen")[0].innerHTML = "";
})

buttons[10].addEventListener("click", () => {
    if(valorPrimero.length < 16) {
        valorPrimero += "6";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}});

buttons[9].addEventListener("click", () => {
    if(valorPrimero.length < 16) {
        valorPrimero += "5";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}});

buttons[8].addEventListener("click", () => {
    if(valorPrimero.length < 16) {
        valorPrimero += "4";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}});

buttons[6].addEventListener("click", () => {
    if(valorPrimero.length < 16) {
        valorPrimero += "9";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}});

buttons[5].addEventListener("click", () => {
    if(valorPrimero.length < 16) {
        valorPrimero += "8";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}});

buttons[4].addEventListener("click", () => {
    if(valorPrimero.length < 16) {
        valorPrimero += "7";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}});

buttons[13].addEventListener("click", () => {
    if(valorPrimero.length < 16) {
        valorPrimero += "2";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}});

buttons[16].addEventListener("click", () => {
    if(valorPrimero[0] != "0" && valorPrimero.length > 0) {
        if(valorPrimero.length < 16) {
            valorPrimero += "0";
            document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
}}});

buttons[3].addEventListener("click", () => {
    valorPrimero = valorPrimero.slice(0, -1);
    document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
});

buttons[7].addEventListener("click", () => {
    if(operador == "") {
        if (valorPrimero != "" && ultimoValor == null) {
            operador = "%";
            valorPrimeroFinal = parseFloat(valorPrimero);
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal
        }else if (valorPrimero == "" && ultimoValor != null) {
            operador = "%";
            valorPrimeroFinal = ultimoValor;
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        }
    }else if (operador != "") {
        if (valorPrimero != "" && valorPrimeroFinal != null) {
            ultimoValor = null;
            divisor = parseFloat(valorPrimero);
            resultado = division(valorPrimeroFinal, divisor);
            ultimoValor = resultado;
            valorPrimeroFinal = resultado;
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado; 
        }
    }
});

buttons[11].addEventListener("click", () => {
    if(operador == "") {
        if (valorPrimero != "" && ultimoValor == null) {
            operador = "+";
            valorPrimeroFinal = parseFloat(valorPrimero);
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal
        }else if (valorPrimero == "" && ultimoValor != null) {
            operador = "+";
            valorPrimeroFinal = ultimoValor;
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        }
    }else if (operador != "") {
        if (valorPrimero != "" && valorPrimeroFinal != null) {
            sumador = parseFloat(valorPrimero);
            resultado = suma(valorPrimeroFinal, sumador);
            ultimoValor = resultado;
            valorPrimeroFinal = resultado;
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado; 
        }
    }
});

buttons[15].addEventListener("click", () => {
    if(operador == "") {
        if (valorPrimero != "" && ultimoValor == null) {
            operador = "-";
            valorPrimeroFinal = parseFloat(valorPrimero);
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = "0";
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal
        }else if (valorPrimero == "" && ultimoValor != null) {
            operador = "-";
            valorPrimeroFinal = ultimoValor;
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        }
    }else if (operador != "") {
        if (valorPrimero != "" && valorPrimeroFinal != null) {
            restador = parseFloat(valorPrimero);
            resultado = resta(valorPrimeroFinal, restador);
            ultimoValor = resultado;
            valorPrimeroFinal = resultado;
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado; 
        }
    }
});

buttons[2].addEventListener("click", () => {
    if(operador == "") {
        if (valorPrimero != "") {
            operador = "*";
            valorPrimeroFinal = parseFloat(valorPrimero);
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal
        }else if (valorPrimero == "" && ultimoValor != null) {
            operador = "*";
            valorPrimeroFinal = ultimoValor;
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        }
    }else if (operador != "") {
        if (valorPrimero != "" && valorPrimeroFinal != null) {
            alert("thats right")
            multiplicador = parseFloat(valorPrimero);
            resultado = multiplicacion(valorPrimeroFinal, multiplicador);
            ultimoValor = resultado;
            valorPrimeroFinal = resultado;
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado; 
        }
    }
});

buttons[1].addEventListener("click", () => {
    if(!valorPrimero.includes("-")) {
        valorPrimero = ("-" + valorPrimero);
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
    }else if (valorPrimero.includes("-")) {
        let valorNuevo = valorPrimero.replace(/-/g, "");
        valorPrimero = valorNuevo;
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
    }
});

buttons[17].addEventListener("click", () => {
    if(!valorPrimero.includes(".")) {
        valorPrimero += ".";
        document.getElementsByClassName("mainScreen")[0].innerHTML = valorPrimero;
    }
});

buttons[18].addEventListener("click", () => {
    if(valorPrimero != "" && valorPrimeroFinal) {
        switch(operador) {
            case "%":
                divisor = parseFloat(valorPrimero)
                resultado = division(valorPrimeroFinal, divisor);
                document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
                document.getElementsByClassName("secondScreen")[0].innerHTML = "";
                ultimoValor = resultado;
                valorPrimero = "";
                valorPrimeroFinal = null;
                operador = "";
                break;
            case "*":
                multiplicador = parseFloat(valorPrimero);
                resultado = multiplicacion(valorPrimeroFinal, multiplicador);
                document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
                document.getElementsByClassName("secondScreen")[0].innerHTML = "";
                ultimoValor = resultado;
                valorPrimero = "";
                valorPrimeroFinal = null;
                operador = "";
                break;
            case "+":
                sumando = parseFloat(valorPrimero);
                resultado = suma(valorPrimeroFinal, sumando);
                document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
                document.getElementsByClassName("secondScreen")[0].innerHTML = "";
                ultimoValor = resultado
                valorPrimeroFinal = null;
                valorPrimero = "";
                operador = "";
                break;
            case "-":
                restador = parseFloat(valorPrimero)
                resultado = resta(valorPrimeroFinal, restador);
                document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
                document.getElementsByClassName("secondScreen")[0].innerHTML = "";
                ultimoValor = resultado;
                valorPrimero = "";
                valorPrimeroFinal = null;
                operador = "";
            
            
        }
    } 
});





