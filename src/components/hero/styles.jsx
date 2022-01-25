import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	'@keyframes slide-up': {
		'0%': { transform: 'translateY(100%)', opacity: 0 },
		'100%': { transform: 'translateY(0)', opacity: 1 },
	},
	'@keyframes bounce-up': {
		'0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
		'10%': { transform: 'translateY(-45px)' },
		' 35%': { transform: 'translateY(-30px)' },
		' 65%': { transform: 'translateY(-15px)' },
		' 90%': { transform: 'translateY(-5px)' },
	},
	hero: {
		width: '100vw',
		height: 'calc(100vh - 35px)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '10px',
	},

	container: {
		position: 'relative',
		margin: '0 auto',
	},
	imgContainer: {
		width: '1500px',
		height: '700px',
	},
	img: {
		width: '100%',
		objectFit: 'cover',
	},
	textContainer: {
		position: 'absolute',
		width: '600px',
		bottom: '180px',
		right: '100px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textContainerLeft: {
		position: 'absolute',
		bottom: '180px',
		left: '100px',
	},
	sale: {
		color: '#e63946',
		fontFamily: 'Clicker Script, cursive',
		fontSize: '50px',
		fontWeight: '400',
	},
	name: {
		animation: '$bounce-up 700ms ease-in-out',
		fontSize: '55px',
		fontWeight: '500',
		color: '#292621',
		fontFamily: 'Jost, sans-serif',
	},
	desc: {
		animation: '$slide-up 500ms ease-in',
		marginTop: theme.spacing(2),
		fontSize: '18px',
		fontWeight: '400',
		padding: '0 60px',
		color: theme.palette.text.secondary,
	},
	button: {
		animation: '$slide-up 500ms ease-in',
		marginTop: theme.spacing(2),
		width: '100px',
		color: 'white',
		backgroundColor: '#16161a',
		padding: theme.spacing(1),
		borderRadius: '0',
		cursor: 'pointer',
		'&:hover': {
			color: 'black',
		},
		testing: {
			height: '100',
			width: '100',
			backgroundColor: 'red',
			animation: 'slide-up 1000ms',
		},
	},
}))
