function multiT(){
    let txtn = document.querySelector("input#txtNumberMulti")
    let tab = document.querySelector("select#multiTab")

    if(txtn.value.length == 0){
        
    } else{
        let n = Number(txtn.value)
        let x

        tab.innerHTML = ""

        for(x = 1; x <= 10; x++){
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${n*x}`
            tab.appendChild(item)
        }
    }
}