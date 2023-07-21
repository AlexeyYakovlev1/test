const arrangedHeaderListItem = $(".arranged__header-list-item");

arrangedHeaderListItem.on("click", (event) => {
	const { target } = event;

	arrangedHeaderListItem.removeClass("active");

	$(target).addClass("active");

	const num = $(target).data("num");

	$(".arranged__content-item").addClass("hidden");
	$(`.arranged__content-item[data-content="${num}`).removeClass("hidden");
});