export interface ContactInfo {
	email: string;
	socialMedia: {
		platform: string;
		url: string;
		icon: string;
		color: string;
	}[];
}

export const contactInfo: ContactInfo = {
	email: 'fatima.cakes@example.com',
	socialMedia: [
		{
			platform: 'Facebook',
			url: 'https://facebook.com/fatima.cakes',
			icon: 'facebook',
			color: '#1877F2'
		},
		{
			platform: 'Instagram',
			url: 'https://instagram.com/fatima.cakes',
			icon: 'instagram',
			color: '#E4405F'
		},
		{
			platform: 'YouTube',
			url: 'https://youtube.com/@fatima.cakes',
			icon: 'youtube',
			color: '#FF0000'
		},
		{
			platform: 'Pinterest',
			url: 'https://pinterest.com/fatima.cakes',
			icon: 'pinterest',
			color: '#BD081C'
		}
	]
};

