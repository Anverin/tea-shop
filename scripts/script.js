$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.single-item').slick({
        // dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.circle-arrow-prev-slider'),
        nextArrow: $('.circle-arrow-next-slider')
    });

    $('.open-card-img').magnificPopup({
        type:'image'
    });

    $("#accordion").accordion();

        let name = $('#input-name');
        let lastName = $('#input-lastname');
        let phone = $('#input-phone');
        let country = $('#input-country');
        let index = $('#input-index');
        let address = $('#input-address');

        $('#btn-order').click(function changeForm () {
            if (!name.val()) {
                alert('Заполните поле "Имя"');
                return;
            }
            if (!lastName.val()) {
                alert('Заполните поле "Фамилия"');
                return;
            }
            if (!phone.val()) {
                alert('Заполните поле "Телефон"');
                return;
            }
            if (!country.val()) {
                alert('Заполните поле "Страна"');
                return;
            }
            if (!index.val()) {
                alert('Заполните поле "Индекс"');
                return;
            }
            if (index.val().length !== 6) {
                alert('Индекс должен содержать 6 символов');
                return;
            }
            if (!address.val()) {
                alert('Заполните поле "Адрес"');
                return;
            }
            $('.order-form').hide();
            $('.thanksBlock').fadeIn('slow', 'linear');
        });

    index.on("input", function allowOnlyNumbers () {
        if(this.value.match(/[^0-9]/g)){
            this.value = this.value.replace(/[^0-9]/g, "");
            // return;
        };
    });

})
