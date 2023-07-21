const selectContent = $(".select__content");
const selectCurrentInfoArrow = $(".select__current-info-arrow");
const selectContentItem = $(".select__content-item");

$(window).click((event) => {
	const { target } = event;

	if (Boolean($(target).attr("class")) && !$(target).attr("class").includes("select")) {
		selectContent.addClass("hidden");
		$(selectCurrentInfoArrow).removeClass("rotate");
	}
});

$(".select__current").on("click", () => {
	selectContent.toggleClass("hidden");
	$(selectCurrentInfoArrow).toggleClass("rotate");
});

$(selectContentItem).each((idx) => {
	$($(selectContentItem)[idx]).click((event) => {
		const { target } = event;

		$(selectContentItem).removeClass("active");

		const src = $(target).attr("src");
		const alt = $(target).attr("alt");

		$(".select__current-img").attr("src", src);
		$(".select__current-info-type").text(alt);

		selectContent.addClass("hidden");
		$(selectCurrentInfoArrow).removeClass("rotate");

		$($(selectContentItem)[idx]).addClass("active");
	});
});