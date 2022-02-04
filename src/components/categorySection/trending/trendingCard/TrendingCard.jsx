import { Card, CardActionArea, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import ShareIcon from '@material-ui/icons/Share'
import { Link } from 'react-router-dom'

const TrendingCard = ({ cardData }) => {
	const classes = useStyles()
	const { price, image } = cardData
	return (
		<Card raised variant='outlined'>
			<CardActionArea
				className={classes.cardActionArea}
				component={Link}
				to={`/products/${cardData.id}`}
			>
				<CardMedia image={image} className={classes.cardMedia} />
				<div className={classes.actionButton}>
					<FavoriteIcon style={{ color: 'red' }} className={classes.Icons} />
					<ShoppingCartOutlinedIcon className={classes.Icons} />
					<ShareIcon style={{ color: '#5e89e4' }} className={classes.Icons} />
				</div>
				<div className={classes.cardInfo}>
					{/* <Typography variant='h6' color='initial' className={classes.title}>
						{title}
					</Typography> */}

					<div className={classes.price}>
						<Typography variant='h6' color='initial' className={classes.disPrice}>
							${price.toFixed(2)}
						</Typography>
						<Typography variant='h6' color='initial' className={classes.oriPrice}>
							${(price + 50).toFixed(2)}
						</Typography>
					</div>
				</div>
			</CardActionArea>
		</Card>
	)
}

export default TrendingCard
