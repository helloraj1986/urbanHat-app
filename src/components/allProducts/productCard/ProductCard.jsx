import React from 'react'
import useStyles from './styles'
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core'

//Icons
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined'
//importing loadash
import _ from 'lodash'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, progress }) => {
	const classes = useStyles()
	const { id, title, price, image } = product
	return (
		<>
			<Card className={classes.root} raised>
				<Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
					<CardActionArea>
						<CardMedia className={classes.media} image={image} />
						<CardContent>
							<Typography gutterBottom variant='subtitle1' component='p'>
								{_.truncate(title, { length: 30 })}
							</Typography>
							<Typography gutterBottom variant='h6' component='h2'>
								$ {price}
							</Typography>
							{/* <Typography variant='body2' color='textSecondary' component='p'>
							{description}
						</Typography> */}
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size='small' color='primary'>
							<ShoppingCartOutlinedIcon />
						</Button>
						<Button size='small' color='primary'>
							<FavoriteBorderOutlinedIcon />
						</Button>
						<Button size='small' color='primary'>
							<ZoomInOutlinedIcon />
						</Button>
					</CardActions>
				</Link>
			</Card>
		</>
	)
}

export default ProductCard
