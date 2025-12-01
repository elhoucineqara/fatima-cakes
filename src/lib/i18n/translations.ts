export type Language = 'fr' | 'en' | 'ar';

export interface Translations {
	nav: {
		home: string;
		recipes: string;
		gallery: string;
		about: string;
		contact: string;
	};
	home: {
		title: string;
		subtitle: string;
		viewRecipes: string;
		contactMe: string;
		popularRecipes: string;
		popularRecipesDesc: string;
		viewAllRecipes: string;
		aboutTitle: string;
		aboutText: string;
		learnMore: string;
		galleryTitle: string;
		galleryDesc: string;
		viewGallery: string;
	};
	recipes: {
		title: string;
		description: string;
		all: string;
		cakes: string;
		cupcakes: string;
		biscuits: string;
		desserts: string;
		noRecipes: string;
		difficulty: string;
		time: string;
		portions: string;
		ingredients: string;
		preparation: string;
		backToRecipes: string;
		haveQuestions: string;
		contactText: string;
	};
	gallery: {
		title: string;
		description: string;
		back: string;
	};
	about: {
		title: string;
		welcome: string;
		text1: string;
		text2: string;
		philosophy: string;
		philosophyText: string;
		specialties: string;
		specialty1: string;
		specialty2: string;
		specialty3: string;
		specialty4: string;
		stayInTouch: string;
		contactText: string;
	};
	contact: {
		title: string;
		description: string;
		name: string;
		email: string;
		message: string;
		send: string;
		sending: string;
		success: string;
		successMessage: string;
		emailInfo: string;
		socialInfo: string;
	};
	footer: {
		description: string;
		navigation: string;
		contact: string;
		contactLink: string;
		copyright: string;
	};
}

export const translations: Record<Language, Translations> = {
	fr: {
		nav: {
			home: 'Accueil',
			recipes: 'Recettes',
			gallery: 'Galerie',
			about: 'À propos',
			contact: 'Contact'
		},
		home: {
			title: 'Bienvenue chez Fatima',
			subtitle: 'Découvrez mes recettes de gâteaux, cupcakes et pâtisseries faites maison avec passion',
			viewRecipes: 'Voir les Recettes',
			contactMe: 'Me Contacter',
			popularRecipes: 'Recettes Populaires',
			popularRecipesDesc: 'Découvrez nos créations les plus appréciées',
			viewAllRecipes: 'Voir Toutes les Recettes',
			aboutTitle: 'À Propos',
			aboutText: 'Passionnée de pâtisserie, je partage avec vous mes recettes de gâteaux et pâtisseries faites maison. Chaque recette est testée et réalisée avec amour pour vous offrir le meilleur.',
			learnMore: 'En savoir plus',
			galleryTitle: 'Galerie',
			galleryDesc: 'Admirez nos créations en images',
			viewGallery: 'Voir toute la galerie'
		},
		recipes: {
			title: 'Mes Recettes',
			description: 'Découvrez mes recettes de pâtisserie testées et approuvées. Chaque recette est détaillée avec les ingrédients et les étapes de préparation.',
			all: 'Toutes',
			cakes: 'Gâteaux',
			cupcakes: 'Cupcakes',
			biscuits: 'Biscuits',
			desserts: 'Entremets',
			noRecipes: 'Aucune recette trouvée dans cette catégorie.',
			difficulty: 'Difficulté',
			time: 'Temps',
			portions: 'Portions',
			ingredients: 'Ingrédients',
			preparation: 'Préparation',
			backToRecipes: 'Retour aux recettes',
			haveQuestions: 'Vous avez des questions ?',
			contactText: "N'hésitez pas à me contacter si vous avez besoin d'aide ou de conseils pour cette recette !"
		},
		gallery: {
			title: 'Galerie',
			description: 'Admirez mes créations de gâteaux, cupcakes et pâtisseries. Chaque création est unique et réalisée avec passion.',
			back: 'Retour'
		},
		about: {
			title: 'À Propos',
			welcome: 'Bienvenue !',
			text1: "Passionnée de pâtisserie depuis toujours, j'ai appris l'art de la pâtisserie avec amour et dévouement. Chaque gâteau, chaque cupcake, chaque biscuit que je crée est le fruit d'une passion qui ne cesse de grandir.",
			text2: 'Ce portfolio est un espace où je partage mes recettes favorites, mes techniques et mes créations. Mon objectif est de vous inspirer et de vous aider à réaliser de délicieuses pâtisseries chez vous.',
			philosophy: 'Ma Philosophie',
			philosophyText: "Je crois que la pâtisserie est un art accessible à tous. Avec les bons ingrédients, un peu de patience et beaucoup d'amour, chacun peut créer de magnifiques desserts. Chaque recette que je partage a été testée et réalisée avec soin pour vous garantir le meilleur résultat.",
			specialties: 'Mes Spécialités',
			specialty1: 'Gâteaux d\'anniversaire et de fête',
			specialty2: 'Cupcakes décorés',
			specialty3: 'Biscuits traditionnels',
			specialty4: 'Entremets et desserts raffinés',
			stayInTouch: 'Restons en Contact',
			contactText: 'Vous avez des questions, des suggestions ou vous souhaitez simplement échanger sur la pâtisserie ? N\'hésitez pas à me contacter !'
		},
		contact: {
			title: 'Contact',
			description: 'Vous avez des questions sur mes recettes ? Vous souhaitez partager vos créations ou obtenir des conseils ? N\'hésitez pas à me contacter !',
			name: 'Nom',
			email: 'Email',
			message: 'Message',
			send: 'Envoyer le Message',
			sending: 'Envoi en cours...',
			success: 'Message envoyé avec succès !',
			successMessage: 'Je vous répondrai dans les plus brefs délais.',
			emailInfo: 'Pour un contact direct, vous pouvez m\'envoyer un email. Je réponds généralement sous 24-48h.',
			socialInfo: 'Suivez-moi sur les réseaux sociaux pour voir mes dernières créations et recevoir des astuces pâtisserie !'
		},
		footer: {
			description: 'Partage de recettes de gâteaux et pâtisseries faites maison avec passion.',
			navigation: 'Navigation',
			contact: 'Contact',
			contactLink: 'formulaire de contact',
			copyright: 'Tous droits réservés.'
		}
	},
	en: {
		nav: {
			home: 'Home',
			recipes: 'Recipes',
			gallery: 'Gallery',
			about: 'About',
			contact: 'Contact'
		},
		home: {
			title: 'Welcome to Fatima',
			subtitle: 'Discover my recipes for cakes, cupcakes and homemade pastries made with passion',
			viewRecipes: 'View Recipes',
			contactMe: 'Contact Me',
			popularRecipes: 'Popular Recipes',
			popularRecipesDesc: 'Discover our most appreciated creations',
			viewAllRecipes: 'View All Recipes',
			aboutTitle: 'About',
			aboutText: 'Passionate about pastry, I share with you my recipes for cakes and homemade pastries. Each recipe is tested and made with love to offer you the best.',
			learnMore: 'Learn More',
			galleryTitle: 'Gallery',
			galleryDesc: 'Admire our creations in images',
			viewGallery: 'View Full Gallery'
		},
		recipes: {
			title: 'My Recipes',
			description: 'Discover my tested and approved pastry recipes. Each recipe is detailed with ingredients and preparation steps.',
			all: 'All',
			cakes: 'Cakes',
			cupcakes: 'Cupcakes',
			biscuits: 'Biscuits',
			desserts: 'Desserts',
			noRecipes: 'No recipes found in this category.',
			difficulty: 'Difficulty',
			time: 'Time',
			portions: 'Portions',
			ingredients: 'Ingredients',
			preparation: 'Preparation',
			backToRecipes: 'Back to recipes',
			haveQuestions: 'Have questions?',
			contactText: 'Feel free to contact me if you need help or advice for this recipe!'
		},
		gallery: {
			title: 'Gallery',
			description: 'Admire my creations of cakes, cupcakes and pastries. Each creation is unique and made with passion.',
			back: 'Back'
		},
		about: {
			title: 'About',
			welcome: 'Welcome!',
			text1: 'Passionate about pastry since forever, I learned the art of pastry with love and dedication. Every cake, every cupcake, every cookie I create is the fruit of a passion that never stops growing.',
			text2: 'This portfolio is a space where I share my favorite recipes, techniques and creations. My goal is to inspire you and help you create delicious pastries at home.',
			philosophy: 'My Philosophy',
			philosophyText: 'I believe that pastry is an art accessible to everyone. With the right ingredients, a little patience and a lot of love, everyone can create magnificent desserts. Every recipe I share has been tested and made with care to guarantee you the best result.',
			specialties: 'My Specialties',
			specialty1: 'Birthday and party cakes',
			specialty2: 'Decorated cupcakes',
			specialty3: 'Traditional biscuits',
			specialty4: 'Elegant desserts and entremets',
			stayInTouch: 'Stay in Touch',
			contactText: 'Do you have questions, suggestions or would you like to exchange about pastry? Feel free to contact me!'
		},
		contact: {
			title: 'Contact',
			description: 'Do you have questions about my recipes? Would you like to share your creations or get advice? Feel free to contact me!',
			name: 'Name',
			email: 'Email',
			message: 'Message',
			send: 'Send Message',
			sending: 'Sending...',
			success: 'Message sent successfully!',
			successMessage: 'I will get back to you as soon as possible.',
			emailInfo: 'For direct contact, you can send me an email. I usually respond within 24-48 hours.',
			socialInfo: 'Follow me on social media to see my latest creations and receive pastry tips!'
		},
		footer: {
			description: 'Sharing recipes for cakes and homemade pastries with passion.',
			navigation: 'Navigation',
			contact: 'Contact',
			contactLink: 'contact form',
			copyright: 'All rights reserved.'
		}
	},
	ar: {
		nav: {
			home: 'الرئيسية',
			recipes: 'الوصفات',
			gallery: 'المعرض',
			about: 'من نحن',
			contact: 'اتصل بنا'
		},
		home: {
			title: 'مرحباً بكم في فاطمة',
			subtitle: 'اكتشفوا وصفاتي للكعك والكب كيك والحلويات المصنوعة في المنزل بشغف',
			viewRecipes: 'عرض الوصفات',
			contactMe: 'اتصل بي',
			popularRecipes: 'الوصفات الشائعة',
			popularRecipesDesc: 'اكتشفوا إبداعاتنا الأكثر تقديراً',
			viewAllRecipes: 'عرض جميع الوصفات',
			aboutTitle: 'من نحن',
			aboutText: 'شغوفة بالحلويات، أشارك معكم وصفاتي للكعك والحلويات المصنوعة في المنزل. كل وصفة تم اختبارها وصنعها بحب لتقديم الأفضل لكم.',
			learnMore: 'اعرف المزيد',
			galleryTitle: 'المعرض',
			galleryDesc: 'أعجبوا بإبداعاتنا في الصور',
			viewGallery: 'عرض المعرض الكامل'
		},
		recipes: {
			title: 'وصفاتي',
			description: 'اكتشفوا وصفاتي للحلويات المختبرة والمعتمدة. كل وصفة مفصلة بالمكونات وخطوات التحضير.',
			all: 'الكل',
			cakes: 'كعك',
			cupcakes: 'كب كيك',
			biscuits: 'بسكويت',
			desserts: 'حلويات',
			noRecipes: 'لم يتم العثور على وصفات في هذه الفئة.',
			difficulty: 'الصعوبة',
			time: 'الوقت',
			portions: 'الكمية',
			ingredients: 'المكونات',
			preparation: 'طريقة التحضير',
			backToRecipes: 'العودة إلى الوصفات',
			haveQuestions: 'لديك أسئلة؟',
			contactText: 'لا تتردد في الاتصال بي إذا كنت بحاجة إلى مساعدة أو نصيحة لهذه الوصفة!'
		},
		gallery: {
			title: 'المعرض',
			description: 'أعجبوا بإبداعاتي من الكعك والكب كيك والحلويات. كل إبداع فريد ومصنوع بشغف.',
			back: 'رجوع'
		},
		about: {
			title: 'من نحن',
			welcome: 'مرحباً!',
			text1: 'شغوفة بالحلويات منذ الأبد، تعلمت فن الحلويات بحب وتفانٍ. كل كعكة، كل كب كيك، كل بسكويت أصنعه هو ثمرة شغف لا يتوقف عن النمو.',
			text2: 'هذا المعرض هو مساحة أشارك فيها وصفاتي المفضلة وتقنياتي وإبداعاتي. هدفي هو إلهامكم ومساعدتكم على صنع حلويات لذيذة في المنزل.',
			philosophy: 'فلسفتي',
			philosophyText: 'أؤمن أن الحلويات فن متاح للجميع. بالمكونات الصحيحة وقليل من الصبر والكثير من الحب، يمكن للجميع صنع حلويات رائعة. كل وصفة أشاركها تم اختبارها وصنعها بعناية لضمان أفضل نتيجة.',
			specialties: 'تخصصاتي',
			specialty1: 'كعك أعياد الميلاد والحفلات',
			specialty2: 'كب كيك مزين',
			specialty3: 'بسكويت تقليدي',
			specialty4: 'حلويات وأنتريميه راقية',
			stayInTouch: 'ابقوا على تواصل',
			contactText: 'لديكم أسئلة أو اقتراحات أو تريدون ببساطة تبادل الحديث عن الحلويات؟ لا تترددوا في الاتصال بي!'
		},
		contact: {
			title: 'اتصل بنا',
			description: 'لديكم أسئلة حول وصفاتي؟ تريدون مشاركة إبداعاتكم أو الحصول على نصيحة؟ لا تترددوا في الاتصال بي!',
			name: 'الاسم',
			email: 'البريد الإلكتروني',
			message: 'الرسالة',
			send: 'إرسال الرسالة',
			sending: 'جاري الإرسال...',
			success: 'تم إرسال الرسالة بنجاح!',
			successMessage: 'سأرد عليكم في أقرب وقت ممكن.',
			emailInfo: 'للتواصل المباشر، يمكنكم إرسال بريد إلكتروني. عادة ما أرد خلال 24-48 ساعة.',
			socialInfo: 'تابعوني على وسائل التواصل الاجتماعي لمشاهدة أحدث إبداعاتي والحصول على نصائح الحلويات!'
		},
		footer: {
			description: 'مشاركة وصفات الكعك والحلويات المصنوعة في المنزل بشغف.',
			navigation: 'التنقل',
			contact: 'اتصل بنا',
			contactLink: 'نموذج الاتصال',
			copyright: 'جميع الحقوق محفوظة.'
		}
	}
};

