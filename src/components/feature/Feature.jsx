import React, { useEffect, useRef, useState } from 'react'
import { Container, Divider, Grid, Hidden, SvgIcon, Typography } from '@material-ui/core'
import { LiveHelpOutlined, LocalShippingOutlined, Payment, UpdateSharp } from '@material-ui/icons'

import useStyles from './styles'

const data = [
	{
		id: 1,
		// icon: <LocalShippingOutlined />,
		icon: LocalShippingOutlined,
		title: 'Fast and Free Delivery',
		desc: 'Free delivery on all orders',
	},
	{
		id: 2,
		// icon: <Payment />,
		icon: Payment,
		title: 'Secure Payment',
		desc: 'Free delivery on all orders',
	},
	{
		id: 3,
		// icon: <UpdateSharp />,
		icon: UpdateSharp,
		title: 'Moneback Gurantee',
		desc: 'Free delivery on all orders',
	},
	{
		id: 4,
		// icon: <LiveHelpOutlined />,
		icon: LiveHelpOutlined,
		title: 'Online Support',
		desc: 'Free delivery on all orders',
	},
]

const Feature = () => {
	const classes = useStyles()

	const [isVisible, setIsVisible] = useState(false)
	const domRef = useRef()
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setIsVisible(entry.isIntersecting))
		})
		const itemRef = domRef.current
		observer.observe(itemRef)
		return () => observer.unobserve(itemRef) //cleanup
	}, [])

	return (
		<Container maxwidth='lg'>
			<Grid container justifyContent='center' spacing={1}>
				{data.map((d, index) => {
					return (
						<Grid item xs={6} sm={6} md={3} className={classes.gridItem} key={d.id}>
							<div
								className={`${classes.item} ${isVisible ? classes.animate : ''}`}
								ref={domRef}
							>
								<SvgIcon component={d.icon} className={classes.icon} />
								<Typography variant='h5' color='initial' className={classes.title}>
									{d.title}
								</Typography>
								<Typography
									variant='subtitle1'
									color='textSecondary'
									className={classes.desc}
								>
									{d.desc}
								</Typography>
							</div>
							{/* <Hidden mdDown>
								{index !== 3 && (
									<Divider
										orientation='vertical'
										style={{ height: '70%', marginLeft: '25px' }}
									></Divider>
								)}
							</Hidden> */}
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}

export default Feature
