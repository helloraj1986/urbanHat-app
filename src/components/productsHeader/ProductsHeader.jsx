import { Divider, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import clsx from 'clsx'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	removeProductHeader,
	setProductHeader,
	setProducts,
} from '../../redux/actions/ProductAction'
import axios from 'axios'

const ProductsHeader = () => {
	const products = useSelector((state) => state.allProducts.products)
	const titles = useSelector((state) => state.titles.productHeaders)
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)
	const { categoryId } = useParams()
	const { productId } = useParams()
	const classes = useStyles()

	// const products = useSelector((state) => state.allProducts.products)
	const product = products.filter((p) => p.id === parseInt(productId))[0]

	const fetchProductHeader = () => {
		setLoading(true)
		if (productId) {
			dispatch(
				setProductHeader({
					header: product.title,
					subHeader: product.category,
					link: `/products/category/${product.category}`,
				}),
			)
		} else if (categoryId) {
			dispatch(
				setProductHeader({
					header: categoryId,
					subHeader: 'Collections',
					link: `/products`,
				}),
			)
		} else {
			dispatch(setProductHeader({ header: 'Collections', subHeader: '', link: '' }))
		}
		setLoading(false)
	}
	const fetchAllProducts = async () => {
		const response = await axios
			.get('https://fakestoreapi.com/products')
			.catch((err) => console.log('Error Fetching:', err))
		dispatch(setProducts(response.data))
	}
	//set product header
	useEffect(() => {
		fetchProductHeader()
		return () => dispatch(removeProductHeader())
	}, [categoryId, productId])

	//set all products if all products not found
	useEffect(() => {
		if (!products) {
			fetchAllProducts()
		}
	}, [])

	return (
		<>
			{!loading && (
				<div className={classes.header} justifyContent='center'>
					<Typography variant='h3' color='initial' className={classes.textFont}>
						{titles.header}
					</Typography>
					<div className={classes.headerLinks}>
						<Typography
							variant='subtitle1'
							color='initial'
							className={clsx(classes.links, classes.textFont)}
							component={Link}
							to='/'
						>
							Home
						</Typography>
						{productId || categoryId ? (
							<Divider orientation='vertical' flexItem />
						) : (
							<Divider orientation='vertical' flexItem style={{ display: 'none' }} />
						)}

						<Typography
							variant='subtitle1'
							color='initial'
							className={clsx(classes.links, classes.textFont)}
							component={Link}
							to={titles.link}
						>
							{titles.subHeader}
						</Typography>
					</div>
				</div>
			)}
		</>
	)
}

export default ProductsHeader
