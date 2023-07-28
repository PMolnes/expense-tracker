/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				backgroundColor: {
					100: '#FFFFFF',
					200: '#FFFFFF',
					300: '#FFFFFF',
					400: '#FDFDFD',
					500: '#F9F9F9',
					600: '#F4F4F4',
					700: '#EAEAEA',
					800: '#D6D6D6',
					900: '#B1B1B1'
				},
				accentColor: {
					100: '#E8EAF6',
					200: '#C4CDEF',
					300: '#A0AADF',
					400: '#7C85CE',
					500: '#688CE9', // Baseline
					600: '#5E7ED2',
					700: '#5469B5',
					800: '#4A5599',
					900: '#3F447A'
				}
			}
		}
	},
	plugins: []
};
