
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/a-propos" | "/contact" | "/galerie" | "/galerie/[index]" | "/recettes" | "/recettes/[slug]";
		RouteParams(): {
			"/galerie/[index]": { index: string };
			"/recettes/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { index?: string; slug?: string };
			"/a-propos": Record<string, never>;
			"/contact": Record<string, never>;
			"/galerie": { index?: string };
			"/galerie/[index]": { index: string };
			"/recettes": { slug?: string };
			"/recettes/[slug]": { slug: string }
		};
		Pathname(): "/" | "/a-propos" | "/a-propos/" | "/contact" | "/contact/" | "/galerie" | "/galerie/" | `/galerie/${string}` & {} | `/galerie/${string}/` & {} | "/recettes" | "/recettes/" | `/recettes/${string}` & {} | `/recettes/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/logo-compact.svg" | "/logo.svg" | "/pattern-marocain.svg" | "/robots.txt" | string & {};
	}
}