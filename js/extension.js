// дополнение для еффекта кручения glassmorphic-card
// VanillaTilt.init(document.querySelector(".glassmorphic-card"), {
//     max: 15,
//     speed: 200,
//     glare: true,
//     "max-glare": 1,
// });


// по клику на кнопку 'button' открывать то что указано в url в HTML
$('button').on('click', function(){     
    window.location.href = $(this).attr('url');
});

//Burger menu
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});