import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	main: {
		[theme.breakpoints.down('sm')]: {
			marginLeft: '60px',
		},
	},
	links: {
		padding: '40px 90px',
		backgroundColor: '#16001e',
		[theme.breakpoints.down('sm')]: {
			padding: '40px 10px',
		},
	},
	logo: {
		width: '225px',
		color: 'white',
		[theme.breakpoints.down('sm')]: {
			width: '165px',
		},
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
		},
	},
	list: {
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
			justifyContent: 'center',
		},
	},
	listItemtext: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '7px',
		},
	},
}))
