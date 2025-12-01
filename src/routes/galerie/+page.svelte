<script lang="ts">
	import { goto } from '$app/navigation';
	import { currentLanguage } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';
	import { galleryImages } from '$lib/data/gallery';

	const lang = $derived($currentLanguage);
	const t = $derived(translations[lang]);

	function handleImageClick(index: number) {
		goto(`/galerie/${index}`);
	}
</script>

<svelte:head>
	<title>Galerie - Fatima Cakes</title>
	<meta name="description" content="Découvrez mes créations de gâteaux et pâtisseries en images" />
</svelte:head>

<div class="container mx-auto px-4 py-6 relative">
	<!-- Image de fond fixe qui couvre tout -->
	<div class="fixed inset-0 -z-10">
		<img 
			src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=1920&h=1080&fit=crop&q=80" 
			alt="Background galerie"
			class="w-full h-full object-cover"
			style="filter: brightness(0.88) contrast(0.85); min-height: 100vh; min-width: 100vw;"
		/>
		<div class="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
	</div>
	<div class="max-w-6xl mx-auto relative z-10">
		<div class="text-center mb-8">
			<h1 class="text-4xl md:text-5xl font-bold mb-4 text-[#8B4513]">
				{t.gallery.title}
			</h1>
		</div>
		<p class="text-center text-gray-700 mb-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
			{t.gallery.description}
		</p>

		<!-- Grille de photos -->
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each galleryImages as imageUrl, index}
				<a
					href="/galerie/{index}"
					onclick={(e) => {
						e.preventDefault();
						handleImageClick(index);
					}}
					class="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-md hover:shadow-xl bg-gray-200 relative group"
				>
					<img
						src={imageUrl}
						alt="Galerie pâtisserie {index + 1}"
						class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
						loading="lazy"
						onerror={(e) => {
							const img = e.target as HTMLImageElement;
							img.style.display = 'none';
							const parent = img.parentElement;
							if (parent) {
								parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 text-sm">Image non disponible</div>';
							}
						}}
					/>
				</a>
			{/each}
		</div>
	</div>
</div>

