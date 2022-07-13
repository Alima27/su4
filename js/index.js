// calculator
function multiplication() { 
	var v1 =parseInt(document.getElementById("price").value); 
	var v2 = parseInt(document.getElementById("width").value);
	var v3 =parseInt(document.getElementById("height").value);
	var v4 =parseInt(document.getElementById("length").value);
	document.getElementById("result").value = 300*v2*v3*v4;
}

// calculator
function multiplication1() {  
	var v1 = parseInt(document.getElementById("width-1").value);
	var v2 =parseInt(document.getElementById("length-1").value);
	var v3 =parseInt(document.getElementById("height-1").value);
	var v4 =parseInt(document.getElementById("price-1").value);
	document.getElementById("result-1").value = v1*v2*v3*720;
}

// pagination
var btns = document.querySelectorAll('.btn');
var paginationWrapper = document.querySelector('.pagination-wrapper');
var bigDotContainer = document.querySelector('.big-dot-container');
var littleDot = document.querySelector('.little-dot');

for(var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', btnClick);
}

function btnClick() {
	if(this.classList.contains('btn--prev')) {
		paginationWrapper.classList.add('transition-prev');
	} else {
		paginationWrapper.classList.add('transition-next');  
	}
	
	var timeout = setTimeout(cleanClasses, 500);
}

function cleanClasses() {
	if(paginationWrapper.classList.contains('transition-next')) {
		paginationWrapper.classList.remove('transition-next')
	} else if(paginationWrapper.classList.contains('transition-prev')) {
		paginationWrapper.classList.remove('transition-prev')
	}
}

// read-more

function myFunction() {
  var dots = document.getElementById("dots");
	var moreText = document.getElementById("text-more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "block";
    btnText.innerHTML = "Читать далее"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Скрыть"; 
    moreText.style.display = "inline";
  }
}


// animation-history
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.history__background, .history__left' );
for (let elm of elements) {
  observer.observe(elm);
}

// scrolltop
function scrollTo(to, duration = 700) {
	const
			element = document.scrollingElement || document.documentElement,
			start = element.scrollTop,
			change = to - start,
			startDate = +new Date(),
			// t = current time
			// b = start value
			// c = change in value
			// d = duration
			easeInOutQuad = function (t, b, c, d) {
					t /= d / 2;
					if (t < 1) return c / 2 * t * t + b;
					t--;
					return -c / 2 * (t * (t - 2) - 1) + b;
			},
			animateScroll = function () {
					const currentDate = +new Date();
					const currentTime = currentDate - startDate;
					element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
					if (currentTime < duration) {
							requestAnimationFrame(animateScroll);
					}
					else {
							element.scrollTop = to;
					}
			};
	animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
	let btn = document.querySelector('#toTop');
	window.addEventListener('scroll', function () {
			// Если прокрутили дальше 599px, показываем кнопку
			if (pageYOffset > 100) {
					btn.classList.add('show');
					// Иначе прячем
			} else {
					btn.classList.remove('show');
			}
	});

	// При клике прокручиываем на самый верх
	btn.onclick = function (click) {
			click.preventDefault();
			scrollTo(0, 400);
	}
});
