import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	textFont: {
		fontFamily: 'Jost, sans-sarif',
		textTransform: 'capitalize',
		[theme.breakpoints.down('sm')]: {
			fontSize: '16px',
		},
	},
	smDisplayMargin: {
		padding: '0 50px',
		[theme.breakpoints.down('sm')]: {
			margin: '0 10px',
			textAlign: 'center',
		},
	},

	header: {
		width: '100%',
		paddingTop: '200px',
		backgroundColor: '#f3ead8',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			paddingTop: '120px',
		},
	},
	headerLinks: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '10px 0',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
	},
	links: {
		padding: theme.spacing(1),
		fontSize: '16px',
		margin: '0 10px',
		textDecoration: 'none',
		color: 'black',
		'&:hover': {
			textDecoration: 'underline',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
			margin: '0',
		},
	},
}))
