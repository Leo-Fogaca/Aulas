let inputs = document.querySelectorAll('.input')

inputs.forEach(input => {
    input.addEventListener('change', function () {
        if(input.value !== "") {
            input.classList.add('validado')
        }else {
            input.classList.remove('validado')
        }
    })
});