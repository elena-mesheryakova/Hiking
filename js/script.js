$(function(){
    $('.product__btn').on('click', function(){
        $('.product__inner-more').toggle();
    });

    $('.product__item-info-text').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
    $(document).on('click', '.product__close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});