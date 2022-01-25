import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'
import logo from '../../../../images/logo/logo2.svg'

const Links = () => {
	const classes = useStyles()
	const items = [
		{
			id: 1,
			title: 'Shop Men',
			subItems: ['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual'],
		},
		{
			id: 2,
			title: 'Shop Women',
			subItems: ['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual'],
		},
		{
			id: 3,
			title: 'Baby Collection',
			subItems: ['Clothing Fashion', 'Winter', 'Summer', 'Formal', 'Casual'],
		},
		{
			id: 4,
			title: 'Quick Links',
			subItems: ['Track Your Order', 'Support', 'FAQ', 'Carrier', 'About', 'Contact Us'],
		},
	]

	const [data] = useState(items)
	return (
		<div className={classes.main}>
			<Grid container spacing={2} className={classes.links}>
				<Grid item md={4}>
					<div>
						<img src={logo} alt='' className={classes.logo} />
					</div>
				</Grid>
				{data.map((d) => {
					const { id, title, subItems } = d
					return (
						<Grid item md={2} key={id}>
							<div className={classes.manItems}>
								<Typography variant='h6' style={{ color: '#fdf0d5' }}>
									{title}
								</Typography>
								<List alignitems='flex-start' dense disablePadding>
									{subItems.map((s, index) => {
										return (
											<ListItem disableGutters key={index}>
												<ListItemText
													primary={s}
													style={{ color: '#BBB9B5' }}
												/>
											</ListItem>
										)
									})}
								</List>
							</div>
						</Grid>
					)
				})}
			</Grid>
		</div>
	)
}

export default Links
