function rateCard(){
    const numbers= document.querySelectorAll ('.number');
    const image= document.getElementById ('select-no');
    const submit= document.querySelector ('button');
    const slide1= document.querySelector ('rating_card');
    const finalResult= document.querySelector('slide2');


numbers.forEach(element => {
    element.addEventListener('click', () => {
        for(i=0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        element.classList.toggle('active');
        thankYou.innerText = `You selected ${element.innerText} out of ${buttons.length++}.`;
    })
});

submit.addEventListener('click', () => {
    rating_ard.style.display = 'none'
    Slide_2.style.display = 'flex';
})
}