import {makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	textFont: {
		fontFamily: 'Jost, sans-sarif',
		textTransform: 'capitalize',
	},
	header: {
		width: '100%',
		paddingTop: '200px',
		backgroundColor: '#f3ead8',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerLinks: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '10px 0',
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
	},
}))
 
