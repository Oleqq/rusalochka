document.addEventListener('DOMContentLoaded', function() {
    const selectBoxCurrent = document.querySelector('.select-box__current');
    const selectBoxList = document.querySelector('.select-box__list');
    const overlay = document.querySelector('.overlay');

    let isOpen = false;

    selectBoxCurrent.addEventListener('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события, чтобы не срабатывал клик на document
        if (isOpen) {
            hideSelectBoxList();
        } else {
            showSelectBoxList();
        }
    });

    overlay.addEventListener('click', function() {
        if (isOpen) {
            hideSelectBoxList();
        }
    });

    function showSelectBoxList() {
        selectBoxList.style.opacity = '1';
        isOpen = true;
        selectBoxCurrent.classList.add('active');
        // Также можно добавить обработчик событий для закрытия списка при клике вне его пределов
        document.addEventListener('click', handleOutsideClick);
    }

    function hideSelectBoxList() {
        selectBoxList.style.opacity = '0';
        isOpen = false;
        selectBoxCurrent.classList.remove('active');
        document.removeEventListener('click', handleOutsideClick);
    }

    function handleOutsideClick(event) {
        if (!selectBoxList.contains(event.target) && !selectBoxCurrent.contains(event.target)) {
            hideSelectBoxList();
        }
    }
});




document.addEventListener("DOMContentLoaded", function() {
	let mybutton = document.getElementById("top-button");

	// Когда пользователь прокручивает страницу вниз на 20px, показать кнопку
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}

	// Когда пользователь кликает на кнопку, прокрутить страницу вверх
	mybutton.addEventListener("click", topFunction);

	function topFunction() {
		document.body.scrollTop = 0; // Для Safari
		document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
	}
});

//Слайдеры
new Swiper(".catalog-swiper", {
	slidesPerView: 5,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	touchReleaseOnEdges: true,
	// autoplay: {
	//     delay: 5000,
	// },
	spaceBetween: 30,
	watchOverflow: true,
	pagination: {
		el: ".catalog-swiper-pagination",
		clickable: "true",
	},
	navigation: {
		nextEl: ".catalog-swiper-button-next",
		prevEl: ".catalog-swiper-button-prev",
	},

	breakpoints: {
		
		2560: {
			slidesPerView: 5,
		},
		1920: {
			slidesPerView: 5,
		},
		1660: {
			slidesPerView: 4,	
		},
		1440: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 2,
			
		},
		0: {
			slidesPerView: 2,
			enabled: false // Отключаем слайдер при ширине экрана менее 991
		},
	}
});
new Swiper(".catalog-swiper-secondary", {
	slidesPerView: 5,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	touchReleaseOnEdges: true,
	// autoplay: {
	//     delay: 5000,
	// },
	spaceBetween: 30,
	watchOverflow: true,
	pagination: {
		el: ".catalog-swiper-pagination",
		clickable: "true",
	},
	navigation: {
		nextEl: ".catalog-swiper-button-next",
		prevEl: ".catalog-swiper-button-prev",
	},

	breakpoints: {
		
		2560: {
			slidesPerView: 5,
		},
		1920: {
			slidesPerView: 5,
		},
		1660: {
			slidesPerView: 4,	
		},
		1440: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 3,
			
		},
		767: {
			slidesPerView: 3,
		},
		567: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 2,
			
		},
	}
});


new Swiper(".reviews-slider", {
	slidesPerView: 4,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	touchReleaseOnEdges: true,
	// autoplay: {
	//     delay: 5000,
	// },
	spaceBetween: 30,
	watchOverflow: true,
	pagination: {
		el: ".reviews-slider-pagination",
		clickable: "true",
	},
	navigation: {
		nextEl: ".reviews-slider-button-next",
		prevEl: ".reviews-slider-button-prev",
	},

	breakpoints: {
		
		2560: {
			slidesPerView: 4,
		},
		1921: {
			slidesPerView: 4,
		},
		1660: {
			slidesPerView: 3,	
		},
		1440: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 2,
			
		},
		767: {
			slidesPerView: 2,
		},
		567: {
			slidesPerView: 1,
		},
		0: {
			slidesPerView: 1,
			
		},
	}
});

new Swiper(".product-slider", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	touchReleaseOnEdges: true,
	// autoplay: {
	//     delay: 5000,
	// },
	spaceBetween: 30,
	watchOverflow: true,
	pagination: {
		el: ".product-slider-pagination",
		clickable: "true",
	},
	navigation: {
		nextEl: ".product-slider-button-next",
		prevEl: ".product-slider-button-prev",
	},

	breakpoints: {
		
		2560: {
			slidesPerView: 1,
		},
		// 1921: {
		// 	slidesPerView: 1,
		// },
		// 1660: {
		// 	slidesPerView: 1,	
		// },
		// 1440: {
		// 	slidesPerView: 1,
		// },
		// 1024: {
		// 	slidesPerView: 1,
		// },
		// 991: {
		// 	slidesPerView: 1,
			
		// },
		// 767: {
		// 	slidesPerView: 1,
		// },
		// 567: {
		// 	slidesPerView: 1,
		// },
		// 0: {
		// 	slidesPerView: 1,
		// 	// enabled: false // Отключаем слайдер при ширине экрана менее 991
		// },
	}
});

new Swiper(".blog-item-page-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	touchReleaseOnEdges: true,
	spaceBetween: 0,
	watchOverflow: true,
	pagination: {
		el: ".blog-item-page-swiper-pagination",
		clickable: "true",
		type: "fraction"
	},
	navigation: {
		nextEl: ".blog-item-page-swiper-button-next",
		prevEl: ".blog-item-page-swiper-button-prev",
	},
});

//Параметры для типового слайдера с карточками товаров
let productSliderParams = {
	slidesPerView: 5.5,
	slidesPerGroup: 1,
	speed: 500,
	grabCursor: true,
	simulateTouch: true,
	spaceBetween: 0,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	slidesOffsetBefore: -30,
	freeMode: {
		enabled: true,
	},
	navigation: {},
	pagination: {},
	breakpoints: {
		300: {
			slidesPerView: 1.5,
			slidesPerGroup: 1,
			spaceBetween: 0,
			slidesOffsetBefore: -14,
		},
		450: {
			slidesPerView: 2,
			slidesOffsetBefore: -14,
		},
		768: {
			slidesPerView: 2.5,
			slidesOffsetBefore: -18,
		},
		992: {
			slidesPerView: 3.5,
			slidesOffsetBefore: -18,
		},
		1200: {
			slidesPerView: 3.5,
			slidesOffsetBefore: -18,
		},
		1400: {
			slidesPerView: 4,
			slidesOffsetBefore: -20,
		},
		1600: {
			slidesPerView: 4.5,
			slidesOffsetBefore: -20,
		},
		1921: {
			slidesPerView: 5.5,
			slidesOffsetBefore: -30,
		},
	},
};

//Заменяем параметры навигационных кнопок для слайдера с топовыми товарами на главной и инициализируем слайдер
productSliderParams.navigation.nextEl = ".top-product-swiper-button-next";
productSliderParams.navigation.prevEl = ".top-product-swiper-button-prev";
new Swiper(".top-product-swiper", productSliderParams);

//Заменяем параметры навигационных кнопок для слайдера с выгодными товарами на главной и инициализируем слайдер
productSliderParams.navigation.nextEl = ".sales-swiper-button-next";
productSliderParams.navigation.prevEl = ".sales-swiper-button-prev";
new Swiper(".sales-swiper", productSliderParams);

new Swiper(".partners-swiper", {
	slidesPerView: 6,
	slidesPerGroup: 1,
	speed: 500,
	simulateTouch: true,
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	loop: true,
	spaceBetween: 194,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	// loopAddBlankSlides: false,
	breakpoints: {
		300: {
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},
		576: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		768: {
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 50,
		},
		992: {
			slidesPerView: 5,
			slidesPerGroup: 1,
			spaceBetween: 50,
		},
		1200: {
			slidesPerView: 6,
			slidesPerGroup: 1,
			spaceBetween: 50,
		},
		1400: {
			spaceBetween: 75,
			slidesPerView: 6,
			slidesPerGroup: 1,
		},
		1600: {
			spaceBetween: 100,
			slidesPerView: 6,
			slidesPerGroup: 1,
		},
		1921: {
			spaceBetween: 194,
			slidesPerView: 6,
			slidesPerGroup: 1,
		},
	},
});

//Параметры для мобильного слайдера блога на главной
new Swiper(".blog-swiper", {
	slidesPerView: 2.5,
	slidesPerGroup: 1,
	speed: 500,
	grabCursor: true,
	simulateTouch: true,
	spaceBetween: 28,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	slidesOffsetBefore: -20,
	freeMode: {
		enabled: true,
	},
	breakpoints: {
		300: {
			slidesPerView: 1.2,
			slidesPerGroup: 1,
			spaceBetween: 20,
			slidesOffsetBefore: -14,
		},
		400: {
			slidesPerView: 1.5,
			spaceBetween: 20,
			slidesOffsetBefore: -10,
		},
		450: {
			slidesPerView: 2.2,
			spaceBetween: 20,
			slidesOffsetBefore: -10,
		},
		768: {
			slidesPerView: 2.5,
			spaceBetween: 28,
			slidesOffsetBefore: -10,
		},
	},
});

const sliderItemThumbs = new Swiper(".catalog-item-gallery .swiper", {
	slidesPerView: 5,
	spaceBetween: 30,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	navigation: {
		nextEl: ".slider__thumbs--item__next",
		prevEl: ".slider__thumbs--item__prev"
	},
	mousewheel: true,
	freeMode: true,
	breakpoints: {
		0: {
            spaceBetween: 5,
            slidesPerView: 3,
            mousewheel: false,
		},
		576: {
            spaceBetween: 10,
            slidesPerView: 3,
		},
		768: {
            slidesPerView: 3,
            spaceBetween: 10,
		},
        992: {
            spaceBetween: 15,
            slidesPerView: 3,
        },
        1200: {
            spaceBetween: 15,
            slidesPerView: 3.5,
			mousewheel: true,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1700: {
            spaceBetween: 20,
            slidesPerView: 5,
        },
        1921: {
            spaceBetween: 30,
            slidesPerView: 5,
        }
	}
});


const sliderItemImages = new Swiper('.slider__images--item .swiper', {
	slidesPerView: 1,
	spaceBetween: 0,
	mousewheel: false,
	grabCursor: true,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	pagination: {
		el: '.slider__images--item-pagination',
		clickable: true
	},
	thumbs: {
		swiper: sliderItemThumbs,
	},
});


//Прилипающая шапка
let headerIndex = document.querySelector(".header--index");
function onWindowScroll() {
	if (window.scrollY > headerIndex.clientHeight * 3) {
		headerIndex.classList.add("white");
	} else {
		headerIndex.classList.remove("white");
	}
}

if (headerIndex) {
	window.addEventListener("scroll", onWindowScroll);
	window.addEventListener("DOMContentLoaded", onWindowScroll);
}





// window.addEventListener("scroll", trackScroll);
// scrollButton.addEventListener("click", backToTop);

//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 1400) {
	(function ($) {
		$(window).on("load", function () {
			$(".text-content-scroll").mCustomScrollbar({
				theme: "dark",
				scrollInertia: "300",
				advanced: {
					updateOnContentResize: "true",
				},
			});
		});
	})(jQuery);
}

//Подключение маски в поле телефона
$(document).ready(function () {
	$(".phone-input").inputmask("+7 (999) 999 9999");
});

//Инициализация плавного скролла для блока с id=butter
// butter.init({
// 	wrapperId: 'butter',
// 	cancelOnTouch: true,
// 	wrapperDamper: 0.06
// });







//Отображение фильтров каталога по клику на кнопку "Фильтры"
let openFiltersButton = document.getElementById("filters-open-button");
let closeFiltersButton = document.querySelector(".catalog__wrapper-filters .btn-close");
let catalogFilters = document.querySelector(".catalog__wrapper .catalog__wrapper-filters");
let body = document.body;

let openFiltersHandler = function () {
	if (!catalogFilters.classList.contains('show')) {
		catalogFilters.classList.add('show');
		body.classList.add('fixed');
	}
}

let closeFiltersHandler = function () {
	if (catalogFilters.classList.contains('show')) {
		catalogFilters.classList.remove('show');
		body.classList.remove('fixed');
	}
}

if (openFiltersButton) {
	openFiltersButton.addEventListener('click', function() {
		openFiltersHandler();
	});
}

if (closeFiltersButton) {
	closeFiltersButton.addEventListener('click', function() {
		closeFiltersHandler();
	});
}

//Открытие/закрытие блока расшаривания на странице записи блога
let sharedLinks = document.querySelectorAll(".shared-link");
if (sharedLinks) {
	sharedLinks.forEach(function(sharedLink){
		let sharedBlock = sharedLink.closest(".blog-item-page-features").querySelector(".shared-block");
		let sharedCloseButton = sharedLink.closest(".blog-item-page-features").querySelector(".shared-block-close");
		sharedLink.addEventListener("click", function(e) {
			e.preventDefault();
			if (!sharedBlock.classList.contains("show")) {
				sharedBlock.classList.add("show");
			}
		});
		sharedCloseButton.addEventListener("click", function() {
			if (sharedBlock.classList.contains("show")) {
				sharedBlock.classList.remove("show");
			}
		});
	});
}


    // Получаем ссылку на элементы иконок
    const closedBurgerIcon = document.querySelector('.closed-burger');
    const openedBurgerIcon = document.querySelector('.opened-burger');

    // Проверяем, есть ли класс mm-ocd-opened у body
    const isMenuOpened = document.body.classList.contains('mm-ocd-opened');

    // Определяем, какую иконку показать в зависимости от состояния меню
    if (isMenuOpened) {
        // Если меню открыто, показываем иконку открытого бургера
        closedBurgerIcon.style.display = 'none';
        openedBurgerIcon.style.display = 'block';
    } else {
        // Если меню закрыто, показываем иконку закрытого бургера
        closedBurgerIcon.style.display = 'block';
        openedBurgerIcon.style.display = 'none';
    }




//Карта 2GIS в контактах
let map = document.getElementById("map");

if (map) {
    DG.then(function () {
        map = DG.map("map", {
            center: [55.342993, 86.004726],
            zoom: 16,
        });
		let pinSize = [92, 108];
		let anchorValue = [46, 108];
		if ((document.documentElement.clientWidth < 768) && (document.documentElement.clientWidth > 575)) {
			pinSize = [80, 93];
			anchorValue = [40, 93];
		} else if (document.documentElement.clientWidth < 576)  {
			pinSize = [38, 45];
			anchorValue = [19, 45];
		}
        mapicon = DG.icon({
            iconUrl: "img/pin-dark.svg" /* Иконка маркера */,
            iconAnchor: anchorValue,
            className: "map-icon",
            iconSize: pinSize /* Размер иконки */,
        });
        DG.marker([55.342993, 86.004726], { icon: mapicon }).addTo(map); /* Координаты маркера */
    });
}


