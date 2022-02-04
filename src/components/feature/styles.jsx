import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
	'@keyframes move-up': {
		'0%': { opacity: '0', transform: 'translateY(30px)' },
		'100%': { opacity: '1', transform: 'translateY(0px)' },
	},
	gridItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	animate: {
		animation: '$move-up 2s ease-in-out',
		// 	'&:nth-of-type(1)': {
		// 		animationDelay: '1',
		// 	},
		// 	'&:nth-of-type(2)': {
		// 		animationDelay: '2',
		// 	},
		// 	'&:nth-of-type(3)': {
		// 		animationDelay: '3',
		// 	},
		// 	'&:nth-of-type(4)': {
		// 		animationDelay: '4',
		// 	},
	},

	item: {
		height: '200px',
		width: '250px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			height: '150px',
			width: '170px',
		},
	},
	icon: {
		height: '40px',
		width: '40px',
		margin: '20px',
		fontWeight: '200',
		color: 'grey',
		[theme.breakpoints.down('sm')]: {
			height: '20px',
			width: '20px',
			margin: '10px',
		},
	},
	title: {
		fontFamily: 'Jost, sans-sarif',
		fontWeight: '500',
		margin: '2px 0',
		[theme.breakpoints.down('sm')]: {
			fontSize: '16px',
		},
	},
	desc: {
		fontFamily: 'Jost, sans-sarif',
		[theme.breakpoints.down('sm')]: {
			fontSize: '12px',
		},
	},
}))
