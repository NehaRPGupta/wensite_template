const closeBtn = document.querySelector('.close-btn');
const openModal = document.querySelector('.btn');
const modal = document.querySelector('.modal-overlay');

openModal.addEventListener('click', function(){
    modal.classList.add('show-modal');
});

closeBtn.addEventListener('click', function(){
    modal.classList.remove('show-modal');
})