import type { Language } from './translations';

export interface RecipeTranslations {
	titre: string;
	description: string;
	ingredients: string[];
	preparation: string[];
	temps: string;
	portions: string;
}

export const recipeTranslations: Record<string, Record<Language, RecipeTranslations>> = {
	'gateau-vanille': {
		fr: {
			titre: 'Gâteau Vanille',
			description: 'Un gâteau vanille moelleux et parfumé, parfait pour toutes les occasions.',
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
			portions: '8 personnes'
		},
		en: {
			titre: 'Vanilla Cake',
			description: 'A soft and fragrant vanilla cake, perfect for all occasions.',
			ingredients: [
				'200g flour',
				'150g sugar',
				'3 eggs',
				'100g melted butter (or 120ml oil)',
				'120ml milk',
				'1 packet baking powder (11g)',
				'1 tsp vanilla extract'
			],
			preparation: [
				'Preheat the oven to 180°C.',
				'Mix sugar and eggs until the mixture whitens.',
				'Add melted butter, vanilla and milk.',
				'Sift flour and baking powder, then gently incorporate into the mixture.',
				'Pour into a buttered pan and bake for 30-35 min (test with a knife).'
			],
			temps: '45 min',
			portions: '8 people'
		},
		ar: {
			titre: 'كعكة الفانيليا',
			description: 'كعكة فانيليا ناعمة ومعطرة، مثالية لجميع المناسبات.',
			ingredients: [
				'200 غرام دقيق',
				'150 غرام سكر',
				'3 بيضات',
				'100 غرام زبدة مذابة (أو 120 مل زيت)',
				'120 مل حليب',
				'1 كيس خميرة كيميائية (11 غرام)',
				'1 ملعقة صغيرة مستخلص الفانيليا'
			],
			preparation: [
				'سخن الفرن إلى 180 درجة مئوية.',
				'امزج السكر والبيض حتى يصبح الخليط أبيض.',
				'أضف الزبدة المذابة والفانيليا والحليب.',
				'انخل الدقيق والخميرة، ثم أضف برفق إلى الخليط.',
				'اسكب في قالب مدهون بالزبدة واخبز لمدة 30-35 دقيقة (اختبر بسكين).'
			],
			temps: '45 دقيقة',
			portions: '8 أشخاص'
		}
	},
	'cupcakes-rapides': {
		fr: {
			titre: 'Cupcakes Rapides',
			description: 'Des cupcakes moelleux et délicieux, parfaits pour un goûter ou une fête.',
			ingredients: [
				'200 g farine',
				'150 g sucre',
				'2 œufs',
				'100 ml huile végétale',
				'120 ml lait',
				'1 sachet levure chimique',
				'1 c. à café vanille'
			],
			preparation: [
				'Préchauffer le four à 180°C.',
				'Mélanger tous les ingrédients jusqu\'à obtenir une pâte lisse.',
				'Remplir les moules à cupcakes aux 2/3.',
				'Cuire 18-20 minutes jusqu\'à ce qu\'ils soient dorés.'
			],
			temps: '30 min',
			portions: '12 cupcakes'
		},
		en: {
			titre: 'Quick Cupcakes',
			description: 'Soft and delicious cupcakes, perfect for a snack or a party.',
			ingredients: [
				'200g flour',
				'150g sugar',
				'2 eggs',
				'100ml vegetable oil',
				'120ml milk',
				'1 packet baking powder',
				'1 tsp vanilla'
			],
			preparation: [
				'Preheat the oven to 180°C.',
				'Mix all ingredients until smooth batter.',
				'Fill cupcake molds 2/3 full.',
				'Bake 18-20 minutes until golden.'
			],
			temps: '30 min',
			portions: '12 cupcakes'
		},
		ar: {
			titre: 'كب كيك سريع',
			description: 'كب كيك ناعم ولذيذ، مثالي للوجبات الخفيفة أو الحفلات.',
			ingredients: [
				'200 غرام دقيق',
				'150 غرام سكر',
				'2 بيضات',
				'100 مل زيت نباتي',
				'120 مل حليب',
				'1 كيس خميرة كيميائية',
				'1 ملعقة صغيرة فانيليا'
			],
			preparation: [
				'سخن الفرن إلى 180 درجة مئوية.',
				'امزج جميع المكونات حتى تحصل على عجينة ناعمة.',
				'املأ قوالب الكب كيك حتى 2/3.',
				'اخبز لمدة 18-20 دقيقة حتى تصبح ذهبية.'
			],
			temps: '30 دقيقة',
			portions: '12 كب كيك'
		}
	},
	'kaak-biscuits-anis': {
		fr: {
			titre: 'Kaak - Biscuits à l\'Anis',
			description: 'Des biscuits marocains traditionnels parfumés à l\'anis, parfaits avec le café.',
			ingredients: [
				'500 g farine',
				'150 g sucre',
				'100 ml huile',
				'1 œuf',
				'1 sachet levure chimique',
				'1 c. à soupe graines d\'anis',
				'1 c. à café sel'
			],
			preparation: [
				'Mélanger la farine, le sucre, la levure et le sel.',
				'Ajouter l\'huile, l\'œuf et les graines d\'anis.',
				'Pétrir jusqu\'à obtenir une pâte homogène.',
				'Former des petits biscuits et les disposer sur une plaque.',
				'Cuire à 180°C pendant 20-25 minutes jusqu\'à ce qu\'ils soient dorés.'
			],
			temps: '40 min',
			portions: '20 biscuits'
		},
		en: {
			titre: 'Kaak - Anise Biscuits',
			description: 'Traditional Moroccan anise-scented biscuits, perfect with coffee.',
			ingredients: [
				'500g flour',
				'150g sugar',
				'100ml oil',
				'1 egg',
				'1 packet baking powder',
				'1 tbsp anise seeds',
				'1 tsp salt'
			],
			preparation: [
				'Mix flour, sugar, baking powder and salt.',
				'Add oil, egg and anise seeds.',
				'Knead until homogeneous dough.',
				'Shape small biscuits and place on a baking sheet.',
				'Bake at 180°C for 20-25 minutes until golden.'
			],
			temps: '40 min',
			portions: '20 biscuits'
		},
		ar: {
			titre: 'كعك - بسكويت اليانسون',
			description: 'بسكويت مغربي تقليدي معطر باليانسون، مثالي مع القهوة.',
			ingredients: [
				'500 غرام دقيق',
				'150 غرام سكر',
				'100 مل زيت',
				'1 بيضة',
				'1 كيس خميرة كيميائية',
				'1 ملعقة كبيرة بذور يانسون',
				'1 ملعقة صغيرة ملح'
			],
			preparation: [
				'امزج الدقيق والسكر والخميرة والملح.',
				'أضف الزيت والبيضة وبذور اليانسون.',
				'اعجن حتى تحصل على عجينة متجانسة.',
				'شكل بسكويت صغير وضعها على صينية خبز.',
				'اخبز على 180 درجة مئوية لمدة 20-25 دقيقة حتى تصبح ذهبية.'
			],
			temps: '40 دقيقة',
			portions: '20 بسكويت'
		}
	}
};

export function getDifficultyLabel(difficulte: string, lang: Language): string {
	const labels: Record<string, Record<Language, string>> = {
		facile: {
			fr: 'Facile',
			en: 'Easy',
			ar: 'سهل'
		},
		moyen: {
			fr: 'Moyen',
			en: 'Medium',
			ar: 'متوسط'
		},
		difficile: {
			fr: 'Difficile',
			en: 'Hard',
			ar: 'صعب'
		}
	};
	return labels[difficulte]?.[lang] || difficulte;
}

