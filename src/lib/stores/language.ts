import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Language } from '../i18n/translations';

const LANGUAGE_STORAGE_KEY = 'fatima-cakes-language';

// Obtenir la langue initiale depuis localStorage ou utiliser le français par défaut
function getInitialLanguage(): Language {
	if (!browser) return 'fr';
	
	try {
		const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
		if (stored && ['fr', 'en', 'ar'].includes(stored)) {
			return stored;
		}
	} catch (error) {
		console.warn('Erreur lors de la lecture de localStorage:', error);
	}
	
	// Par défaut, utiliser le français (ne pas détecter la langue du navigateur)
	return 'fr';
}

// Initialiser le store avec la langue depuis localStorage
const initialLang = getInitialLanguage();
export const currentLanguage = writable<Language>(initialLang);

// Appliquer la langue au document au chargement initial
if (browser) {
	document.documentElement.lang = initialLang;
	document.documentElement.dir = initialLang === 'ar' ? 'rtl' : 'ltr';
}

// Sauvegarder la langue dans localStorage quand elle change
if (browser) {
	currentLanguage.subscribe((lang) => {
		try {
			localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
			document.documentElement.lang = lang;
			document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
		} catch (error) {
			console.warn('Erreur lors de l\'écriture dans localStorage:', error);
		}
	});
}

