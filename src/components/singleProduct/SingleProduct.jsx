import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useStyles from './styles'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from '../../redux/actions/ProductAction'
//
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//
import clsx from 'clsx'
import { capitalize } from '@material-ui/core'
import SingleProductAnimation from '../skeletationAnimation/SingleProductAnimation'
//

const SingleProduct = () => {
	const product = useSelector((state) => state.singleProduct.product)
	const { productId } = useParams()
	const [loading, setLoading] = useState(true)

	//styles
	const classes = useStyles()
	//
	const dispatch = useDispatch()
	//
	//fetch single product and dispatch to redux
	//
	const link = `https://fakestoreapi.com/products/${productId}`
	const fetchProductDetail = async () => {
		setLoading(true)
		const response = await axios
			.get(link)
			.catch((err) => console.log('Single Product Fetch error:', err))
		//
		dispatch(selectedProduct(response.data))
		setLoading(false)
	}

	//
	//useEffect
	useEffect(() => {
		fetchProductDetail()
	}, [link])

	const theme = useTheme()
	const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'))
	return (
		<>
			{loading && <SingleProductAnimation />}

			{!loading && (
				<Container maxWidth='xl' style={{ backgroundColor: '', height: '650px' }}>
					<div className={classes.main}>
						<div className={classes.top}>
							<div className={classes.left}>
								<img src={product?.image} alt='' className={classes.img} />
							</div>
							<div className={classes.right}>
								<Typography
									variant='h5'
									color='initial'
									className={clsx(
										classes.fontFam,
										classes.white,
										classes.fontBig,
										classes.margBottom,
									)}
								>
									{capitalize(product?.title)}
								</Typography>
								<Typography
									variant='caption'
									color='initial'
									className={clsx(classes.fontFam, classes.white)}
								>
									{capitalize(product?.category)}
								</Typography>
								<Typography
									variant='body1'
									color='initial'
									className={clsx(
										classes.fontFam,
										classes.white,
										classes.fontBig,
										classes.margBottom,
									)}
								>
									$ {product?.price}
								</Typography>
								<div
									style={{
										display: 'flex',
										width: '170px',
										justifyContent: 'space-between',
										alignitems: 'center',
									}}
								>
									<Typography
										variant='caption'
										color='initial'
										className={clsx(
											classes.white,
											classes.fontXSmall,
											classes.margBottom,
										)}
									>
										{`Customer Rating : ${product?.rating.rate}`}
									</Typography>
									<Typography
										variant='caption'
										color='initial'
										className={clsx(
											classes.white,
											classes.fontXSmall,
											classes.margBottom,
										)}
									>
										{product?.rating.count} likes
									</Typography>
								</div>
								<Button
									variant='outlined'
									size={`${isSmScreen ? 'small' : 'large'}`}
									classes={{
										root: classes.btn,
										text: classes.fontFam,
										outlinedSizeSmall: classes.btnLabel,
									}}
								>
									Add to Cart
								</Button>
							</div>
						</div>
						<div className={classes.bottom}>
							<Accordion square>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography
										className={clsx(
											classes.fontFam,
											classes.fontMiddle,
											classes.underline,
										)}
									>
										Details
									</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography
										variant='body2'
										className={clsx(classes.fontFam, classes.accordDetails)}
									>
										{product?.description}
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					</div>
				</Container>
			)}
		</>
	)
}

export default SingleProduct
