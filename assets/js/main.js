const modalBtn = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');


modalBtn.addEventListener('click', function(){
    modal.style.display = 'block';
})
closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    if(e.target === modal){
        modal.style.display = 'none';
    }
});