document.querySelector("#btn").addEventListener('click', ()=>{
    let uno = Number(document.querySelector("#m1").value)
    let dos = Number(document.querySelector("#m2").value)
    let tres = Number(document.querySelector("#m3").value)
    let cuatro = Number(document.querySelector("#m4").value)
    let p = document.querySelector("#parrafo")

    let renglon1 = [uno,dos]
    let renglon2 = [tres,cuatro]

    let det = (renglon1[0]*renglon2[1])-(renglon2[0]*renglon1[1])

    p.innerHTML += "Determinante = " + det + "<br>"
})