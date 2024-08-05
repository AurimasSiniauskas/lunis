// Array that contains all the buttons.
let buttons = document.getElementsByTagName("button");

// Store value given by the user.
let valorPrimero = "";
// Variable to store the number given by the user, so valorPrimero can be set back to the next input given by user. (Replaced.)
let valorSecundario = null;
// Stores current operator selected.
let operador = "";
// Value of the last operation. (Not used.)
let valorGuardado = null;
// Replace for the valorSecundario value.
let valorPrimeroFinal = null;
// Result, used to display the result, then is stored in valorGuardado.
let resultado = null;
// Stores the divisor.
let divisor = null;
// Same function as valorGuardado, but it is used.
let ultimoValor = null;
// Again, not used.
let calc = true;

// Displays 0 when no input was passed by the user.
if (valorPrimero == "") {
    document.getElementsByClassName("mainScreen")[0].innerHTML = "0"
}

// Operations.
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

// Converts a value to its negative form.
function convertir(val) {
    return(-(val));
}

// Assigning event listener to all buttons
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
        operador = "+";
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
        operador = "%"
        document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal
        if (valorPrimero != "" && valorPrimeroFinal != null) {
            operador = "%";
            ultimoValor = null;
            divisor = parseFloat(valorPrimero);
            resultado = division(valorPrimeroFinal, divisor);
            ultimoValor = resultado;
            valorPrimeroFinal = resultado;
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado; 
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal
        }
    }
});

buttons[11].addEventListener("click", () => {
    if(operador == "") {
        operador = "+";
        document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
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
        operador = "+";
        document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        if (valorPrimero != "" && valorPrimeroFinal != null) {
            operador = "+"
            sumador = parseFloat(valorPrimero);
            resultado = suma(valorPrimeroFinal, sumador);
            ultimoValor = resultado;
            valorPrimeroFinal = resultado;
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado; 
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        }
    }else {
        operador = "+";
        sumador = parseFloat(valorPrimero);
        resultado = suma(valorPrimeroFinal, sumador);
        ultimoValor = resultado;
        valorPrimeroFinal = resultado;
        valorPrimero = "";
        document.getElementsByClassName("mainScreen")[0].innerHTML = resultado; 
        document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
    }
});

buttons[15].addEventListener("click", () => {
    if(operador == "") {
        document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        operador = "-";
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
        operador = "-";
        document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal
        if (valorPrimero != "" && valorPrimeroFinal != null) {
            operador = "-";
            restador = parseFloat(valorPrimero);
            resultado = resta(valorPrimeroFinal, restador);
            ultimoValor = resultado;
            valorPrimeroFinal = resultado;
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado;
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        }
    }
});

buttons[2].addEventListener("click", () => {
    if(operador == "") {
        document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        operador = "*";
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
        operador = "*";
        document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
        if (valorPrimero != "" && valorPrimeroFinal != null) {
            operador = "*";
            multiplicador = parseFloat(valorPrimero);
            resultado = multiplicacion(valorPrimeroFinal, multiplicador);
            ultimoValor = resultado;
            valorPrimeroFinal = resultado;
            valorPrimero = "";
            document.getElementsByClassName("mainScreen")[0].innerHTML = resultado; 
            document.getElementsByClassName("secondScreen")[0].innerHTML = valorPrimeroFinal;
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
