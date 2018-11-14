$(function() {

	$('.button').magnificPopup({
    items: {
        src: '.popup'
    },
    type: 'inline',
    closeBtnInside: 'true',
    removalDelay: 200,
    mainClass: 'mfp-zoom-in',
	});
});

// document.getElementByClass('button').onclick = function () {
// 	document.getElementByClass('popup').classList.toggle('d-none');
// }

document.getElementById('alert').onclick = function() {
	alert('Done!');
	location.reload();
}
