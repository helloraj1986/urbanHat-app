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
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	toolbarForMobile: {
		width: '100vw',
		padding: '0px',
		margin: '0px',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-around',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	toolbarForMobileLeft: {
		display: 'flex',
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
		[theme.breakpoints.down('sm')]: {
			width: '100px',
			height: '50px',
			cursor: 'pointer',
		},
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
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
			padding: theme.spacing(1),
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
