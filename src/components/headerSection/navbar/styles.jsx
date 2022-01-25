import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#edf6f9',
		color: '#16161A',
		display: 'flex',
		justifyContent: 'space-between',
	},

	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	toolBarLeft: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
	},
	logo: {
		width: '150px',
		height: '60px',
		cursor: 'pointer',
	},
	toolbarMiddle: {
		display: 'flex',
	},
	title: {
		fontFamily: 'Jost, sans-serif',
		padding: theme.spacing(2),
		cursor: 'pointer',
		fontWeight: '600',
		fontSize: '16px',
		textDecoration: 'none',
		color: '#16001e',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	toolbarRight: {
		display: 'flex',
	},
	toolbarRightIcon: {
		padding: theme.spacing(1),
		cursor: 'pointer',
		fontSize: 30,
		fontWeight: 200,
	},
}))
