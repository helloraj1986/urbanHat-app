import { Avatar, Container, Divider, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'
import Carousel from 'react-grid-carousel'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux'
import { setReviews } from '../../redux/actions/ReviewAction'

const Review = () => {
	const classes = useStyles()
	const reviewData = useSelector((state) => state.allReviews.reviews)

	const [loading, setLoading] = useState(true)
	// const [reviewsToShow, setReviewsToShow] = useState({})

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
	const dispatch = useDispatch()
	const fetchReviews = async () => {
		setLoading(true)
		const response = await axios
			.get('https://testimonialapi.toolcarton.com/api')
			.catch((err) => console.log('Fetch Reviews Error:', err))
		dispatch(setReviews(response.data))
		setLoading(false)
	}

	useEffect(() => {
		fetchReviews()
	}, [])

	return (
		<Container
			justify='center'
			maxWidth='xl'
			style={{ maxWidth: '100vw', backgroundColor: '#f3ead8' }}
			ref={domRef}
			className={`${isVisible ? classes.animate : ''}`}
		>
			<Carousel loop>
				{!loading &&
					reviewData.map((item) => {
						return (
							<Carousel.Item key={item.id}>
								<Paper elevation={0} square className={classes.reviewContainer}>
									<Typography variant='h4' className={classes.title}>
										{item.name}
										<Divider className={classes.divider}></Divider>
									</Typography>
									<Typography variant='subtitle1' className={classes.review}>
										{item.message}
									</Typography>
									<div className={classes.personContainer}>
										<Avatar
											alt='Remy Sharp'
											src={item.avatar}
											className={classes.avatar}
										/>
										<div className={classes.person}>
											<Typography
												variant='caption'
												color='initial'
												className={classes.name}
											>
												{item.designation}
											</Typography>
											<Typography
												variant='caption'
												className={classes.position}
											>
												{item.location}
											</Typography>
										</div>
									</div>
								</Paper>
							</Carousel.Item>
						)
					})}
			</Carousel>
		</Container>
	)
}

export default Review
