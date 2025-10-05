export function initScrollSpy() {
	const navLinks = document.querySelectorAll("#navi a");
	const sections = document.querySelectorAll(".page");

	const observerOptions = {
		root: null,
		rootMargin: "0px",
		// threshold: 0.5 // Trigger when 50% of section is visible
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const id = entry.target.getAttribute("id");

				navLinks.forEach(link => {
					link.classList.toggle("current", link.getAttribute("href") === `#${id}`);
				});
			}
		});
	}, observerOptions);

	sections.forEach(section => {
		observer.observe(section);
	});
};

export function textRotation() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	document.body.appendChild(css);
};
