const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('active')){
            event.target.classList.remove('active');
        } else {
            clearActiveClasses()
            slide.classList.add('active');
        }
    })
}


function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}
