import React, { useEffect } from 'react'
import { Grid, TextField, Typography, useMediaQuery } from '@material-ui/core'
//
import useStyles from './styles'
import { BootstrapButton } from './styles'
import clsx from 'clsx'
//
import Facebook from '@material-ui/icons/Facebook'
import Links from './links/Links'
import { Favorite, Instagram, Twitter } from '@material-ui/icons'
import { useTheme } from '@material-ui/core/styles'

const Subscribe = () => {
	const classes = useStyles()
	const theme = useTheme()
	const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))

	return (
		<>
			<div className={classes.main}>
				<Grid container className={classes.sub} spacing={2}>
					<Grid item xs={12} sm={12} md={4}>
						<div
							className={
								isSmScreen
									? clsx(classes.flexCol)
									: clsx(classes.topLeft, classes.flexCol)
							}
						>
							<Typography
								variant='h4'
								className={clsx(classes.white, classes.subscribeHeader)}
							>
								Subscribe Newsletter
							</Typography>
							<Typography
								variant='body1'
								className={clsx(classes.white, classes.subscribeDesc)}
							>
								Subscribe newsletter to get 5% on all products.
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						{/* <div className={clsx(classes.topCenter, classes.flexRow)}> */}
						<div
							className={
								isSmScreen
									? clsx(classes.flexCol)
									: clsx(classes.topCenter, classes.flexRow)
							}
						>
							<TextField
								label='Email'
								variant='filled'
								className={classes.textField}
								fullWidth
							/>

							<BootstrapButton
								variant='contained'
								className={classes.btn}
								size='small'
							>
								Subscribe
							</BootstrapButton>
						</div>
					</Grid>
					<Grid item xs={12} sm={12} md={2}>
						<div className={clsx(classes.topRight, classes.flexRow)}>
							<Facebook
								className={
									isSmScreen
										? clsx(classes.white, classes.fontsSizeforSmallScreen)
										: clsx(classes.white)
								}
							/>
							<Instagram
								className={
									isSmScreen
										? clsx(classes.white, classes.fontsSizeforSmallScreen)
										: clsx(classes.white)
								}
							/>
							<Twitter
								className={
									isSmScreen
										? clsx(classes.white, classes.fontsSizeforSmallScreen)
										: clsx(classes.white)
								}
							/>
						</div>
					</Grid>
				</Grid>
				<Links />
				<Typography
					variant='subtitle1'
					className={clsx(classes.white, classes.flexRow)}
					style={{ marginBottom: '10px', fontSize: isSmScreen ? '8px' : '12px' }}
				>
					Copyright © 2022 All rights reserved | This website is made with
					<Favorite
						style={{
							color: '#e63946',
							width: isSmScreen ? '10.6px' : '16px',
							margin: '0 5px',
						}}
					/>
					by Rajeev Kumar Mohanty.
				</Typography>
			</div>
		</>
	)
}

export default Subscribe
