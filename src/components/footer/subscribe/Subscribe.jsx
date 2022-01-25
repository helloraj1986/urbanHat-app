import React from 'react'
import { Grid, TextField, Typography} from '@material-ui/core'
//
import useStyles from './styles'
import { BootstrapButton} from './styles'
import clsx from 'clsx'
//
import Facebook from '@material-ui/icons/Facebook'
import Links from './links/Links'
import { Favorite, Instagram, Twitter } from '@material-ui/icons'

const Subscribe = () => {
	const classes = useStyles()

	return (
		<>
			<div className={classes.main}>
				<Grid container className={classes.sub} spacing={2}>
					<Grid item sm={12} md={4}>
						<div className={clsx(classes.topLeft, classes.flexCol)}>
							<Typography variant='h4' className={classes.white}>
								Subscribe Newsletter
							</Typography>
							<Typography variant='body1' className={classes.white}>
								Subscribe newsletter to get 5% on all products.
							</Typography>
						</div>
					</Grid>
					<Grid item sm={12} md={6}>
						<div className={clsx(classes.topCenter, classes.flexRow)}>
							<TextField
								label='Email'
								variant='filled'
								className={classes.textField}
								fullWidth
							/>

							<BootstrapButton
								variant='contained'
								className={classes.btn}
								size='large'
							>
								Subscribe
							</BootstrapButton>
						</div>
					</Grid>
					<Grid item sm={12} md={2}>
						<div className={clsx(classes.topRight, classes.flexRow)}>
							<Facebook className={classes.white} />
							<Instagram className={classes.white} />
							<Twitter className={classes.white} />
						</div>
					</Grid>
				</Grid>
				<Links />
				<Typography
					variant='subtitle1'
					className={clsx(classes.white, classes.flexRow)}
					style={{ marginBottom: '10px', fontSize: '12px' }}
				>
					Copyright © 2022 All rights reserved | This website is made with
					<Favorite style={{ color: '#e63946', width: '16px', margin: '0 5px' }} />
					by Rajeev Kumar Mohanty.
				</Typography>
			</div>
		</>
	)
}

export default Subscribe
