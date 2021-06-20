/**
	Efeito SCROLL p/ menu
 */

    const menuItems = document.querySelectorAll('.menu a[href^="#"]');
    //console.log(menuItems);
    menuItems.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
    })
    
    //Referencia o item e pega o offsetTop da página
    function getScrollTopByHref(element){
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }
    
    //Capura o click
    function scrollToIdOnClick(event){
        event.preventDefault();
        const to = getScrollTopByHref(event.target) - 87;
        
        scrollToPosition(to);
    }
    
    //Mudança suave da animação (exceto no Browser Safari)
    function scrollToPosition(to) {
        window.scroll({
            top: to,
            behavior: "smooth",
        });
    }
    
    //Opacidade para o header quando rolado para baixo
    $(window).scroll(function(e) {
        var scrolled = $(window).scrollTop(),
            header = $('.site-header');
    
        header.css('top', -(scrolled) * 0.5 + 'px');
    
        if (scrolled > $(document).height() - $(window).height() - 140) {
            var scrollPos = scrolled - ($(document).height() - $(window).height() - 140);
            var position = scrollPos / 10;
            var opacity = (scrollPos * 1) / 470;
    
            $('.indicator').css({ opacity: opacity, left: position + '%' });
        }
    });