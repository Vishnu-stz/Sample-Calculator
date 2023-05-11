displayData = ((n) => {
    result.value = result.value + n // result.value+=n
})

evaluateOpertor = (() => {
    result.value = eval(result.value)
})

AllClear = (() => {
    result.value = ""
})

BackSpace = (() => {
    result.value = result.value.slice(0 , -1)
})