let estados = document.querySelector("select[name='estado']")

estados.addEventListener('change', function (event) {
    console.log(event.target.value)
})
