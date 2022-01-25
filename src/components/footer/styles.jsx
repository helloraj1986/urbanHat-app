import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
	gridItem: {
		display: 'flex',
		alignItems: 'center',
    justifyContent: 'center',
	},
	item: {
		height: '200px',
    width: '250px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
    
	},
	icon: {
		height: '40px',
		width: '40px',
		margin: '20px',
		fontWeight: '200',
		color: 'grey',
	},
	title: {
		fontFamily: 'Jost, sans-sarif',
		fontWeight: '500',
		margin: '2px 0',
	},
	desc: {
		fontFamily: 'Jost, sans-sarif',
	},
}))