window.addEventListener("load", setup);

var Canvas;
var ctx;

// Les pixels du canvas, à modifier en cas de grands tirages
var Hauteur_du_canvas = 2000;
var Largeur_du_canvas = 1414;


//VIOLET VANILLE BLANC
var Theme1 = ["#7963cf", "#f6fcbf", "white"];

var myImage;

function setup() {

    var ClickPrint = document.getElementById("ClickPrint");
    ClickPrint.addEventListener("click", print);

    var Canvas = document.getElementById("Canvas");

    Canvas.width = Largeur_du_canvas;
    Canvas.height = Hauteur_du_canvas;
    rect = Canvas.getBoundingClientRect();
    ctx = Canvas.getContext("2d");

    // FOND DE COULEUR VIOLETTE
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "#7963cf";
    ctx.fillRect(0, 0, Largeur_du_canvas, Hauteur_du_canvas);
    ctx.closePath();
    ctx.restore();

    // CARRE
    var Carre1 = new Carre(Largeur_du_canvas / 4, Hauteur_du_canvas / 4, Largeur_du_canvas / 2, Hauteur_du_canvas / 2, Theme1[1]);
    Carre1.draw();

    // CERCLE
    var Cercle1 = new Cercle(Largeur_du_canvas / 2, Hauteur_du_canvas / 2, 300, Theme1[0]);
    Cercle1.draw();

    function print() {
        var Canvas = document.getElementById("Canvas");
        var Image = document.getElementById("Image");
        Image.src = Canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        window.print();
    }



}