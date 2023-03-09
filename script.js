function count() {
    let start = document.getElementById("txtstart")
    let finalize = document.getElementById("txtfinalize")
    let step = document.getElementById("txtstep")
    let result = document.getElementById("result")

    if (start.value.length == 0 || finalize.value.length == 0 || step.value.length == 0) {
        //alert("[ERROR] Data Not Found!")
        result.innerHTML = "Imposible Count!"
    } else {
        result.innerHTML = "Counting: <br>"
        let s = Number(start.value)
        let f = Number(finalize.value)
        let sp = Number(step.value)

        if(sp <= 0){
            alert("Invalid Step! Considering STEP 1")
            sp = 1
        }
        // Count Up
        if (s < f) {
            for (let i = s; i <= f; i += sp) {
                result.innerHTML += `${i} \u{1F449}`
            }
            // Count Down
        } else {
            for (let i = s; i >= f; i -= sp) {
                result.innerHTML += `${i} \u{1F449}`
            }     
        }
        result.innerHTML += `\u{1F3C1}`
    }
}