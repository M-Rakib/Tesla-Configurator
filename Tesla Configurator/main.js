const topBar = document.querySelector('#top-bar');
const exteriorColourSection = document.querySelector('#exterior-buttons');
const interiorColourSection = document.querySelector('#interior-buttons');
const exteriorImage = document.querySelector('#exterior-image')
const interiorImage = document.querySelector('#interior-image')

// Handle Top Bar on Scroll
const handleScroll = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar', atTop);
    topBar.classList.toggle('hidden-bar', !atTop);
}

// Image Mapping
const exteriorImages = {
    'Stealth Grey': '/images/model-y-stealth-grey.jpg',
    'Pearl White': '/images/model-y-pearl-white.jpg',
    'Deep Blue': '/images/model-y-deep-blue-metallic.jpg',
    'Solid Black': '/images/model-y-solid-black.jpg',
    'Ultra Red': '/images/model-y-ultra-red.jpg',
    Quicksilver: '/images/model-y-quicksilver.jpg',
}

const interiorImages = {
    Dark: '/images/button-dark.avif',
    Light: '/images/button-light.avif'
}
// Handle Colour Selection
const handleColourButtonClick = (event) => {
    let button;

    console.log(event.target)
}

// Event Listeners 
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll)) // 
exteriorColourSection.addEventListener('click', handleColourButtonClick)
interiorColourSection.addEventListener('click', handleColourButtonClick)