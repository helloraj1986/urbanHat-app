import React, { useState } from 'react'
import useStyles from './styles'
//
import clsx from 'clsx'

import { Typography, Button } from '@material-ui/core'
//
import Carousel from 'react-material-ui-carousel'
//
import man from '../../images/hero/man.jpeg'
import woman from '../../images/hero/women.jpeg'
import kid from '../../images/hero/kid.jpeg'
import { Link } from 'react-router-dom'
//

let heroItems = [
	{
		id: 1,
		name: "Minimal Men's Style",
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eligendi debitis ullam dignissimos quisquam nisi alias, numquam quasi fugit similique vero aspernatur sed, neque suscipit!',
		image: man,
	},
	{
		id: 2,
		name: "Minimal Women's Style",
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eligendi debitis ullam dignissimos quisquam nisi alias, numquam quasi fugit similique vero aspernatur sed, neque suscipit!',
		image: woman,
	},
	{
		id: 3,
		name: "Minimal WoMen's Style",
		description:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim eligendi debitis ullam dignissimos quisquam nisi alias, numquam quasi fugit similique vero aspernatur sed, neque suscipit!',
		image: kid,
	},
]

const Hero = () => {
	const classes = useStyles()
	const [itemData, setItemData] = useState(heroItems)

	return (
		<>
			<Carousel showDots>
				{itemData.map((item, i) => {
					const { id, name, description, image } = item

					return (
						<div className={classes.hero} key={id}>
							<div key={id} className={classes.container}>
								<div className={classes.imgContainer}>
									<img src={image} alt='' className={classes.img} />
								</div>
								<div
									className={
										id === 2
											? clsx(classes.textContainer)
											: clsx(classes.textContainer, classes.textContainerLeft)
									}
								>
									<Typography
										variant='h5'
										color='initial'
										className={classes.sale}
									>
										Fashion Sale
									</Typography>
									<Typography
										variant='h5'
										color='initial'
										className={classes.name}
									>
										{name}
									</Typography>
									<Typography
										variant='body2'
										color='initial'
										className={classes.desc}
										align='center'
										gutterBottom
									>
										{description}
									</Typography>
									<Button
										type='submit'
										variant='contained'
										className={classes.button}
										size='large'
										style={{ width: 150, height: 50 }}
										component={Link}
										to='/products'
									>
										shop now
									</Button>
								</div>
							</div>
						</div>
					)
				})}
			</Carousel>
		</>
	)
}

export default Hero
