// hamburger icon open left bar menu

function openBar() {
    $(".left-bar").toggleClass("open-left-bar");
    $(".black-courtain").toggleClass("open-black-courtain");
}

// lens open search top bar

function openSearch() {
    $(".ricerca").toggleClass("open-ricerca");
}

// onClick color mode toggled

function darkMode() {
    $(".container,.left-bar,.top-bar,.landing-page,body").toggleClass("dark-mode");
    $(".main-switch,.card,.left-footer,.main-footer").toggleClass("dark-element");
    console.log("azz is getting dark")
}

// scrolling top bar activation

function changeTopBar() {
    $(document).scroll(function () {
        if ($(this).scrollTop() >= 70) {

            $(".top-bar").addClass("scroll-top-bar");
        }
        else {
            $(".top-bar").removeClass("scroll-top-bar");
        }
    });

}

// listening funcion for scrolling top bar call

$(document).ready(function () {
    changeTopBar()
});

// draggable carousel

let sliderContainer = document.querySelector('.slider-container');
let innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let x;

sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;
});

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};

sliderContainer.addEventListener("mousemove", (e) => {

    checkBoundary();
});


















































// click and drag page "azz"

// const slider = document.querySelector('.items');
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//     console.log("erreerre", scrollLeft)
// });

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mousemove', (e) => {
//     if (!isDown) return;  // stop the fn from running
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 2;
//     slider.scrollLeft = scrollLeft - walk;

//     console.log('sdsd', scrollLeft)
//     console.log(slider.scrollLeft)
// });


// //   touchEvents

// slider.addEventListener('touchstart', (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener('touchend', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('touchcancel', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('touchmove', (e) => {
//     if (!isDown) return;  // stop the fn from running
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 2;
//     slider.scrollLeft = scrollLeft - walk;
// });