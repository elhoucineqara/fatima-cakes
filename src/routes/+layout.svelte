<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { initScrollAnimations } from '$lib/utils/animations';
	import { currentLanguage } from '$lib/stores/language';
	import { browser } from '$app/environment';

	let { children } = $props();
	let cleanup: (() => void) | null = null;

	// Mettre à jour la direction du document selon la langue
	if (browser) {
		// Appliquer la langue au chargement initial
		onMount(() => {
			const lang = $currentLanguage;
			document.documentElement.lang = lang;
			document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
		});

		// Mettre à jour quand la langue change
		$effect(() => {
			const lang = $currentLanguage;
			document.documentElement.lang = lang;
			document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
		});
	}

	onMount(() => {
		cleanup = initScrollAnimations();
		return () => {
			if (cleanup) cleanup();
		};
	});

	// Réinitialiser les animations après chaque navigation (uniquement côté client)
	if (browser) {
		$effect(() => {
			// Écouter les changements de route
			const pathname = $page.url.pathname;
			
			// Nettoyer l'ancien observer
			if (cleanup) {
				cleanup();
			}
			// Réinitialiser les animations pour les nouveaux éléments
			setTimeout(() => {
				cleanup = initScrollAnimations();
			}, 50);
		});
	}
</script>

<svelte:head>
	<title>Fatima Cakes | Recettes de Gâteaux</title>
	<meta name="description" content="Découvrez mes recettes de gâteaux, cupcakes et pâtisseries faites maison" />
</svelte:head>

<div class="min-h-screen flex flex-col" style="background: transparent;">
	<Header />
	<main class="flex-grow pt-16" style="background: transparent;">
		{@render children()}
	</main>
	<Footer />
</div>
