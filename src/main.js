import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import $ from 'jquery';

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	modules: [Navigation],
});

const reserveBtn = document.getElementById('reserve-btn');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalSubmit = document.getElementById('modal-submit');
const menuBtn = document.getElementById('menu-btn');
const menuCloseBtn = document.getElementById('menu-close-btn');

reserveBtn.addEventListener('click', () => {
	modal.classList.remove('hidden');
});

modalClose.addEventListener('click', () => {
	modal.classList.add('hidden');
});

modalSubmit.addEventListener('click', () => {
	if (modal.checkValidity()) {
		modal.classList.add('hidden');
	}
});

menuBtn.addEventListener('click', () => {
	const menu = document.getElementById('menu');
	menu.classList.remove('hidden');
});

menuCloseBtn.addEventListener('click', () => {
	const menu = document.getElementById('menu');
	menu.classList.toggle('hidden');
});

let url = 'form-submit.php';
$('form').on(function (event) {
	event.preventDefault();
	var formData = $(this).serialize();
	$.ajax({
		type: 'POST',
		url,
		data: formData,
		success: function (data) {
			$('#modal').addClass('hidden');
			$('#modal-success').removeClass('hidden');
		},
	});
});
