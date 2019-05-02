//Determinante sobre la columna 1
document.querySelector("#btn1").addEventListener('click', ()=>{
    let uno = Number(document.querySelector("#uno").value)
    let dos = Number(document.querySelector("#dos").value)
    let tres = Number(document.querySelector("#tres").value)
    let cuatro = Number(document.querySelector("#cuatro").value)
    let cinco = Number(document.querySelector("#cinco").value)
    let seis = Number(document.querySelector("#seis").value)
    let siete = Number(document.querySelector("#siete").value)
    let ocho = Number(document.querySelector("#ocho").value)
    let nueve = Number(document.querySelector("#nueve").value)
    let p = document.querySelector("#resultado")

    let renglon1=[uno,dos,tres]
    let renglon2=[cuatro,cinco,seis]
    let renglon3=[siete,ocho,nueve]

    let det = renglon1[0]*((renglon2[1]*renglon3[2]) - (renglon3[1]*renglon2[2])) 
            - renglon2[0]*((renglon1[1]*renglon3[2])-(renglon3[1]*renglon1[2]))
            + renglon3[0]*((renglon1[1]*renglon2[2])-(renglon2[1]*renglon1[2]))

    
    p.innerHTML += "Determinante = " + det +"<br>"
})
//Determinante sobre la columna 2
document.querySelector("#btn2").addEventListener('click', ()=>{
    let uno = Number(document.querySelector("#uno").value)
    let dos = Number(document.querySelector("#dos").value)
    let tres = Number(document.querySelector("#tres").value)
    let cuatro = Number(document.querySelector("#cuatro").value)
    let cinco = Number(document.querySelector("#cinco").value)
    let seis = Number(document.querySelector("#seis").value)
    let siete = Number(document.querySelector("#siete").value)
    let ocho = Number(document.querySelector("#ocho").value)
    let nueve = Number(document.querySelector("#nueve").value)
    let p = document.querySelector("#resultado")

    let renglon1=[uno,dos,tres]
    let renglon2=[cuatro,cinco,seis]
    let renglon3=[siete,ocho,nueve]

    let det = -renglon1[1]*((renglon2[0]*renglon3[2]) - (renglon3[0]*renglon2[2])) 
            + renglon2[1]*((renglon1[0]*renglon3[2]) - (renglon3[0]*renglon1[2]))
            - renglon3[1]*((renglon1[0]*renglon2[2]) - (renglon2[0]*renglon1[2]))

    p.innerHTML += "Determinante = " + det +"<br>"
})
//Determinante sobre la columna 3
document.querySelector("#btn3").addEventListener('click', ()=>{
    let uno = Number(document.querySelector("#uno").value)
    let dos = Number(document.querySelector("#dos").value)
    let tres = Number(document.querySelector("#tres").value)
    let cuatro = Number(document.querySelector("#cuatro").value)
    let cinco = Number(document.querySelector("#cinco").value)
    let seis = Number(document.querySelector("#seis").value)
    let siete = Number(document.querySelector("#siete").value)
    let ocho = Number(document.querySelector("#ocho").value)
    let nueve = Number(document.querySelector("#nueve").value)
    let p = document.querySelector("#resultado")

    let renglon1=[uno,dos,tres]
    let renglon2=[cuatro,cinco,seis]
    let renglon3=[siete,ocho,nueve]

    let det = renglon1[2]*((renglon2[0]*renglon3[1]) - (renglon3[0]*renglon2[1])) 
            - renglon2[2]*((renglon1[0]*renglon3[1])-(renglon3[0]*renglon1[1]))
            + renglon3[2]*((renglon1[0]*renglon2[1])-(renglon2[0]*renglon1[1]))

    p.innerHTML += "Determinante = " + det +"<br>"
})
//Determinante sobre la renglon 1
document.querySelector("#btn4").addEventListener('click', ()=>{
    
    let uno = Number(document.querySelector("#uno").value)
    let dos = Number(document.querySelector("#dos").value)
    let tres = Number(document.querySelector("#tres").value)
    let cuatro = Number(document.querySelector("#cuatro").value)
    let cinco = Number(document.querySelector("#cinco").value)
    let seis = Number(document.querySelector("#seis").value)
    let siete = Number(document.querySelector("#siete").value)
    let ocho = Number(document.querySelector("#ocho").value)
    let nueve = Number(document.querySelector("#nueve").value)
    let p = document.querySelector("#resultado")
    
    let renglon1=[uno,dos,tres]
    let renglon2=[cuatro,cinco,seis]
    let renglon3=[siete,ocho,nueve]

    let menor1 = (cinco*nueve) - (ocho*seis)
    let menor2 = (cuatro*nueve) - (siete*seis)
    let menor3 = (cuatro*ocho) - (siete*cinco)

    let det = (renglon1[0]*menor1)  - (renglon1[1]*menor2) + (renglon1[2]*menor3)
    
    p.innerHTML += "Determinante = " + det +"<br>"
})
//Determinante sobre el renlgon 2
document.querySelector("#btn5").addEventListener('click', ()=>{
    let uno = Number(document.querySelector("#uno").value)
    let dos = Number(document.querySelector("#dos").value)
    let tres = Number(document.querySelector("#tres").value)
    let cuatro = Number(document.querySelector("#cuatro").value)
    let cinco = Number(document.querySelector("#cinco").value)
    let seis = Number(document.querySelector("#seis").value)
    let siete = Number(document.querySelector("#siete").value)
    let ocho = Number(document.querySelector("#ocho").value)
    let nueve = Number(document.querySelector("#nueve").value)
    let p = document.querySelector("#resultado")

    let renglon1=[uno,dos,tres]
    let renglon2=[cuatro,cinco,seis]
    let renglon3=[siete,ocho,nueve]

    let det = -renglon2[0]*((renglon1[1]*renglon3[2]) - (renglon3[1]*renglon1[2])) 
            + renglon2[1]*((renglon1[0]*renglon3[2])-(renglon3[0]*renglon1[2]))
            - renglon2[2]*((renglon1[0]*renglon3[1])-(renglon3[0]*renglon1[1]))

    p.innerHTML += "Determinante = " + det +"<br>"
})
//Determinante sobre el renglon 3
document.querySelector("#btn6").addEventListener('click', ()=>{
    let uno = Number(document.querySelector("#uno").value)
    let dos = Number(document.querySelector("#dos").value)
    let tres = Number(document.querySelector("#tres").value)
    let cuatro = Number(document.querySelector("#cuatro").value)
    let cinco = Number(document.querySelector("#cinco").value)
    let seis = Number(document.querySelector("#seis").value)
    let siete = Number(document.querySelector("#siete").value)
    let ocho = Number(document.querySelector("#ocho").value)
    let nueve = Number(document.querySelector("#nueve").value)
    let p = document.querySelector("#resultado")

    let renglon1=[uno,dos,tres]
    let renglon2=[cuatro,cinco,seis]
    let renglon3=[siete,ocho,nueve]

    let det = renglon3[0]*((renglon1[1]*renglon2[2]) - (renglon2[1]*renglon1[2])) 
            - renglon3[1]*((renglon1[0]*renglon2[2])-(renglon2[0]*renglon1[2]))
            + renglon3[2]*((renglon1[0]*renglon2[1])-(renglon2[0]*renglon1[1]))

    p.innerHTML += "Determinante = " + det +"<br>"
})