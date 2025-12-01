let currentObserver: IntersectionObserver | null = null;

export function initScrollAnimations() {
	// Nettoyer l'observer précédent s'il existe
	if (currentObserver) {
		const previousElements = document.querySelectorAll(
			'.fade-in-up, .fade-in, .slide-in-right, .slide-in-left, .zoom-in, .bounce-in'
		);
		previousElements.forEach((el) => currentObserver!.unobserve(el));
		currentObserver.disconnect();
	}

	const observerOptions = {
		threshold: 0.01,
		rootMargin: '100px 0px 100px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, observerOptions);

	currentObserver = observer;

	// Réinitialiser les classes d'animation pour les nouveaux éléments
	const animatedElements = document.querySelectorAll(
		'.fade-in-up, .fade-in, .slide-in-right, .slide-in-left, .zoom-in, .bounce-in'
	);

	animatedElements.forEach((el) => {
		// Retirer la classe visible pour réinitialiser l'animation
		el.classList.remove('visible');
		
		// Vérifier si l'élément est déjà dans le viewport (avec une marge plus large)
		const rect = el.getBoundingClientRect();
		const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
		const isInViewport = rect.top < viewportHeight + 100 && rect.bottom > -100;
		
		if (isInViewport) {
			// Si l'élément est déjà visible, l'animer immédiatement
			// Utiliser requestAnimationFrame pour s'assurer que le DOM est prêt
			requestAnimationFrame(() => {
				el.classList.add('visible');
			});
		}
		
		observer.observe(el);
	});

	return () => {
		if (observer) {
			animatedElements.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		}
		if (currentObserver === observer) {
			currentObserver = null;
		}
	};
}

