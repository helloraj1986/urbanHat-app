import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	textFont: {
		fontFamily: '"Jost", sans-serif',
	},

	'@keyframes fade-in': {
		'0%': { opacity: 0 },
		'100%': { opacity: 1 },
	},
	animate: {
		animation: '$fade-in 2s ease-in-out',
	},
	reviewContainer: {
		margin: '20px 5px',
		height: '350px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px 30px',
		backgroundColor: '#f3ead8',
		[theme.breakpoints.down('sm')]: {
			margin: '30px 5px',
			padding: '20px 10px',
			height: '250px',
		},
	},
	title: {
		margin: '30px 0',
		fontFamily: '"Jost", sans-serif',
		fontWeight: '600',
		[theme.breakpoints.down('sm')]: {
			margin: '20px 5px',
			fontSize: '24px',
		},
	},
	divider: {
		backGroundColor: 'black',
		marginTop: '5px',
	},
	review: {
		padding: '0 20px',
		textAlign: 'center',
		fontFamily: '"Jost", sans-serif',
		fontWeight: '500',
		[theme.breakpoints.down('sm')]: {
			padding: '0 5px',
			fontSize: '10px',
		},
	},
	personContainer: {
		display: 'flex',
		margin: '40px 0',
	},
	avatar: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	person: {
		display: 'flex',
		flexDirection: 'column',
		paddingLeft: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			fontSize: '10px',
		},
	},
	_name: {
		color: '#000000',
		fontWeight: '600',
		fontFamily: '"Jost", sans-serif',
	},
	position: {
		color: '#171616',
		fontSize: '16px',
		fontFamily: '"Jost", sans-serif',
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
		},
	},
}))
