import { Divider,Typography } from '@material-ui/core'
import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles.jsx'

const HeaderBar = () => {
	const classes = useStyles()
	return (
		<div className={classes.headerBar}>
			<div className={classes.headerBarLeft}>
				<Typography variant='body2' className={classes.title}>
					About Us
				</Typography>
				<Typography variant='body2' className={classes.title}>
					Privacy
				</Typography>
				<Typography variant='body2' className={classes.title}>
					FAQ
				</Typography>
				<Typography variant='body2' className={classes.title}>
					Careers
				</Typography>
			</div>
			<div className={classes.headerBarRight}>
				<Typography variant='body2' className={classes.title}>
					My WishList
				</Typography>
				<Divider orientation='vertical' flexItem />
				<Typography variant='body2' className={classes.title}>
					Track Your Order
				</Typography>
				<Divider orientation='vertical' flexItem />
				<div className={classes.headerBarRightIconContainer}>
					<Facebook className={classes.headerBarRightIcon} />
					<Instagram className={`${classes.headerBarRightIcon} ${classes.red}`} />
					<Twitter className={classes.headerBarRightIcon} />
					<LinkedIn className={classes.headerBarRightIcon} />
					<YouTube className={`${classes.headerBarRightIcon} ${classes.red}`} />
				</div>
			</div>
		</div>
	)
}

export default HeaderBar
