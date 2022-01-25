import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	main: {
		width: '80%',
		height: '450px',
		backgroundColor: '#e63946',
		margin: '20px auto',
		display: 'flex',
		flexDirection: 'column',
	},
	top: {
		width: '100%',
		height: '350px',
		backgroundColor: '#e63946',
		margin: '30px auto',
		display: 'flex',
	},
	bottom: {
		width: '100%',
		height: '80px',
	},

	left: {
		height: '300px',
		width: '300px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '25px',
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
	},
	fontMiddle: {
		fontSize: '20px',
		fontWeight: '600',
	},
	fontXSmall: {
		fontSize: '10px',
		fontWeight: '600',
	},
	margBottom: {
		marginBottom: '20px',
	},
	btn: {
		backgroundColor: 'white',
		'&:hover': {
			backgroundColor: '#001219',
			color: 'white',
		},
	},

	underline: {
		textDecorationLine: 'underline',
	},
}))
