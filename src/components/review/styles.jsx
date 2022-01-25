import { makeStyles} from '@material-ui/core'

export default makeStyles((theme) => ({
	textFont: {
		fontFamily: '"Jost", sans-serif',
	},

	"@keyframes fade-in":{
		'0%': {opacity: 0},
		'100%': {opacity : 1}
	},
	animate:{
		animation: '$fade-in 2s ease-in-out'
	},
	reviewContainer: {
		margin: '20px auto',
		height: '350px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '20px 30px',
		backgroundColor: '#f3ead8',
	},
	title: {
		margin: '30px 0',
		fontFamily: '"Jost", sans-serif',
		fontWeight: '600',
	},
	divider: {
		backGroundColor: 'black',
		marginTop: '5px',
	},
	review: {
		padding: '0 20px',
		textAlign: 'center',
		fontFamily: '"Jost", sans-serif',
		fontWeight: '500',
	},
	personContainer: {
		display: 'flex',
		margin: '30px 0',
	},
	avatar: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	person: {
		display: 'flex',
		flexDirection: 'column',
		paddingLeft: theme.spacing(2),
	},
	_name: {
		color: '#000000',
		fontWeight: '600',
		fontFamily: '"Jost", sans-serif',
	},
	position: {
		color: '#171616',
		fontSize: '16px',
		fontFamily: '"Jost", sans-serif',
	},
}))
