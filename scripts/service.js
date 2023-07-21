const servicesCardsAudioFooterPriceCounterValue = document.querySelector(".services__cards-audio-footer-price-counter-value");

const priceForOneMinute = 49;

let countMinutes = 50;
let resultPrice = countMinutes * priceForOneMinute;

const renderRes = () => {
	resultPrice = countMinutes * priceForOneMinute;

	servicesCardsAudioFooterPriceCounterValue.value = countMinutes;

	$(".services__cards-audio-footer-price-result-value").text(resultPrice);
}

renderRes();

servicesCardsAudioFooterPriceCounterValue.addEventListener("input", () => {
	countMinutes = servicesCardsAudioFooterPriceCounterValue.value;
});

$(".services__cards-audio-footer-price-counter-minus").click(() => {
	countMinutes--;

	if (countMinutes <= 0) countMinutes = 0;

	renderRes();
});

$(".services__cards-audio-footer-price-counter-plus").click(() => {
	countMinutes++;

	if (countMinutes <= 0) countMinutes = 0;

	renderRes();
});

$(".services__cards-audio-footer-price-result-min").click(() => {
	countMinutes = 1;
	renderRes();
});