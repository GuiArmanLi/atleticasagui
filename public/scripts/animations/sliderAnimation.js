const images = [
    'https://i.redd.it/tales-of-demons-and-gods-v0-gy9ox5tpogid1.jpg?width=940&format=pjpg&auto=webp&s=3c8630870bcf406fbfd26d4ee29bbfe7cba36bec',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6db1a7c2-6926-4f9b-a67f-b773e4f129d6/defpwow-fadc6148-b6c9-491d-87ce-408b659f3238.png/v1/fill/w_1115,h_717,q_70,strp/the_great_kayden__eleceed_fanart__by_gothamaterasu_defpwow-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODIzIiwicGF0aCI6IlwvZlwvNmRiMWE3YzItNjkyNi00ZjliLWE2N2YtYjc3M2U0ZjEyOWQ2XC9kZWZwd293LWZhZGM2MTQ4LWI2YzktNDkxZC04N2NlLTQwOGI2NTlmMzIzOC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0boAhYXUTzQuf0cBMt_pWF6vILeZjMH8lb7pcoauHq8',
    'https://w0.peakpx.com/wallpaper/533/698/HD-wallpaper-comics-the-beginning-after-the-end-arthur-leywin.jpg'
];

let currentIndex = 0;
const slider = document.getElementById('slider');

function createSlide(imageUrl, className = '') {
    const slide = document.createElement('div');
    slide.className = `slide ${className}`;
    slide.style.backgroundImage = `url(${imageUrl})`;
    return slide;
}

function changeSlide() {
    const newSlide = createSlide(images[currentIndex], 'current');
    slider.appendChild(newSlide);

    currentIndex = (currentIndex + 1) % images.length;

    const previousSlide = slider.querySelector('.slide.current.previous');
    if (previousSlide) {
        slider.removeChild(previousSlide);
    }

    const currentSlide = slider.querySelector('.slide.current');
    if (currentSlide) {
        currentSlide.classList.remove('current');
        currentSlide.classList.add('previous');
    }
}

function initSlider() {
    const firstSlide = createSlide(images[currentIndex], 'current');
    firstSlide.style.transform = 'translateX(0)';
    slider.appendChild(firstSlide);
    currentIndex = (currentIndex + 1) % images.length;

    setTimeout(() => { changeSlide(); setInterval(changeSlide, 5000); }, 5000);
}

initSlider();
setTimeout(changeSlide(), 5000);