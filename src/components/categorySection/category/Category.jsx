import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'

import { Container, Grid } from '@material-ui/core'
import Card from './card/Card'
import Carousel from 'react-material-ui-carousel'
import wf from '../../../images/category/l.jpeg'
import mf from '../../../images/category/m.jpeg'
import el from '../../../images/category/e.jpeg'

const Category = () => {
	const data = [
		{ id: 1, title: "Women's Fashion", img: wf, link: "/products/category/women's clothing" },
		{ id: 2, title: "Men's Fashion", img: mf, link: "/products/category/men's clothing" },
		{ id: 3, title: 'Electronics', img: el, link: '/products/category/electronics' },
	]

	const [categoryData, setCategoryData] = useState(data)

	const classes = useStyles()
	//lazy loading
	const [isVisible, setIsVisible] = useState(false)
	const domRef = useRef()
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setIsVisible(entry.isIntersecting))
		})
		const curr = domRef.current
		observer.observe(curr)
		return () => observer.unobserve(curr) //cleanup
	}, [])
	//

	return (
		<>
			<Carousel>
				<Container
					className={`${classes.categoryContainer} ${isVisible ? classes.animate : ''}`}
					ref={domRef}
					fixed
				>
					<Grid container spacing={2} justifyContent='center'>
						{categoryData.map((c) => {
							return (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									className={classes.grid}
									key={c.id}
								>
									<Card c={c} />
								</Grid>
							)
						})}
					</Grid>
				</Container>
			</Carousel>
		</>
	)
}

export default Category
