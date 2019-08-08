function scrollToClass(event) {
    event.preventDefault();
    const className = event.data.className;
    $('html, body').animate({
        scrollTop: ($(`.${className}`).first().offset().top)
    },250);
}

$(function(){
    $('#btn-about').click({className:"about"}, scrollToClass);
    $('#btn-speakers').click({className:"speakers"}, scrollToClass);
    $('#btn-sign-up').click({className:"form"}, scrollToClass);
});