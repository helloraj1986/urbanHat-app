import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	'@keyframes fade-in': {
		'0%': { opacity: 0 },
		'100%': { opacity: 1 },
	},
	animate: {
		animation: '$fade-in 1s ease-in-out',
	},
	header: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '20px auto',
	},
	categorySelection: {
		display: 'flex',
		justifyContent: 'center',
	},
	title: {
		fontFamily: '"Jost",sans-serif ',
		fonrWeight: '700',
		fontSize: '36px',
		letterSpacing: '2px',
	},
	category: {
		padding: theme.spacing(2),
		fontFamily: '"Jost",sans-serif ',
		fonrWeight: '400',
		fontSize: '20px',
		cursor: 'pointer',
	},
	active: {
		padding: theme.spacing(2),
		fontFamily: '"Jost",sans-serif ',
		fonrWeight: '600',
		color: '#e63946',
		fontSize: '22px',
		textDecoration: 'underline',
		cursor: 'pointer',
	},
	carouselContainer: {
		margin: '20px 0',
	},
	shadow: {
		boxShadow: '1px 3px 29px -5px #273236',
	},
}))
