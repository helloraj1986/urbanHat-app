import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.jsx'

const PromoBar = () => {
  const classes = useStyles()
  return (
		<div className={classes.promoBar}>
			<Typography variant='body2' className={classes.text}>
				Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer <Button className={classes.span} component={Link} to ='/products'>Shop Now</Button>
			</Typography>
		</div>
  )
}

export default PromoBar
