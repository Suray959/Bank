const btnOne=document.querySelector('.add1')
const btnTwo=document.querySelector('.add2')

const pageOne=document.querySelector('.one')
const pageTwo=document.querySelector('.two')

const searchInput = document.querySelector('.searchInput');
const cards = document.querySelectorAll('.card');



btnOne.addEventListener('click',function() {
    pageOne.style.visibility='visible'
    pageTwo.style.visibility='hidden'

    
})

btnTwo.addEventListener('click', function() {
    pageOne.style.visibility = 'hidden';
    pageTwo.style.visibility = 'visible';

});




searchInput.addEventListener('keyup', function() {
    const searchText = this.value.trim().toLowerCase();

    cards.forEach(card => {
        const cardText = card.textContent.trim().toLowerCase();
        if (cardText.includes(searchText)) {
            card.style.visibility = 'visible';
        } else {
            card.style.visibility = 'hidden';
        }
    });
});