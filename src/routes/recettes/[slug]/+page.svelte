<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { currentLanguage } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';
	import { recipeTranslations, getDifficultyLabel } from '$lib/i18n/recipeTranslations';

	let { data }: { data: PageData } = $props();
	const { recette } = data;

	const lang = $derived($currentLanguage);
	const t = $derived(translations[lang]);

	const recipeTranslation = $derived(recipeTranslations[recette.slug]?.[lang] || null);

	function handleNavigation(href: string) {
		goto(href);
	}

	function getDifficulteColor(difficulte: string): string {
		const colors: Record<string, string> = {
			facile: 'bg-green-100 text-green-800',
			moyen: 'bg-yellow-100 text-yellow-800',
			difficile: 'bg-red-100 text-red-800'
		};
		return colors[difficulte] || 'bg-gray-100 text-gray-800';
	}

	function getCategorieLabel(cat: string): string {
		const labels: Record<string, string> = {
			gateau: t.recipes.cakes,
			cupcake: t.recipes.cupcakes,
			biscuit: t.recipes.biscuits,
			entremet: t.recipes.desserts
		};
		return labels[cat] || cat;
	}
</script>

<svelte:head>
	<title>{recette.titre} - Fatima Cakes</title>
	<meta name="description" content={recette.description} />
</svelte:head>

<div class="container mx-auto px-4 py-6 relative">
	<!-- Image de fond fixe qui couvre tout -->
	<div class="fixed inset-0 -z-10">
		<img 
			src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=1080&fit=crop&q=80" 
			alt="Background détail recette"
			class="w-full h-full object-cover"
			style="filter: brightness(0.9) contrast(0.9); min-height: 100vh; min-width: 100vw;"
		/>
		<div class="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
	</div>
	<!-- Breadcrumb -->
	<nav class="mb-8">
			<a 
				href="/recettes" 
				onclick={(e) => {
					e.preventDefault();
					handleNavigation('/recettes');
				}}
				class="inline-flex items-center gap-2 text-[#C17A1F] hover:text-[#8B4513] font-semibold transition-colors"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
				<span>{t.recipes.backToRecipes}</span>
			</a>
	</nav>

	<div class="max-w-4xl mx-auto relative z-10">
		<!-- En-tête -->
		<div class="mb-8">
			<div class="flex flex-wrap gap-3 mb-4">
				<span class="px-4 py-2 rounded-lg bg-[#FFF8E7] text-[#8B4513] font-semibold text-sm border border-[#D4A574]/30">
					{getCategorieLabel(recette.categorie)}
				</span>
			</div>
			<h1 class="text-4xl md:text-5xl font-bold mb-4 text-[#8B4513]">
				{recipeTranslation?.titre || recette.titre}
			</h1>
			<p class="text-xl text-gray-700 mb-6 leading-relaxed">
				{recipeTranslation?.description || recette.description}
			</p>
			<div class="flex flex-wrap gap-6 text-gray-700">
				<span class="flex items-center gap-2">
					<svg class="w-5 h-5 text-[#C17A1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<strong>{recipeTranslation?.temps || recette.temps}</strong>
				</span>
				<span class="flex items-center gap-2">
					<svg class="w-5 h-5 text-[#C17A1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					<strong>{recipeTranslation?.portions || recette.portions}</strong>
				</span>
			</div>
		</div>

		<!-- Image -->
		<div class="mb-12 rounded-lg overflow-hidden shadow-xl">
			<img
				src={recette.image}
				alt={recette.titre}
				class="w-full h-96 object-cover"
				loading="lazy"
			/>
		</div>

		<div class="grid md:grid-cols-2 gap-12">
			<!-- Ingrédients -->
			<div>
				<h2 class="text-3xl font-bold mb-6 text-[#8B4513] flex items-center gap-3">
					<svg class="w-8 h-8 text-[#C17A1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
					</svg>
					<span>{t.recipes.ingredients}</span>
				</h2>
				<ul class="space-y-3">
					{#each (recipeTranslation?.ingredients || recette.ingredients) as ingredient}
						<li class="flex items-start gap-3">
							<span class="text-primary-600 mt-1">•</span>
							<span class="text-gray-700">{ingredient}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Préparation -->
			<div>
				<h2 class="text-3xl font-bold mb-6 text-[#8B4513] flex items-center gap-3">
					<svg class="w-8 h-8 text-[#C17A1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
					<span>{t.recipes.preparation}</span>
				</h2>
				<ol class="space-y-4">
					{#each (recipeTranslation?.preparation || recette.preparation) as etape, index}
						<li class="flex gap-4">
							<span
								class="flex-shrink-0 w-8 h-8 bg-[#C17A1F] text-white rounded-lg flex items-center justify-center font-bold shadow-md"
							>
								{index + 1}
							</span>
							<span class="text-gray-700 pt-1 leading-relaxed">{etape}</span>
						</li>
					{/each}
				</ol>
			</div>
		</div>

		<!-- Bouton Contact -->
		<div class="mt-12 p-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 text-center">
			<h3 class="text-2xl font-bold mb-4 text-[#8B4513]">{t.recipes.haveQuestions}</h3>
			<p class="text-gray-700 mb-6">
				{t.recipes.contactText}
			</p>
			<a
				href="/contact"
				onclick={(e) => {
					e.preventDefault();
					handleNavigation('/contact');
				}}
				class="inline-flex items-center gap-2 bg-[#C17A1F] hover:bg-[#8B4513] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
			>
				<span>{t.nav.contact}</span>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</div>
</div>

