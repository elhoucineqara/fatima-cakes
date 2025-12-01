<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { currentLanguage } from '$lib/stores/language';
	import { translations } from '$lib/i18n/translations';
	import { browser } from '$app/environment';

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let languageMenuOpen = $state(false);
	let mobileMenuRef: HTMLDivElement | null = $state(null);
	let mobileToggleRef: HTMLButtonElement | null = $state(null);

	const languages = [
		{ code: 'fr' as const, name: 'Français', flag: 'https://flagcdn.com/w320/fr.png' },
		{ code: 'en' as const, name: 'English', flag: 'https://flagcdn.com/w320/gb.png' },
		{ code: 'ar' as const, name: 'العربية', flag: 'https://flagcdn.com/w320/ma.png' }
	];

	const lang = $derived($currentLanguage);
	const t = $derived(translations[lang]);
	const navItems = $derived([
		{ href: '/', label: t.nav.home },
		{ href: '/recettes', label: t.nav.recipes },
		{ href: '/galerie', label: t.nav.gallery },
		{ href: '/a-propos', label: t.nav.about },
		{ href: '/contact', label: t.nav.contact }
	]);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll);

		// Fermer le menu mobile quand on clique en dehors
		const handleClickOutside = (event: MouseEvent) => {
			if (mobileMenuOpen && mobileMenuRef && mobileToggleRef) {
				const target = event.target as Node;
				if (!mobileMenuRef.contains(target) && !mobileToggleRef.contains(target)) {
					mobileMenuOpen = false;
				}
			}
		};

		if (browser) {
			document.addEventListener('click', handleClickOutside);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (browser) {
				document.removeEventListener('click', handleClickOutside);
			}
		};
	});

	function changeLanguage(langCode: typeof languages[number]['code']) {
		currentLanguage.set(langCode);
		languageMenuOpen = false;
	}

	function handleNavigation(href: string) {
		goto(href);
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-700 {scrolled
		? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-[#D4A574]/20'
		: 'bg-white/80 backdrop-blur-md border-b border-[#D4A574]/10'}"
>
	<nav class="container mx-auto px-4 py-2 relative">
		<!-- Barre principale toujours visible -->
		<div class="flex items-center justify-between">
			<!-- Desktop: Logo et titre à gauche -->
			<a 
				href="/" 
				onclick={(e) => {
					e.preventDefault();
					handleNavigation('/');
				}}
				class="hidden md:flex group items-center gap-2 text-xl font-bold transition-all duration-500 hover:scale-105"
			>
				<div class="relative">
					<img 
						src="/logo-compact.svg" 
						alt="Logo Fatima Cakes" 
						class="h-8 w-8 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 drop-shadow-lg group-hover:drop-shadow-2xl" 
					/>
					<div class="absolute inset-0 bg-[#D4A574]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				</div>
				<span class="brand-title text-xl relative" dir="ltr">
					<span class="brand-title-main transition-all duration-300 group-hover:drop-shadow-lg">Fatima</span>
					<span class="brand-title-sub ml-1.5 transition-all duration-300 group-hover:translate-x-1">Cakes</span>
					<span class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C17A1F] to-[#D4A574] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
				</span>
			</a>

			<!-- Mobile: Ordre spécifique - Toggle → Languages → Fatima Cakes → Logo -->
			<div class="md:hidden flex items-center gap-2 w-full">
				<!-- 1. Toggle Button -->
				<button
					bind:this={mobileToggleRef}
					class="text-gray-700 hover:text-[#C17A1F] transition-all duration-300 p-2 rounded-lg hover:bg-[#FFF8E7]/30"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label="Toggle menu"
					aria-expanded={mobileMenuOpen}
				>
					<svg
						class="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						{#if mobileMenuOpen}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						{:else}
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{/if}
					</svg>
				</button>
				
				<!-- 2. Sélecteur de langue -->
				<div class="relative">
					<button
						onclick={() => (languageMenuOpen = !languageMenuOpen)}
						class="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-[#FFF8E7]/30 transition-colors text-sm font-medium text-gray-700"
						aria-label="Change language"
					>
						<img 
							src={languages.find(l => l.code === lang)?.flag} 
							alt={languages.find(l => l.code === lang)?.name}
							class="w-5 h-4 object-cover rounded"
						/>
						<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if languageMenuOpen}
						<div class="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[120px]">
							{#each languages as language}
								<button
									onclick={() => changeLanguage(language.code)}
									class="w-full px-3 py-2 text-left hover:bg-[#FFF8E7]/50 transition-colors flex items-center gap-2 text-sm {lang === language.code ? 'bg-[#FFF8E7]/30 font-semibold' : ''}"
								>
									<img 
										src={language.flag} 
										alt={language.name}
										class="w-5 h-4 object-cover rounded"
									/>
									<span>{language.name}</span>
								</button>
							{/each}
						</div>
					{/if}
				</div>

				<!-- 3. Fatima Cakes (texte) -->
				<span class="brand-title text-lg relative flex-1 text-center" dir="ltr">
					<span class="brand-title-main transition-all duration-300">Fatima</span>
					<span class="brand-title-sub ml-1.5 transition-all duration-300">Cakes</span>
				</span>

				<!-- 4. Logo -->
				<a 
					href="/" 
					onclick={(e) => {
						e.preventDefault();
						handleNavigation('/');
					}}
					class="group flex items-center"
				>
					<div class="relative">
						<img 
							src="/logo-compact.svg" 
							alt="Logo Fatima Cakes" 
							class="h-8 w-8 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 drop-shadow-lg" 
						/>
					</div>
				</a>
			</div>

			<!-- Desktop Menu -->
			<div class="hidden md:flex items-center space-x-2">
				{#each navItems as item, index}
					<a
						href={item.href}
						onclick={(e) => {
							e.preventDefault();
							handleNavigation(item.href);
						}}
						class="group relative text-gray-700 hover:text-[#C17A1F] font-medium transition-all duration-500 px-4 py-2 text-sm rounded-lg {$page.url.pathname ===
						item.href
							? 'text-[#C17A1F]'
							: ''}"
						style="animation: slideIn 0.5s ease-out {index * 0.1}s both;"
					>
						<span class="relative z-10 transition-all duration-300 group-hover:scale-105">{item.label}</span>
						{#if $page.url.pathname === item.href}
							<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C17A1F] via-[#D4A574] to-[#C17A1F] rounded-full shadow-lg shadow-[#D4A574]/50"></span>
							<span class="absolute inset-0 bg-gradient-to-r from-[#FFF8E7]/40 via-[#FFF4D6]/30 to-[#FFF8E7]/40 rounded-lg -z-0 backdrop-blur-sm"></span>
							<span class="absolute inset-0 bg-[#D4A574]/10 rounded-lg -z-0 animate-pulse"></span>
						{:else}
							<span class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C17A1F] via-[#D4A574] to-[#C17A1F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 shadow-lg shadow-[#D4A574]/30"></span>
							<span class="absolute inset-0 bg-gradient-to-r from-[#FFF8E7]/0 via-[#FFF4D6]/0 to-[#FFF8E7]/0 rounded-lg -z-0 group-hover:from-[#FFF8E7]/30 group-hover:via-[#FFF4D6]/20 group-hover:to-[#FFF8E7]/30 transition-all duration-500 backdrop-blur-sm"></span>
						{/if}
					</a>
				{/each}
				<!-- Sélecteur de langue - après Contact -->
				<div class="relative ml-4">
					<button
						onclick={() => (languageMenuOpen = !languageMenuOpen)}
						class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#FFF8E7]/30 transition-colors text-sm font-medium text-gray-700"
						aria-label="Change language"
					>
						<img 
							src={languages.find(l => l.code === lang)?.flag} 
							alt={languages.find(l => l.code === lang)?.name}
							class="w-5 h-4 object-cover rounded"
						/>
						<span class="hidden lg:inline">{languages.find(l => l.code === lang)?.name}</span>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
					{#if languageMenuOpen}
						<div class="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[150px]">
							{#each languages as language}
								<button
									onclick={() => changeLanguage(language.code)}
									class="w-full px-4 py-2 text-left hover:bg-[#FFF8E7]/50 transition-colors flex items-center gap-2 {lang === language.code ? 'bg-[#FFF8E7]/30 font-semibold' : ''}"
								>
									<img 
										src={language.flag} 
										alt={language.name}
										class="w-5 h-4 object-cover rounded"
									/>
									<span>{language.name}</span>
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>

		<!-- Mobile Menu - s'affiche/se masque avec le toggle -->
		{#if mobileMenuOpen}
			<div bind:this={mobileMenuRef} class="md:hidden mt-2 pb-2 space-y-1 border-t border-gray-200 pt-2 animate-slideIn">
				{#each navItems as item, index}
					<a
						href={item.href}
						onclick={(e) => {
							e.preventDefault();
							mobileMenuOpen = false;
							handleNavigation(item.href);
						}}
						class="block py-2 px-4 text-gray-700 hover:text-[#C17A1F] hover:bg-gradient-to-r hover:from-[#FFF8E7]/40 hover:to-[#FFF4D6]/30 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 hover:scale-105 {$page.url.pathname ===
						item.href
							? 'text-[#C17A1F] bg-gradient-to-r from-[#FFF8E7]/40 to-[#FFF4D6]/30 border-l-4 border-[#D4A574]'
							: ''}"
						style="animation: slideIn 0.3s ease-out {index * 0.1}s both;"
					>
						{item.label}
					</a>
				{/each}
			</div>
		{/if}
	</nav>
</header>

