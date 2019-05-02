document.querySelector("#btn4x4").addEventListener("click", () => {
    let uno = Number(document.querySelector("#uno").value)
    let dos = Number(document.querySelector("#dos").value)
    let tres = Number(document.querySelector("#tres").value)
    let cuatro = Number(document.querySelector("#cuatro").value)
    let cinco = Number(document.querySelector("#cinco").value)
    let seis = Number(document.querySelector("#seis").value)
    let siete = Number(document.querySelector("#siete").value)
    let ocho = Number(document.querySelector("#ocho").value)
    let nueve = Number(document.querySelector("#nueve").value)
    let diez = Number(document.querySelector("#diez").value)
    let once = Number(document.querySelector("#once").value)
    let doce = Number(document.querySelector("#doce").value)
    let trece = Number(document.querySelector("#trece").value)
    let catorce = Number(document.querySelector("#catorce").value)
    let quince = Number(document.querySelector("#quince").value)
    let dieciseis = Number(document.querySelector("#dieciseis").value)
    let p = document.querySelector("result")

    //Se toman los valores de los inputs para generar cada renglon de la matríz.

    let renglon1 = [uno, dos, tres, cuatro];
    let renglon2 = [cinco, seis, siete, ocho];
    let renglon3 = [nueve, diez, once, doce];
    let renglon4 = [trece, catorce, quince, dieciseis];

    //Sacaremos Las determiantes por cada posicion dentro del vector

    let detUno = renglon1[0] * ((renglon2[1] * renglon3[2] * renglon4[3]) + (renglon2[2] * renglon3[3] * renglon4[1]) + (renglon2[3] * renglon3[1] * renglon4[2]) - (renglon4[1] * renglon3[2] * renglon2[3]) - (renglon4[2] * renglon3[3] * renglon2[1]) - (renglon4[3] * renglon3[1] * renglon2[2]))
    let detDos = renglon2[0] * ((renglon1[1] * renglon3[2] * renglon4[3]) + (renglon1[2] * renglon3[3] * renglon4[1]) + (renglon1[3] * renglon3[1] * renglon4[2]) - (renglon4[1] * renglon3[2] * renglon1[3]) - (renglon4[2] * renglon3[3] * renglon1[1]) - (renglon4[3] * renglon3[1] * renglon1[2]))
    let detTres = renglon3[0] * ((renglon1[1] * renglon2[2] * renglon4[3]) + (renglon1[2] * renglon2[3] * renglon4[1]) + (renglon1[3] * renglon2[1] * renglon4[2]) - (renglon4[1] * renglon2[2] * renglon1[3]) - (renglon4[2] * renglon2[3] * renglon1[1]) - (renglon4[3] * renglon2[1] * renglon1[2]))
    let detCuatro = renglon4[0] * ((renglon1[1] * renglon2[2] * renglon3[3]) + (renglon1[2] * renglon2[3] * renglon3[1]) + (renglon1[3] * renglon2[1] * renglon3[2]) - (renglon3[1] * renglon2[2] * renglon1[3]) - (renglon3[2] * renglon2[3] * renglon1[1]) - (renglon3[3] * renglon2[1] * renglon1[2]))

    //Mostramos el resultado 
    console.log(detUno);
    console.log(detDos);
    console.log(detTres);
    console.log(detCuatro);

})