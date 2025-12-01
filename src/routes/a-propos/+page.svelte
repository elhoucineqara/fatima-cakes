<script lang="ts">
	import { goto } from '$app/navigation';
	import { currentLanguage } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';

	const lang = $derived($currentLanguage);
	const t = $derived(translations[lang]);

	function handleNavigation(href: string) {
		goto(href);
	}
</script>

<svelte:head>
	<title>{t.about.title} - Fatima Cakes</title>
	<meta name="description" content={t.about.text1} />
</svelte:head>

<div class="container mx-auto px-4 py-6 relative">
	<!-- Image de fond fixe qui couvre tout -->
	<div class="fixed inset-0 -z-10">
		<img 
			src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=1920&h=1080&fit=crop&q=80" 
			alt="Background à propos"
			class="w-full h-full object-cover"
			style="filter: brightness(0.9) contrast(0.9); min-height: 100vh; min-width: 100vw;"
		/>
		<div class="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
	</div>
	<div class="max-w-3xl mx-auto relative z-10">
		<div class="text-center mb-8">
			<h1 class="text-4xl md:text-5xl font-bold mb-4 text-[#8B4513]">
				{t.about.title}
			</h1>
		</div>

		<div class="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 mb-6">
			<div class="text-center mb-6">
				<div class="flex justify-center mb-4">
					<svg class="w-16 h-16 text-[#8B4513]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
				</div>
				<h2 class="text-2xl md:text-3xl font-bold mb-4 text-[#8B4513]">
					{t.about.welcome}
				</h2>
			</div>

			<div class="space-y-4">
				<p class="text-gray-700 text-base md:text-lg leading-relaxed">
					{t.about.text1}
				</p>

				<p class="text-gray-700 text-base md:text-lg leading-relaxed">
					{t.about.text2}
				</p>

				<div class="mt-8 pt-6 border-t border-gray-200">
					<h3 class="text-xl md:text-2xl font-bold mb-3 text-[#8B4513]">{t.about.philosophy}</h3>
					<p class="text-gray-700 text-base md:text-lg leading-relaxed">
						{t.about.philosophyText}
					</p>
				</div>

				<div class="mt-8 pt-6 border-t border-gray-200">
					<h3 class="text-xl md:text-2xl font-bold mb-4 text-[#8B4513]">
						{t.about.specialties}
					</h3>
					<ul class="space-y-3 text-base md:text-lg text-gray-700">
						<li class="flex items-center gap-3">
							<svg class="w-5 h-5 text-[#C17A1F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
							</svg>
							<span>{t.about.specialty1}</span>
						</li>
						<li class="flex items-center gap-3">
							<svg class="w-5 h-5 text-[#C17A1F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
							</svg>
							<span>{t.about.specialty2}</span>
						</li>
						<li class="flex items-center gap-3">
							<svg class="w-5 h-5 text-[#C17A1F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<span>{t.about.specialty3}</span>
						</li>
						<li class="flex items-center gap-3">
							<svg class="w-5 h-5 text-[#C17A1F] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2v7m0 0v5a2 2 0 11-2 2v-5m2 0H9m3 0h3" />
							</svg>
							<span>{t.about.specialty4}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 text-center">
			<h3 class="text-xl md:text-2xl font-bold mb-3 text-[#8B4513]">
				{t.about.stayInTouch}
			</h3>
			<p class="text-gray-700 mb-6 text-base md:text-lg max-w-2xl mx-auto">
				{t.about.contactText}
			</p>
			<a
				href="/contact"
				onclick={(e) => {
					e.preventDefault();
					handleNavigation('/contact');
				}}
				class="inline-block bg-[#C17A1F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B4513] transition-colors"
			>
				{t.nav.contact}
			</a>
		</div>
	</div>
</div>

