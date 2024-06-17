document.getElementById('openModalBtn').addEventListener("click", function() {
    document.getElementById('modalOne').classList.add("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById('modalOne').classList.remove("open")
    }
})


document.querySelector("modalOne .modal__box"). addEventListener('click', event => {
    event._isClickWiwhInModal = true;
})
document.getElementById("modalOne").addEventListener('click', event => {
    if (event._isClickWiwhInModal) return;
    event.currentTarget.classList.remove('open');
})