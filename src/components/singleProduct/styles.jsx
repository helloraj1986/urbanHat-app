import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	main: {
		width: '80%',
		height: '450px',
		backgroundColor: '#e63946',
		margin: '20px auto',
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down('sm')]: {
			width: '90%',
			height: '520px',
		},
	},
	// top: {
	// 	width: '100%',
	// 	height: '350px',
	// 	backgroundColor: '#e63946',
	// 	margin: '30px auto',
	// 	display: 'flex',
	// 	[theme.breakpoints.down('sm')]: {
	// 		height: '350px',
	// 		alignItems: 'center',
	// 	},
	// },
	top: {
		width: '100%',
		height: '350px',
		backgroundColor: '#e63946',
		margin: '30px auto',
		display: 'flex',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			margin: '0 auto',
			height: '500px',
			alignItems: 'center',
		},
	},
	// bottom: {
	// 	width: '100%',
	// 	height: '80px',
	// 	[theme.breakpoints.down('sm')]: {
	// 		height: '60px',
	// 	},
	// },
	bottom: {
		width: '100%',
		height: '80px',
		[theme.breakpoints.down('sm')]: {
			height: '70px',
		},
	},

	left: {
		height: '300px',
		width: '300px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '25px',
		[theme.breakpoints.down('sm')]: {
			height: '300px',
			width: '300px',
		},
	},
	// img: {
	// 	width: '100%',
	// 	maxHeight: '300px',
	// 	objectFit: 'cover',
	// },
	img: {
		maxWidth: '100%',
		maxHeight: '100%',
		objectFit: 'cover',
	},
	right: {
		width: '600px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		[theme.breakpoints.down('sm')]: {
			width: '90%',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '15px 15px',
			alignText: 'center',
		},
	},
	icon: {
		fontSize: '12px',
	},

	white: {
		color: 'white',
	},
	fontFam: {
		fontFamily: 'Jost, sans-sarif',
	},
	fontBig: {
		fontSize: '32px',
		fontWeight: '500',
		[theme.breakpoints.down('sm')]: {
			fontSize: '10px',
			alignText: 'center',
		},
	},
	fontMiddle: {
		fontSize: '20px',
		fontWeight: '600',
		[theme.breakpoints.down('sm')]: {
			fontSize: '11px',
		},
	},
	fontXSmall: {
		fontSize: '10px',
		fontWeight: '600',
	},
	margBottom: {
		marginBottom: '20px',
		[theme.breakpoints.down('sm')]: {
			marginBottom: '5px',
		},
	},
	accordDetails: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '9px',
		},
	},
	btn: {
		backgroundColor: 'white',
		'&:hover': {
			backgroundColor: '#001219',
			color: 'white',
		},
		[theme.breakpoints.down('sm')]: {
			width: '120px',
			fontSize: '12px',
		},
	},
	btnLabel: {
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
		},
	},

	underline: {
		textDecorationLine: 'underline',
	},
}))
