import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
import { Container, Divider, Typography } from '@material-ui/core'
import TrendingCard from './trendingCard/TrendingCard'
//card carousel
import Carousel from 'react-grid-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { filterTrending, setProducts } from '../../../redux/actions/ProductAction'
import axios from 'axios'
import { Skeleton } from '@material-ui/lab'

const Trending = () => {
	const [category, setCategory] = useState("men's clothing")
	const [loading, setLoading] = useState(true)
	const trendingItems = useSelector((state) => state.trending.trendingItems)

	const dispatch = useDispatch()

	//
	const classes = useStyles()
	//
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

	const fetchTrendingProducts = async () => {
		setLoading(true)
		const response = await axios
			.get('https://fakestoreapi.com/products')
			.catch((err) => console.log('Trending.js fetching all products error:', err))
		dispatch(setProducts(response.data))
		dispatch(filterTrending({ category: category, products: response.data }))
		setLoading(false)
	}

	useEffect(() => {
		fetchTrendingProducts()
	}, [category])

	return (
		<>
			<Container
				maxwidth='xl'
				gutterBottom
				// className={classes.trendingContainer}
				className={`${classes.trendingContainer} ${isVisible ? classes.animate : ''}`}
				ref={domRef}
			>
				<div className={classes.header}>
					<Typography variant='h4' color='initial' className={classes.title}>
						Trending This Week
					</Typography>
					<div className={classes.categorySelection}>
						<Typography
							variant='h5'
							color='initial'
							className={
								category === "men's clothing" ? classes.active : classes.category
							}
							onClick={() => setCategory("men's clothing")}
						>
							Men
						</Typography>
						<Typography
							variant='h5'
							color='initial'
							className={
								category === "women's clothing" ? classes.active : classes.category
							}
							onClick={() => setCategory("women's clothing")}
						>
							Women
						</Typography>
						<Typography
							variant='h5'
							color='initial'
							className={category === 'jewelery' ? classes.active : classes.category}
							onClick={() => setCategory('jewelery')}
						>
							Jewelery
						</Typography>
						<Typography
							variant='h5'
							color='initial'
							className={
								category === 'electronics' ? classes.active : classes.category
							}
							onClick={() => setCategory('electronics')}
						>
							Electronics
						</Typography>
					</div>
				</div>
				<Divider orientation='horizontal' variant='fullWidth' />

				<div className={classes.carouselContainer}>
					<Carousel
						cols={3}
						rows={1}
						gap={30}
						autoplay={1200}
						showDots
						loop
						responsiveLayout={[
							{
								breakpoint: 1200,
								cols: 3,
							},
							{
								breakpoint: 990,
								cols: 2,
							},
						]}
						mobileBreakpoint={650}
					>
						{!loading &&
							trendingItems.map((cardData) => {
								return (
									<Carousel.Item key={cardData.id}>
										<TrendingCard cardData={cardData} />
									</Carousel.Item>
								)
							})}
						{loading &&
							[1, 2, 3].map((n) => {
								return (
									<Carousel.Item key={n}>
										<Skeleton variant='rect' width={400} height={400} />
									</Carousel.Item>
								)
							})}
					</Carousel>
				</div>
			</Container>
		</>
	)
}

export default Trending
