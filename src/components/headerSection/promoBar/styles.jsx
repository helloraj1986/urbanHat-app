import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	promoBar: {
		backgroundColor: '#16161A',
		height: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#fff',
		fontFamily: 'Jost, sans-serif',
		fontSize: '16px',
		fontWeight: '400',
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
	},
}))
