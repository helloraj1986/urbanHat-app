import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	$grey: '#25221e',
	root: {
		minWidth: 275,
		border: '1px solid',
		padding: '10px',
		boxShadow: '5px 10px red',
		[theme.breakpoints.down('sm')]: {
			minWidth: 250,
		},
	},
	cardActionArea: {
		height: '400px',
		width: '100%',
		position: 'relative',
		backgroundColor: 'black',
		[theme.breakpoints.down('sm')]: {
			height: '350px',
		},

		'&:hover > $cardInfo > $title': {
			color: '#ff2020',
			transition: 'color 300ms ease',
		},

		'&:hover > $cardMedia': {
			transition: 'opacity 300ms ease',
			opacity: '0.5',
		},
		'&:not(hover) > $cardMedia': {
			transition: 'opacity 300ms ease',
			opacity: '1',
		},

		'&:hover > $actionButton': {
			transition: 'opacity 1000ms ease',
			opacity: '1',
		},
		'&:not(hover) > $actionButton': {
			transition: 'opacity 1000ms ease',
			opacity: '0',
		},
	},
	cardMedia: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	actionButton: {
		position: 'absolute',
		zIndex: '98',
		top: '65%',
		left: '50%',
		width: '50%',
		transform: 'translate(-50%, -50%)',
		padding: '10px 10px',
		backgroundColor: '#fff',
		//for items
		display: 'flex',
		justifyContent: 'space-between',
		//default opacity 0 for transition
		opacity: '0',
		transition: 'transform 250ms ease',
	},
	Icons: {
		width: '33.33%',
		'&:hover': {
			transition: 'transform 250ms ease',
			transform: 'scale(1.3)',
		},
		'&:not(hover)': {
			transition: 'transform 250ms ease',
			transform: 'scale(1)',
		},
	},

	cardInfo: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		zIndex: '99',
		backgroundColor: '#fff',
		height: '75px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	price: {
		display: 'flex',
		marginTop: '5px',
		width: '50%',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: '#74706b',
		fonSize: '24px',
		fontWeight: '500',
		[theme.breakpoints.down('sm')]: {
			fonSize: '14px',
			width: '80%',
		},
	},
	disPrice: {
		'&:hover': {
			color: '#4f4a4a',
		},
	},
	oriPrice: {
		textDecoration: 'line-through',
		color: '#cebd9c',
	},
	title: {
		fontFamily: 'Jost, sans-sarif',
	},
}))
