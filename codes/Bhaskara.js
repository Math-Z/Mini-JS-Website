function doBhaskara(){
    var txtRes1 = document.querySelector("p#bhas-res1")
    var txtRes2 = document.querySelector("p#bhas-res2")
    var txtRes3 = document.querySelector("p#bhas-res3")

    var txta = document.querySelector("input#bhas-a")
    var txtb = document.querySelector("input#bhas-b")
    var txtc = document.querySelector("input#bhas-c")

    if(txta.value.length == 0, txtb.value.length == 0, txtc.value.length == 0){

    } else{
        let a = Number(txta.value)
        let b = Number(txtb.value)
        let c = Number(txtc.value)

        let delta = (b ** 2) - 4 * a * c

        let deltaSR = Math.sqrt(delta)

        let x1 = (-b + deltaSR) / (2 * a)
        let x2 = (-b - deltaSR) / (2 * a)

        txtRes1.innerHTML = " "
        txtRes2.innerHTML = " "
        txtRes3.innerHTML = " "

        if(delta < 0){
            txtRes1.innerHTML = `Δ = ${delta}`
            txtRes2.innerHTML = "When delta is lower than 0, there is no x."
            
        } else{
            txtRes1.innerHTML = `Δ = ${delta}`
            txtRes2.innerHTML = `x1 = ${x1}`
            txtRes3.innerHTML = `x2 = ${x2}`
        }
    }
}