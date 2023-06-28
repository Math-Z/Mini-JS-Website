function funcBhaskara(){
    var res = document.querySelector("div#bhas-res")

    let bhasTab = document.querySelector("select#bhasTable")

    let txtn1 = document.querySelector("input#bhas-a")
    let txtn2 = document.querySelector("input#bhas-b")
    let txtn3 = document.querySelector("input#bhas-c")

    if(txtn1.value.length == 0 || txtn2.value.length == 0 || txtn3.value.length == 0){

    }else {
        let n1 = Number(txtn1.value)
        let n2 = Number(txtn2.value)
        let n3 = Number(txtn3.value)

        let delta = (n2 ** 2) - 4 * n1 * n3

        let deltaSR = Math.sqrt(delta)

        let x1 = ((-n2) + deltaSR)/(2 * n1)

        let x2 = ((-n2) - deltaSR)/(2 * n1)

        bhasTab.innerHTML = ""

        if(delta < 0){
            let item1 = document.createElement('option')
            item1.text = `Δ = ${delta}`
            bhasTab.appendChild(item1)
            
            let item4 = document.createElement('option')
            item4.text = `Since delta is < 0, there is no x.`
            bhasTab.appendChild(item4)

        } else{
            let item1 = document.createElement('option')
            item1.text = `Δ = ${delta}`
            bhasTab.appendChild(item1)

            let item2 = document.createElement('option')
            item2.text = `x1 = ${x1}`
            bhasTab.appendChild(item2)

            let item3 = document.createElement('option')
            item3.text = `x2 = ${x2}`
            bhasTab.appendChild(item3)
        }

        
    }
}