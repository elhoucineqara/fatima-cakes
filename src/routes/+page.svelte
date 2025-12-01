<script lang="ts">
	import { goto } from '$app/navigation';
	import { recettes } from '$lib/data/recettes';
	import { currentLanguage } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';
	import { recipeTranslations, getDifficultyLabel } from '$lib/i18n/recipeTranslations';

	const lang = $derived($currentLanguage);
	const t = $derived(translations[lang]);

	function getRecipeTranslation(slug: string) {
		return recipeTranslations[slug]?.[lang] || null;
	}

	function handleNavigation(href: string) {
		goto(href);
	}
</script>

<svelte:head>
	<title>Fatima Cakes | Accueil</title>
	<meta name="description" content="Découvrez mes recettes de gâteaux, cupcakes et pâtisseries faites maison" />
</svelte:head>

<!-- Hero Section avec image de fond -->
<section class="relative text-white py-12 md:py-16 overflow-hidden min-h-screen flex items-center justify-center">
	<!-- Image de fond fixe qui couvre tout -->
	<div class="fixed inset-0 -z-10">
		<img 
			src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&h=1080&fit=crop&q=80" 
			alt="Background pâtisserie marocaine"
			class="w-full h-full object-cover"
			style="filter: brightness(0.7) contrast(1.1); min-height: 100vh; min-width: 100vw;"
		/>
		<!-- Overlay pour améliorer la lisibilité -->
		<div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
	</div>
	
	<!-- Éléments décoratifs flottants subtils -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-20 left-10 w-32 h-32 bg-[#D4A574] rounded-full opacity-10 blur-3xl float-animation"></div>
		<div class="absolute bottom-20 right-10 w-40 h-40 bg-[#C17A1F] rounded-full opacity-8 blur-3xl float-animation" style="animation-delay: 2s;"></div>
	</div>
	
	<div class="container mx-auto px-4 relative z-10 w-full">
		<div class="max-w-3xl mx-auto text-center fade-in-up">
			<h1 class="text-5xl md:text-7xl mb-6 drop-shadow-2xl brand-title flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3" dir="ltr">
				<span class="brand-title-main text-6xl md:text-8xl text-white drop-shadow-lg">Fatima</span>
				<span class="brand-title-sub text-4xl md:text-6xl text-white/95 drop-shadow-lg">Cakes</span>
			</h1>
			<p class="text-xl md:text-2xl mb-10 font-semibold px-6 py-4 rounded-xl backdrop-blur-md" 
				style="color: #FFFFFF; text-shadow: 2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5); background: linear-gradient(135deg, rgba(193,122,31,0.3) 0%, rgba(212,165,116,0.2) 100%); border: 1px solid rgba(255,255,255,0.2);">
				{t.home.subtitle}
			</p>
			<div class="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up" style="animation-delay: 0.3s;">
				<a
					href="/recettes"
					onclick={(e) => {
						e.preventDefault();
						handleNavigation('/recettes');
					}}
					class="group inline-flex items-center gap-2 bg-white hover:bg-[#FFF8E7] text-[#8B4513] hover:text-[#C17A1F] px-10 py-5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-2 border-[#D4A574] text-lg"
				>
					<span>{t.home.viewRecipes}</span>
					<svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</a>
				
			<a
				href="/contact"
				onclick={(e) => {
					e.preventDefault();
					handleNavigation('/contact');
				}}
				class="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#C17A1F] to-[#D4A574] hover:from-[#8B4513] hover:to-[#C17A1F] text-white px-10 py-5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
			>
				<span>{t.home.contactMe}</span>
				<svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
			</div>
		</div>
	</div>
</section>

<!-- Recettes Populaires -->
<section class="py-12 md:py-16 relative">
	<!-- Image de fond fixe qui couvre tout -->
	<div class="fixed inset-0 -z-10">
		<img 
			src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=1080&fit=crop&q=80" 
			alt="Background gâteaux"
			class="w-full h-full object-cover"
			style="filter: brightness(0.95) contrast(0.9); min-height: 100vh; min-width: 100vw;"
		/>
		<div class="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
	</div>
	<div class="container mx-auto px-4 relative z-10">
		<h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-[#8B4513]">{t.home.popularRecipes}</h2>
		<p class="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-base md:text-lg">
			{t.home.popularRecipesDesc}
		</p>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each recettes.slice(0, 4) as recette, index}
				<a
					href="/recettes/{recette.slug}"
					onclick={(e) => {
						e.preventDefault();
						handleNavigation(`/recettes/${recette.slug}`);
					}}
					class="group bg-white/95 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-xl border border-gray-200/50 transition-all duration-300 hover:-translate-y-1"
				>
					<div class="relative h-48 bg-gray-200 overflow-hidden">
						<img
							src={recette.image}
							alt={recette.titre}
							class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</div>
					<div class="p-5">
						<h3 class="text-lg font-bold mb-2 text-[#8B4513] group-hover:text-[#C17A1F] transition-colors duration-300">
							{getRecipeTranslation(recette.slug)?.titre || recette.titre}
						</h3>
						<p class="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
							{getRecipeTranslation(recette.slug)?.description || recette.description}
						</p>
						<div class="flex items-center justify-between text-sm text-gray-500 font-medium pt-4 border-t border-gray-100">
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
		<div class="text-center mt-12">
			<a
				href="/recettes"
				onclick={(e) => {
					e.preventDefault();
					handleNavigation('/recettes');
				}}
				class="group inline-flex items-center gap-2 bg-[#C17A1F] hover:bg-[#8B4513] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base"
			>
				<span>{t.home.viewAllRecipes}</span>
				<svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- À Propos Section -->
<section class="py-20 relative overflow-hidden">
	<!-- Image de fond fixe qui couvre tout -->
	<div class="fixed inset-0 -z-10">
		<img 
			src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920&h=1080&fit=crop&q=80" 
			alt="Background pâtisserie"
			class="w-full h-full object-cover"
			style="filter: brightness(0.9) contrast(0.95); min-height: 100vh; min-width: 100vw;"
		/>
		<div class="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
	</div>
	<div class="container mx-auto px-4 relative z-10">
		<div class="max-w-3xl mx-auto text-center fade-in-up">
			<h2 class="text-4xl md:text-5xl font-bold mb-6 text-[#8B4513]">{t.home.aboutTitle}</h2>
			<p class="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
				{t.home.aboutText}
			</p>
			<a
				href="/a-propos"
				onclick={(e) => {
					e.preventDefault();
					handleNavigation('/a-propos');
				}}
				class="group inline-flex items-center gap-2 text-[#C17A1F] hover:text-[#8B4513] font-semibold transition-colors text-lg"
			>
				<span>{t.home.learnMore}</span>
				<svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Galerie Preview -->
<section class="py-12 md:py-16 relative">
	<!-- Image de fond fixe qui couvre tout -->
	<div class="fixed inset-0 -z-10">
		<img 
			src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1920&h=1080&fit=crop&q=80" 
			alt="Background galerie pâtisserie"
			class="w-full h-full object-cover"
			style="filter: brightness(0.95) contrast(0.9); min-height: 100vh; min-width: 100vw;"
		/>
		<div class="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
	</div>
	<div class="container mx-auto px-4 relative z-10">
		<h2 class="text-4xl md:text-5xl font-bold text-center mb-4 text-[#8B4513]">{t.home.galleryTitle}</h2>
		<p class="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-base md:text-lg">
			{t.home.galleryDesc}
		</p>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
			{#each [
				'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
				'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop',
				'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop',
				'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop',
				'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop',
				'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=400&fit=crop',
				'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=400&fit=crop',
				'https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=400&fit=crop'
			] as imageUrl, i}
				<div 
					class="aspect-square rounded-2xl overflow-hidden shadow-lg hover-lift cursor-pointer zoom-in group"
					style="transition-delay: {i * 0.1}s;"
				>
					<img
						src={imageUrl}
						alt="Galerie pâtisserie {i + 1}"
						class="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</div>
			{/each}
		</div>
		<div class="text-center mt-12 slide-in-right" style="transition-delay: 0.9s;">
			<a
				href="/galerie"
				onclick={(e) => {
					e.preventDefault();
					handleNavigation('/galerie');
				}}
				class="group inline-flex items-center gap-2 text-[#C17A1F] hover:text-[#8B4513] font-semibold transition-colors text-lg"
			>
				<span>{t.home.viewGallery}</span>
				<svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</div>
</section>
