<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { currentLanguage } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';
	import { galleryImages } from '$lib/data/gallery';

	const lang = $derived($currentLanguage);
	const t = $derived(translations[lang]);

	const index = $derived(Number($page.params.index));
	const imageUrl = $derived(galleryImages[index]);
	const isValidIndex = $derived(index >= 0 && index < galleryImages.length);

	function handleBack() {
		goto('/galerie');
	}
</script>

<svelte:head>
	<title>Galerie - Image {index + 1} - Fatima Cakes</title>
	<meta name="description" content="Image {index + 1} de la galerie Fatima Cakes" />
</svelte:head>

{#if isValidIndex && imageUrl}
	<!-- Modal plein écran qui couvre tout, y compris le navbar -->
	<div class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md">
		<!-- Image de fond avec l'image de la galerie en flou -->
		<div class="absolute inset-0 -z-10">
			<img 
				src={imageUrl}
				alt="Background galerie"
				class="w-full h-full object-cover"
				style="filter: brightness(0.3) blur(30px) contrast(0.7); min-height: 100vh; min-width: 100vw; transform: scale(1.2);"
			/>
			<div class="absolute inset-0 bg-black/60"></div>
		</div>

		<!-- Bouton Retour en haut à gauche -->
		<button
			onclick={handleBack}
			class="absolute top-6 left-6 z-50 flex items-center gap-2 px-6 py-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl hover:bg-white transition-all duration-300 text-gray-800 hover:text-[#C17A1F] font-semibold text-lg"
			aria-label="Retour à la galerie"
		>
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
			<span>{t.gallery.back || 'Retour'}</span>
		</button>

		<!-- Image principale centrée -->
		<div class="w-full h-full flex items-center justify-center p-4">
			<div class="relative" style="max-width: min(95vw, 1200px); max-height: 90vh;">
				<div class="bg-white/98 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-white/80 overflow-hidden">
					<img
						src={imageUrl}
						alt="Galerie pâtisserie {index + 1}"
						class="block w-auto h-auto max-w-full max-h-[85vh] object-contain mx-auto"
						loading="eager"
						draggable="false"
					/>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="min-h-screen flex items-center justify-center p-4">
		<div class="text-center">
			<h1 class="text-2xl font-bold text-gray-800 mb-4">Image non trouvée</h1>
			<button
				onclick={handleBack}
				class="px-6 py-3 bg-[#C17A1F] text-white rounded-lg hover:bg-[#D4A574] transition-colors"
			>
				Retour à la galerie
			</button>
		</div>
	</div>
{/if}

