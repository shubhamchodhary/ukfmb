

const success = document.getElementById('subscribe-success')

const form = document.getElementById('form')



form.addEventListener("submit", (e) => {

    form.style.display = 'none';

    success.style.display = 'block';

    e.preventDefault()

})



