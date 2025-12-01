<script lang="ts">
	import { recettes } from '$lib/data/recettes';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { currentLanguage } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';
	import { recipeTranslations, getDifficultyLabel } from '$lib/i18n/recipeTranslations';
	import { initScrollAnimations } from '$lib/utils/animations';
	import { browser } from '$app/environment';

	let selectedCategorie = $state<string>('tous');
	const categories = ['tous', 'gateau', 'cupcake', 'biscuit', 'entremet'];

	const lang = $derived($currentLanguage);
	const t = $derived(translations[lang]);

	function getRecipeTranslation(slug: string) {
		return recipeTranslations[slug]?.[lang] || null;
	}

	const recettesFiltrees = $derived(
		selectedCategorie === 'tous'
			? recettes
			: recettes.filter((r) => r.categorie === selectedCategorie)
	);

	function getCategorieLabel(cat: string): string {
		const labels: Record<string, string> = {
			tous: t.recipes.all,
			gateau: t.recipes.cakes,
			cupcake: t.recipes.cupcakes,
			biscuit: t.recipes.biscuits,
			entremet: t.recipes.desserts
		};
		return labels[cat] || cat;
	}

	function handleNavigation(href: string) {
		goto(href);
	}

	// Réinitialiser les animations quand la catégorie change
	if (browser) {
		$effect(() => {
			const cat = selectedCategorie;
			// Réinitialiser les animations après un court délai pour permettre au DOM de se mettre à jour
			setTimeout(() => {
				initScrollAnimations();
				// Forcer l'affichage des éléments déjà visibles
				const animatedElements = document.querySelectorAll('.slide-in-right');
				animatedElements.forEach((el) => {
					const rect = el.getBoundingClientRect();
					const isInViewport = rect.top < window.innerHeight + 100 && rect.bottom > -100;
					if (isInViewport) {
						el.classList.add('visible');
					}
				});
			}, 150);
		});
	}
</script>

<svelte:head>
	<title>Recettes - Fatima Cakes</title>
	<meta name="description" content="Découvrez toutes mes recettes de gâteaux, cupcakes et pâtisseries" />
</svelte:head>

<div class="container mx-auto px-4 py-6 min-h-screen relative">
	<!-- Image de fond fixe qui couvre tout -->
	<div class="fixed inset-0 -z-10">
		<img 
			src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1920&h=1080&fit=crop&q=80" 
			alt="Background recettes"
			class="w-full h-full object-cover"
			style="filter: brightness(0.92) contrast(0.88); min-height: 100vh; min-width: 100vw;"
		/>
		<div class="absolute inset-0 bg-white/65 backdrop-blur-md"></div>
	</div>
	<div class="max-w-6xl mx-auto relative z-10">
		<div class="text-center mb-8">
			<h1 class="text-4xl md:text-5xl font-bold mb-4 text-[#8B4513]">
				{t.recipes.title}
			</h1>
		</div>
		<p class="text-center text-gray-700 mb-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
			{t.recipes.description}
		</p>

		<!-- Filtres par catégorie -->
		<div class="flex flex-wrap justify-center gap-3 mb-10">
		{#each categories as cat}
			<button
				onclick={() => (selectedCategorie = cat)}
				class="px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 {selectedCategorie ===
				cat
					? 'bg-[#C17A1F] text-white shadow-lg'
					: 'bg-white text-[#8B4513] border-2 border-[#D4A574] hover:bg-[#FFF8E7] hover:border-[#C17A1F] shadow-sm'}"
			>
				{getCategorieLabel(cat)}
			</button>
		{/each}
	</div>

	<!-- Liste des recettes -->
	{#if recettesFiltrees.length > 0}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
			{#each recettesFiltrees as recette, index}
				<a
					href="/recettes/{recette.slug}"
					onclick={(e) => {
						e.preventDefault();
						handleNavigation(`/recettes/${recette.slug}`);
					}}
					class="group bg-white/95 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-xl border border-gray-200/50 transition-all duration-300 hover:-translate-y-1"
				>
					<div class="relative h-64 bg-gray-200 overflow-hidden">
						<img
							src={recette.image}
							alt={recette.titre}
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							loading="lazy"
							onerror={(e) => {
								const img = e.target as HTMLImageElement;
								img.src = 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop';
							}}
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						<div
							class="absolute top-3 left-3 bg-[#C17A1F] text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md"
						>
							{getCategorieLabel(recette.categorie)}
						</div>
					</div>
					<div class="p-5">
						<h3 class="text-xl font-bold mb-2 text-[#8B4513] group-hover:text-[#C17A1F] transition-colors duration-300">
							{getRecipeTranslation(recette.slug)?.titre || recette.titre}
						</h3>
						<p class="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
							{getRecipeTranslation(recette.slug)?.description || recette.description}
						</p>
						<div class="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
							<span class="flex items-center gap-1.5">
								<svg class="w-4 h-4 text-[#C17A1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								{getRecipeTranslation(recette.slug)?.temps || recette.temps}
							</span>
							<span class="flex items-center gap-1.5">
								<svg class="w-4 h-4 text-[#C17A1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
								{getRecipeTranslation(recette.slug)?.portions || recette.portions}
							</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	{:else}
		<div class="text-center py-12">
			<p class="text-gray-600 text-lg">{t.recipes.noRecipes}</p>
		</div>
	{/if}
	</div>
</div>

