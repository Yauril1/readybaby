var load = document.getElementById("loading");

window.onload = lun;

function lun() {
    load.style.display = "none";
}

var dialog = document.getElementsByClassName("dialog")[0];
var variableBorder = 1;
var changeBorder = setInterval(change, 300);

function change() {
    if (variableBorder == 1) {
        dialog.style.border = "none";
        variableBorder = 2;
    } else if (variableBorder == 2) {
        dialog.style.borderRight = "20px solid white";
        variableBorder = 1;
    }
}

var dialogs = {
    value0: function() {
        texts = "MI VIDA, HOLA, SI SOY YO... TE ESCRIBO MIENTRAS, EL PROGRAMA HACE TODO POR MI";
        timer = 400;
    },
    value1: function() {
        texts = "QUERIA DECIRTE QUE TE AMO Y MUCHO ❤";
        timer = 150;
    },
    value2: function() {
        texts = "DESDE QUE ME ENAMORE DE TI";
        timer = 150;
    },
    value3: function() {
        texts = "MI VIDA CAMBIO POR COMPLETO";
        timer = 150;
    },
    value4: function() {
        texts = "¿SABES POR QUE BEBE?";
        timer = 150;
    },
    value5: function() {
        texts = "POR QUE EN TI VEO FELICIDAD";
        timer = 200;
    },
    value6: function() {
        texts = "ME HACE SENTIR MUY FELIZ SABER QUE AUN SIGUES A MI LADO";
        timer = 400;
    },
    value7: function() {
        texts = "RECUERDO LA VES QUE TE BESE...";
        timer = 400;
    },
    value8: function() {
        texts = "ME ENCANTO, RECUERDO CUANTO TE ABRACE MUY FUERTE";
        timer = 400;
    },
    value9: function() {
        texts = "SENTI TODO TU AMOR BEBE, TODO EL CALORCITO RECORRER POR NUESTROS CUERPOS";
        timer = 400;
    },
    value10: function() {
        texts = "SENTIA COMO CADA SEGUNDO QUE PASABA EN ESE MOMENTO, FUESE UNICO";
        timer = 400;
    },
    value11: function() {
        texts = "ME ENAMORE POR COMPLETO DE TI...";
        timer = 400;
    },
     value12: function() {
        texts = "TE PROMETI TODO MI AMOR, SOLO PARA TI.";
        timer = 400;
    },
     value13: function() {
        texts = "DE DARTE TODO MI CARIÑO, Y MI ATENCIÓN";
        timer = 400;
    },
     value14: function() {
        texts = "NO CREAS JAMAS QUE NO TE AMO, O QUE NO QUIERO HABLAR CONTIGO, ESO ME HACE SENTIR MAL BEBE";
        timer = 400;
    },
     value15: function() {
        texts = "A MI ME ENCANTA HABLAR CONTIGO BEBE, ME FASCINA, ME GUSTA MUCHO DARTE MI TIEMPO PARA HABLAR CONTIGO";
        timer = 400;
    },
     value16: function() {
        texts = "EN TI VEO TODO EL AMOR DEL MUNDO, ERES MI NOVIA HERMOSA";
        timer = 400;
    },
     value17: function() {
        texts = "MI COSHITA... MI TERRONCITO...MI BEBE MOSHA";
        timer = 400;
    },
     value18: function() {
        texts = "PERDÓN SI ALGUNAS VECES ME EQUIVOCO EN LAS COSAS QUE DIGO, JAMAS QUISIERA PERDERTE AMOR...";
        timer = 400;
    },
    value19: function() {
        texts = "ERES LA  MUJER QUE QUIERO PARA TODA MI VIDA, SOLO TE QUIERO Y AMO A TI BEBE 😍❤";
        timer = 400;
    },
};

var namber = 0;
var timer;
var texts;

type();

function type() {
    dialogs["value" + namber]();

    dialog.innerHTML = "";
    var Letters = [];

    for (var i = 0; i < texts.length; i++) {
        text = texts.charAt(i);
        Letters[i] = text;
    }

    writes = setInterval(write, timer);

    positionLetter = 0;

    function write() {
        if (positionLetter == Letters.length) {
            clearInterval(writes);
            namber++;
            if (namber == Object.keys(dialogs).length) {
                clearInterval(writes);
                return up();
            }
            setTimeout(type, 1000);
            return;
        }
        dialog.innerHTML += Letters[positionLetter];
        positionLetter++;
    }
}

var a = 1;
var b = 1;

function up() {
    sus = setInterval(startus, 10);

    function startus() {
        a += 0.00001;
        b += 0.00001;
        dialog.style.transform = "scale(" + a++ + "," + b++ + ")";
    }
}
