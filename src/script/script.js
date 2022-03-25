let glo = document.getElementById('globe_id')

let modallang = document.getElementById('modal_lang')

function showModal() {
    modallang.classList.toggle('hidden')
}

glo.addEventListener('click', showModal)
