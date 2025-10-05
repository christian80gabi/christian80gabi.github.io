export class ScrollHelper {
	async initScrollSpy() {
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
}

export default new ScrollHelper();


// export function initScrollSpy() {
// 	const navLinks = document.querySelectorAll("#navi a");
// 	const sections = document.querySelectorAll(".page");

// 	const observerOptions = {
// 		root: null,
// 		rootMargin: "0px",
// 		// threshold: 0.5 // Trigger when 50% of section is visible
// 	};

// 	const observer = new IntersectionObserver((entries) => {
// 		entries.forEach(entry => {
// 			if (entry.isIntersecting) {
// 				const id = entry.target.getAttribute("id");

// 				navLinks.forEach(link => {
// 					link.classList.toggle("current", link.getAttribute("href") === `#${id}`);
// 				});
// 			}
// 		});
// 	}, observerOptions);

// 	sections.forEach(section => {
// 		observer.observe(section);
// 	});
// };
