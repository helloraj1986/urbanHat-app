import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	headerBar: {
		height: '30px',
		display: 'flex',
		margin: '5px 80px',
		backgroundColor: '#edf6f9',
		justifyContent: 'space-between',
		color: theme.palette.text.primary,
		
	},
	headerBarLeft: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: 'Jost, sans-serif',
		padding: theme.spacing(1),
		marginRight: theme.spacing(1),
		cursor: 'pointer',
	},
	headerBarRight: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
	},
	headerBarRightIconContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
	},
	headerBarRightIcon: {
		fontSize: '20px',
		padding: theme.spacing(1),
		color: theme.palette.text.secondary,
		tranistion: 'all 1s ease',
		'&:hover': {
			color: 'blue',
			transform: 'scale(1.1)',
		},
	},
	red: {
		'&:hover': {
			color: 'red',
			transform: 'scale(1.1)',
		},
	},
}))
