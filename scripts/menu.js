const headerMenuMobileWrapper = $(".header__menu-mobile-wrapper");
const body = $(document.body);

$(".header__menu-mobile-open").click(() => {
	headerMenuMobileWrapper.css("top", "0");
	body.css("overflow", "hidden");
});

$(".header__menu-mobile-close").click(() => {
	headerMenuMobileWrapper.css("top", "-100%");
	body.css("overflow", "visible");
});