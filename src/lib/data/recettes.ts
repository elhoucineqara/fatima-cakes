export interface Recette {
	id: string;
	slug: string;
	titre: string;
	description: string;
	categorie: 'gateau' | 'cupcake' | 'biscuit' | 'entremet';
	image: string;
	ingredients: string[];
	preparation: string[];
	temps: string;
	portions: string;
	difficulte: 'facile' | 'moyen' | 'difficile';
}

export const recettes: Recette[] = [
	{
		id: '1',
		slug: 'gateau-vanille',
		titre: 'Gâteau Vanille',
		description: 'Un gâteau vanille moelleux et parfumé, parfait pour toutes les occasions.',
		categorie: 'gateau',
		image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
		ingredients: [
			'200 g farine',
			'150 g sucre',
			'3 œufs',
			'100 g beurre fondu (ou 120 ml huile)',
			'120 ml lait',
			'1 sachet levure chimique (11 g)',
			'1 c. à café extrait vanille'
		],
		preparation: [
			'Préchauffer le four à 180°C.',
			'Mélanger le sucre et les œufs jusqu\'à blanchir le mélange.',
			'Ajouter le beurre fondu, la vanille et le lait.',
			'Tamiser la farine et la levure, puis incorporer doucement au mélange.',
			'Verser dans un moule beurré et cuire 30-35 min (tester avec un couteau).'
		],
		temps: '45 min',
		portions: '8 personnes',
		difficulte: 'facile'
	},
	{
		id: '2',
		slug: 'cupcakes-rapides',
		titre: 'Cupcakes Rapides',
		description: 'Des cupcakes moelleux et délicieux, parfaits pour un goûter ou une fête.',
		categorie: 'cupcake',
		image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&h=600&fit=crop',
		ingredients: [
			'125 g beurre mou',
			'125 g sucre',
			'2 œufs',
			'125 g farine',
			'1/2 sachet levure',
			'2 c. à soupe lait'
		],
		preparation: [
			'Battre le beurre et le sucre jusqu\'à obtenir un mélange crémeux.',
			'Ajouter les œufs un par un en mélangeant bien.',
			'Incorporer la farine et la levure.',
			'Détendre avec le lait si nécessaire.',
			'Remplir les caissettes aux 2/3.',
			'Cuire 18-20 min à 180°C.',
			'Décorer avec crème au beurre ou ganache.'
		],
		temps: '30 min',
		portions: '12 cupcakes',
		difficulte: 'facile'
	},
	{
		id: '3',
		slug: 'kiksekage-chocolat',
		titre: 'Kiksekage - Gâteau au Chocolat sans Cuisson',
		description: 'Un gâteau au chocolat style danois, sans cuisson, très facile à réaliser.',
		categorie: 'gateau',
		image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop',
		ingredients: [
			'225 g beurre',
			'450 g chocolat noir (50-60%)',
			'1.5 dl sucre glace',
			'3 jaunes d\'œufs (ou crème pour version sans œufs)',
			'Biscuits type Petit Beurre (200-300 g)'
		],
		preparation: [
			'Faire fondre le beurre et le chocolat au bain-marie.',
			'Mélanger avec le sucre glace et les jaunes d\'œufs.',
			'Tapisser un moule avec du film plastique.',
			'Étaler une couche de chocolat, puis une couche de biscuits.',
			'Répéter les couches en alternant.',
			'Réfrigérer plusieurs heures jusqu\'à prise complète.'
		],
		temps: '20 min + réfrigération',
		portions: '10 personnes',
		difficulte: 'facile'
	},
	{
		id: '4',
		slug: 'kaak-biscuits-anis',
		titre: 'Kaak - Biscuits à l\'Anis',
		description: 'Des biscuits marocains traditionnels parfumés à l\'anis, parfaits avec le café.',
		categorie: 'biscuit',
		image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop',
		ingredients: [
			'500 g farine',
			'100 g sucre',
			'100 ml huile',
			'1 œuf',
			'1 sachet levure chimique',
			'1 c. à soupe graines d\'anis',
			'1 pincée de sel',
			'Sésame pour la décoration'
		],
		preparation: [
			'Mélanger la farine, le sucre, la levure et le sel.',
			'Ajouter l\'huile, l\'œuf et les graines d\'anis.',
			'Pétrir jusqu\'à obtenir une pâte homogène.',
			'Former des anneaux ou des formes selon votre préférence.',
			'Badigeonner avec un peu d\'œuf et saupoudrer de sésame.',
			'Cuire 12-15 min à 180°C jusqu\'à dorure.'
		],
		temps: '40 min',
		portions: '20 biscuits',
		difficulte: 'moyen'
	},
	{
		id: '5',
		slug: 'tiramisu-maison',
		titre: 'Tiramisu Maison',
		description: 'Un délicieux tiramisu crémeux et onctueux, parfait pour terminer un repas.',
		categorie: 'entremet',
		image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea1e5dc?w=800&h=600&fit=crop&q=80',
		ingredients: [
			'250 g mascarpone',
			'3 œufs',
			'60 g sucre',
			'200 ml café fort (refroidi)',
			'2 c. à soupe cacao en poudre',
			'24 biscuits à la cuillère (ladyfingers)',
			'1 c. à soupe amaretto (optionnel)'
		],
		preparation: [
			'Séparer les blancs des jaunes d\'œufs.',
			'Battre les jaunes avec le sucre jusqu\'à blanchiment.',
			'Ajouter le mascarpone et mélanger jusqu\'à obtenir une crème lisse.',
			'Monter les blancs en neige ferme et les incorporer délicatement.',
			'Préparer le café et le laisser refroidir.',
			'Tremper rapidement les biscuits dans le café.',
			'Disposer une couche de biscuits dans le plat.',
			'Recouvrir d\'une couche de crème mascarpone.',
			'Répéter les couches.',
			'Saupoudrer de cacao et réfrigérer au moins 4 heures.'
		],
		temps: '30 min + réfrigération',
		portions: '6 personnes',
		difficulte: 'moyen'
	}
];

export function getRecetteBySlug(slug: string): Recette | undefined {
	return recettes.find((r) => r.slug === slug);
}

export function getRecettesByCategorie(categorie: Recette['categorie']): Recette[] {
	return recettes.filter((r) => r.categorie === categorie);
}

