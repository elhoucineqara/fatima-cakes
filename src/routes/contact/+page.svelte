<script lang="ts">
	import { currentLanguage } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';
	import { contactInfo } from '$lib/data/contact';

	let formData = $state({
		nom: '',
		email: '',
		message: ''
	});

	let submitted = $state(false);
	let isSubmitting = $state(false);

	const lang = $derived($currentLanguage);
	const t = $derived(translations[lang]);

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		isSubmitting = true;

		// Simulation d'envoi (à remplacer par un vrai endpoint)
		await new Promise((resolve) => setTimeout(resolve, 1000));

		submitted = true;
		isSubmitting = false;
		formData = { nom: '', email: '', message: '' };

		setTimeout(() => {
			submitted = false;
		}, 5000);
	}
</script>

<svelte:head>
	<title>Contact - Fatima Cakes</title>
	<meta name="description" content="Contactez-moi pour toute question ou suggestion" />
</svelte:head>

<div class="container mx-auto px-4 py-6 relative">
	<!-- Image de fond fixe qui couvre tout -->
	<div class="fixed inset-0 -z-10">
		<img 
			src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920&h=1080&fit=crop&q=80" 
			alt="Background contact"
			class="w-full h-full object-cover"
			style="filter: brightness(0.9) contrast(0.9); min-height: 100vh; min-width: 100vw;"
		/>
		<div class="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
	</div>
	<div class="max-w-3xl mx-auto relative z-10">
		<div class="text-center mb-8">
			<h1 class="text-4xl md:text-5xl font-bold mb-4 text-[#8B4513]">
				{t.contact.title}
			</h1>
			<p class="text-center text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
				{t.contact.description}
			</p>
		</div>

		{#if submitted}
			<div
				class="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8"
				role="alert"
			>
				<p class="font-semibold">{t.contact.success}</p>
				<p class="text-sm mt-1">{t.contact.successMessage}</p>
			</div>
		{/if}

		<div class="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 mb-6">
			<form onsubmit={handleSubmit} class="space-y-6">
				<div>
					<label for="nom" class="block text-sm font-semibold text-gray-700 mb-2">
						{t.contact.name} *
					</label>
					<input
						type="text"
						id="nom"
						bind:value={formData.nom}
						required
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C17A1F] focus:border-transparent outline-none transition-all"
						placeholder={lang === 'ar' ? 'اسمك' : lang === 'en' ? 'Your name' : 'Votre nom'}
					/>
				</div>

				<div>
					<label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
						{t.contact.email} *
					</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C17A1F] focus:border-transparent outline-none transition-all"
						placeholder={lang === 'ar' ? 'بريدك الإلكتروني' : lang === 'en' ? 'your.email@example.com' : 'votre.email@example.com'}
					/>
				</div>

				<div>
					<label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
						{t.contact.message} *
					</label>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						rows="6"
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C17A1F] focus:border-transparent outline-none transition-all resize-none"
						placeholder={lang === 'ar' ? 'رسالتك...' : lang === 'en' ? 'Your message...' : 'Votre message...'}
					></textarea>
				</div>

				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full bg-[#C17A1F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#8B4513] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? t.contact.sending : t.contact.send}
				</button>
			</form>
		</div>

		<!-- Informations supplémentaires -->
		<div class="mt-8 grid md:grid-cols-2 gap-6">
			<div class="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6">
				<h3 class="text-xl font-bold mb-3 text-[#8B4513] flex items-center gap-3">
					<svg class="w-6 h-6" fill="#8B4513" viewBox="0 0 24 24">
						<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
					</svg>
					<span>Email</span>
				</h3>
				<p class="text-gray-700 text-base leading-relaxed mb-4">
					{t.contact.emailInfo}
				</p>
				<a 
					href={`mailto:${contactInfo.email}`}
					class="flex items-center gap-2 text-[#C17A1F] font-semibold hover:text-[#8B4513] transition-colors group"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
					</svg>
					<span class="group-hover:underline">{contactInfo.email}</span>
				</a>
			</div>

			<div class="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6">
				<h3 class="text-xl font-bold mb-3 text-[#8B4513] flex items-center gap-3">
					<svg class="w-6 h-6" fill="#8B4513" viewBox="0 0 24 24">
						<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
						<path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
					</svg>
					<span>
						{lang === 'ar' ? 'وسائل التواصل الاجتماعي' : lang === 'en' ? 'Social Media' : 'Réseaux Sociaux'}
					</span>
				</h3>
				<p class="text-gray-700 text-base leading-relaxed mb-4">
					{t.contact.socialInfo}
				</p>
				<div class="flex flex-wrap gap-3">
					{#each contactInfo.socialMedia as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 px-4 py-2 bg-white/90 rounded-lg hover:bg-white transition-all shadow-md hover:shadow-lg font-medium group"
							style="color: {social.color};"
						>
							<!-- Facebook Logo -->
							{#if social.icon === 'facebook'}
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
								</svg>
							<!-- Instagram Logo -->
							{:else if social.icon === 'instagram'}
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
								</svg>
							<!-- YouTube Logo -->
							{:else if social.icon === 'youtube'}
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
								</svg>
							<!-- Pinterest Logo -->
							{:else if social.icon === 'pinterest'}
								<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.619 11.174-.105-.949-.2-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.487.535 6.624 0 12-5.372 12-12C24 5.372 18.627.001 12.001.001z"/>
								</svg>
							{/if}
							<span class="group-hover:underline">{social.platform}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

