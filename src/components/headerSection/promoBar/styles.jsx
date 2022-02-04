import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	promoBar: {
		backgroundColor: '#16161A',
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '100vw',
		},
	},
	text: {
		color: '#fff',
		fontFamily: 'Jost, sans-serif',
		fontSize: '16px',
		fontWeight: '400',
		[theme.breakpoints.down('sm')]: {
			fontSize: '8px',
		},
	},
	span: {
		color: 'gold',
		transition: 'all 0.4s ease-in',
		'&:hover': {
			letterSpacing: '1px',
			transform: 'translateX(10px)',
			textDecoration: 'underline',
			cursor: 'pointer',
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '10px',
		},
	},
}))
