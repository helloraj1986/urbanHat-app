import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	main: {
		// width:'300px',
		// backgroundColor:'white',
		// display:'flex',
		// flexDirection:'column',
		// justifyContent: 'center',
		display: 'flex',
		flexDirection: 'column',
		padding: '40px 40px',
		marginTop: '50px',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
		marginBottom: theme.spacing(2),
	},
	sliderDiv: {
		margin: '20px 0px',
	},
	sliderHeading: {
		fontFamily: 'Jost, sans-sarif',
		fontWeight: 600,
		fontSize: '18px',
	},
	slider: {
		marginTop: '20px',
	},

	brand: {},
	brandControl: {
		marginTop: '20px',
	},
	brandHeading: {
		fontFamily: 'Jost, sans-sarif',
		fontWeight: 600,
		fontSize: '18px',
	},
	helperText: {
		fontSize: '12px',
		color: '#16161A',
		fontFamily: 'Jost, sans-sarif',
	},
}))
