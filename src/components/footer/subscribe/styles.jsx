import { Button, makeStyles,withStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	//common classes
	flexRow: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	flexCol: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
	},
	white: {
		color: '#fdf0d5',
		fontFamily: 'Jost, Sans-Sarif',
	},
	//classes by section
	main: {
		width: '100%',
		backgroundColor: '#16001e',
		overflow: 'hidden',
		borderBottom: '1px solid #fffff',
	},
	sub: {
		padding: '40px 60px',
	},
	topLeft: {
		padding: '0 20px',
	},
	topCenter: {
		justifyContent: 'space-around',
	},
	textField: {
		background: theme.palette.background.default,
		color: theme.palette.action.hover,
	},

	topRight: {
		padding: '10px 30px',
		justifyContent: 'space-around',
		marginTop: '0',
	},
}))

export const BootstrapButton = withStyles({
	root: {
		marginLeft: '20px',
		boxShadow: 'none',
		borderRadius: '0px',
		textTransform: 'none',
		color: 'white',
		fontSize: 16,
		padding: '8px 36px',
		border: '1px solid',
		lineHeight: 2.3,
		backgroundColor: '#e63946',
		borderColor: '#9d0208',
		fontFamily: ['Jost'].join(','),
		'&:hover': {
			backgroundColor: '#9d0208',
			borderColor: '#6a040f',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#6a040f',
			borderColor: '#370617',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem #6a040f',
		},
	},
})(Button)
