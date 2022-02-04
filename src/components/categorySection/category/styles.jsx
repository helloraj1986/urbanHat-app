import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	'@keyframes fade-in': {
		'0%': { opacity: 0 },
		'100%': { opacity: 1 },
	},
	animate: {
		animation: '$fade-in 1s ease-in-out',
	},
	categoryContainer: {
		margin: '40px auto',
		// paddingLeft: '50px',
		[theme.breakpoints.down('sm')]: {
			margin: '20px 50px',
			padding: '0px',
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
}))
