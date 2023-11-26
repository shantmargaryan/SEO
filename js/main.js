const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const heroBgBox = document.querySelector(".hero__bg-box");
const scrolToTop = document.querySelector(".footer__link-top");
const plantSwitch = document.querySelector(".plans__btn-box");

plantSwitch?.addEventListener("click", (e) => {
    const click = e.target;
    const currentBtn = click.closest(".plans__btn");
    const btns = plantSwitch?.querySelectorAll(".plans__btn");
    if (currentBtn) {
        btns.forEach(btn => btn.classList.remove("plans__btn_switch"));
        currentBtn.classList.add("plans__btn_switch");
    }
});



window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
        scrolToTop.classList.remove("footer__link-top_hide");
    }
    else {
        scrolToTop.classList.add("footer__link-top_hide");
    }
});



heroBgBox.style.paddingTop = header.offsetHeight + 200 + "px";



burger.addEventListener("click", function () {
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
    if (burger.classList.contains("burger_active")) {
        header.classList.add("header_active")
        disableScroll();
    } else {
        header.classList.remove("header_active");
        setTimeout(() => {
            enableScroll();
        }, 300);
    }
});

const accordionQuestionsEl = document.querySelector(".accordion");
if (accordionQuestionsEl) {
    const accordionQuestions = new Accordion('accordion', {
        turn: true
    });
}


const disableScroll = () => {
    const fixBlocks = document?.querySelectorAll('.fixed-block');
    const pagePosition = window.scrollY;
    const paddingOffset = `${(window.innerWidth - document.body.offsetWidth)
        }px`;

    document.documentElement.style.scrollBehavior = 'none';
    fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
    document.body.style.paddingRight = paddingOffset;
    document.body.classList.add('dis-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = `-${pagePosition} px`;
}

const enableScroll = () => {
    const fixBlocks = document?.querySelectorAll('.fixed-block');
    const pagePosition = parseInt(document.body.dataset.position, 10);
    fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
    document.body.style.paddingRight = '0px';

    document.body.style.top = 'auto';
    document.body.classList.remove('dis-scroll');
    window.scroll({
        top: pagePosition,
        left: 0
    });
    document.body.removeAttribute('data-position');
}

const mediaQueryMinWidth_1200 = window.matchMedia('(min-width: 1200px)');
mediaQueryMinWidth_1200.addEventListener("change", (e) => {
    if (e.matches) {
        nav.style.paddingTop = "";
        return true;
    }
    else {
        nav.style.paddingTop = header.offsetHeight + "px";
    }
    return false;
});

const studiesSwiperEl = document.querySelector(".studies__swiper")
if (studiesSwiperEl) {
    let studiesSwiper = new Swiper(".studies__swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });
}

const clientsSwiperEl = document.querySelector(".clients__swiper");
if (clientsSwiperEl) {
    let clientsSwiper = new Swiper(".clients__swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

const likeSwiperEl = document.querySelector(".like__Swiper");
if (likeSwiperEl) {
    let likeSwiper = new Swiper(".like__Swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            }
        }
    });
}

const validatorEl = document.querySelector("#careersForm");
if (validatorEl) {
    const validator = new JustValidate("#careersForm");
    validator
        .addField('#userName', [
            {
                rule: 'required',
            },
            {
                rule: 'minLength',
                value: 3,
            },
            {
                rule: 'maxLength',
                value: 15,
            },
        ])

        .addField('#userEmail', [
            {
                rule: 'required',
            },
            {
                rule: 'email',
            },
        ])

        .addField('#userTel', [
            {
                rule: 'required',
            },
            {
                rule: 'number',
            },
        ]);
}

const careerstSelect = document.querySelector("[data-select='select']")
if (careerstSelect) {
    const customSelect1 = new CustomSelect('select', {
        turn: true
    });
}






