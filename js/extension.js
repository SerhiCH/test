// дополнение для еффекта кручения glassmorphic-card
VanillaTilt.init(document.querySelector(".glassmorphic-card"), {
    max: 15,
    speed: 200,
    glare: true,
    "max-glare": 1,
});


// по клику на кнопку открывать url
$('button').on('click', function(){     
    window.location.href = $(this).attr('url');
});