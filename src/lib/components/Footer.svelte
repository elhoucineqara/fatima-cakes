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

<footer class="bg-gray-800 text-gray-300 mt-auto">
	<div class="container mx-auto px-4 py-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div>
				<a
					href="/"
					onclick={(e) => {
						e.preventDefault();
						handleNavigation('/');
					}}
					class="group flex items-center gap-3 mb-4"
				>
					<img
						src="/logo-compact.svg"
						alt="Logo Fatima Cakes"
						class="h-10 w-10 transition-all duration-300 group-hover:scale-110"
					/>
					<h3 class="text-xl font-bold text-white brand-title" dir="ltr">
						<span class="text-white">Fatima</span>
						<span class="text-white/80 ml-2 font-light">Cakes</span>
					</h3>
				</a>
				<p class="text-sm">
					{t.footer.description}
				</p>
			</div>
			<div>
				<h4 class="text-lg font-semibold text-white mb-4">{t.footer.navigation}</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="/" onclick={(e) => { e.preventDefault(); handleNavigation('/'); }} class="hover:text-red-400">{t.nav.home}</a></li>
					<li><a href="/recettes" onclick={(e) => { e.preventDefault(); handleNavigation('/recettes'); }} class="hover:text-red-400">{t.nav.recipes}</a></li>
					<li><a href="/galerie" onclick={(e) => { e.preventDefault(); handleNavigation('/galerie'); }} class="hover:text-red-400">{t.nav.gallery}</a></li>
					<li><a href="/contact" onclick={(e) => { e.preventDefault(); handleNavigation('/contact'); }} class="hover:text-red-400">{t.nav.contact}</a></li>
				</ul>
			</div>
			<div>
				<h4 class="text-lg font-semibold text-white mb-4">{t.footer.contact}</h4>
				<p class="text-sm">
					{lang === 'ar' ? 'لأي سؤال أو اقتراح، لا تتردد في الاتصال بي عبر' : lang === 'en' ? 'For any questions or suggestions, feel free to contact me via the' : 'Pour toute question ou suggestion, n\'hésitez pas à me contacter via le'}
					<a href="/contact" onclick={(e) => { e.preventDefault(); handleNavigation('/contact'); }} class="text-red-400 hover:text-red-300"> {t.footer.contactLink}</a>.
				</p>
			</div>
		</div>
		<div class="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
			<p>&copy; {new Date().getFullYear()} Fatima Cakes. {t.footer.copyright}</p>
		</div>
	</div>
</footer>

