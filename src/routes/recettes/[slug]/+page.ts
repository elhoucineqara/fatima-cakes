import { error } from '@sveltejs/kit';
import { getRecetteBySlug } from '$lib/data/recettes';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const recette = getRecetteBySlug(params.slug);

	if (!recette) {
		throw error(404, 'Recette non trouvée');
	}

	return {
		recette
	};
};

