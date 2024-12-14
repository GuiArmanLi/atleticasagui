const images = [
    'https://cdn.awsli.com.br/600x700/2615/2615018/produto/222605237/backgrounderaser_20231220_170156230-mb67a71l3k.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgptnR1ejHeaT1nf1a8eSjUbPi5kkQsBZilQ&s',
    'https://blogger.googleusercontent.com/img/a/AVvXsEhx964JR5ZQkPU8_DhzaWeYIw3Elqypny41M1c7JpiEboEl2-xb4lwt3xUBDXKsUpNA3EskVwrKMB_uEy7aKSSSjpJiNX7Dkw-KPOoNbzUrv51xiHIBH8QTuCVv8J4lsRYDvGSF3S3snF8FiGwgFuaG_PjFjfMkw58NeVQjETlQ1G-N-_Ql9g6QQIagEkQ'
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