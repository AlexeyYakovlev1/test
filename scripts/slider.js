import { workers, reviews } from "./data.js";

function run(list, points, items) {
	let count = 0;

	points.removeClass("active");

	$(points[count]).addClass("active");

	list.css("left", `-${count * items[count].getBoundingClientRect().width}px`)

	points.click((event) => {
		const { target } = event;

		points.removeClass("active");

		count = Number($(target).data("num"));

		$(target).addClass("active");

		points.removeClass("active");

		$(points[count]).addClass("active");

		list.css("left", `-${count * items[count].getBoundingClientRect().width}px`);
	})
}

const reviewsSliderList = document.querySelector(".reviews__slider-list");
const reviewsSliderPoints = document.querySelector(".reviews__slider-points");

workers.forEach(({ img, name }, idx) => {
	const workerHtml = `
        <li class="workers__slider-item">
            <header class="workeres__slider-item-header">
                <img class="workers__slider-item-img" src="${img}" alt="${name}">
                <span class="workers__slider-item-name">${name}</span>
            </header>
            <div class="workers__slider-item-content">
                <ul class="workers__slider-item-stars">
                    <li>
                        <img src="./public/assets/star.png" alt="star">
                    </li>
                    <li>
                        <img src="./public/assets/star.png" alt="star">
                    </li>
                    <li>
                        <img src="./public/assets/star.png" alt="star">
                    </li>
                    <li>
                        <img src="./public/assets/star.png" alt="star">
                    </li>
                    <li>
                        <img src="./public/assets/star.png" alt="star">
                    </li>
                </ul>
                <div class="workers__slider-item-arrows">
                    <a href="#">
                        <img
                            class="workers__slider-item-next"
                            src="./public/assets/arrow-right.png"
                            alt="arrow"
                        />
                    </a>
                </div>
            </div>
        </li>
    `;
	const pointHtml = `<li
            class="workers__slider-points-item slider__points-item ${idx === 0 ? 'active' : ""}"
            data-num="${idx}"
        ></li>`;

	$(".workers__slider-list").append(workerHtml);
	$(".workers__slider-points").append(pointHtml);
});

reviews.forEach(({ img, name, job, description }, idx) => {
	const reviewHtml = `
        <li class="reviews__slider-list-item">
        	<img class="reviews__slider-list-item-avatar-desktop" src="${img}" alt="${name}" />    
			<div class="reviews__slider-list-item-content">
				<header class="reviews__slider-list-item-header">
					<img class="reviews__slider-list-item-header-avatar" src="${img}" alt="${name}" />
					<div class="reviews__slider-list-item-header-info">
						<ul class="reviews__slider-list-item-header-info-stars">
							<li>
								<img src="./public/assets/star.png" alt="star">
							</li>
							<li>
								<img src="./public/assets/star.png" alt="star">
							</li>
							<li>
								<img src="./public/assets/star.png" alt="star">
							</li>
							<li>
								<img src="./public/assets/star.png" alt="star">
							</li>
							<li>
								<img src="./public/assets/star.png" alt="star">
							</li>
						</ul>
						<div class="reviews__slider-list-item-header-info-down">
							<span class="reviews__slider-list-item-header-info-name">${name}</span>
							<span class="reviews__slider-list-item-header-info-job">${job}</span>
						</div>
					</div>
				</header>
				<p class="reviews__slider-list-item-description">${description}</p>
            </div>
        </li>
    `;
	const pointHtml = `
        <li
            class="reviews__slider-points-item slider__points-item ${idx === 0 ? 'active' : ""}"
            data-num="${idx}"
        ></li>
    `;

	reviewsSliderList.innerHTML += reviewHtml;
	reviewsSliderPoints.innerHTML += pointHtml;
});

run($(".workers__slider-list"), $(".workers__slider-points-item"), $(".workers__slider-item"));
run($(".reviews__slider-list"), $(".reviews__slider-points-item"), $(".reviews__slider-list-item"));