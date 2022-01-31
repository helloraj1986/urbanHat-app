import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Container } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'

import ProductCard from './productCard/ProductCard'
import useStyles from './styles'
import Pagination from '@material-ui/lab/Pagination'
import SkeletationAnimation from '../skeletationAnimation/SkeletationAnimation'
//
import axios from 'axios'
//import action
import { setProducts } from '../../redux/actions/ProductAction'

const AllProducts = () => {
	const classes = useStyles()
	//update redux
	const products = useSelector((state) => state.allProducts.products)
	//select products as per user selection from reducer
	// const sortedProducts = useSelector((state) => state.allProducts.sortedProducts)
	const sortedProducts = useSelector((state) => state.allProducts.userSelectedProducts)

	const dispatch = useDispatch()
	//loading
	const [loading, setLoading] = useState(true)
	//get specific category if available
	const { categoryId } = useParams()
	// const { productId } = useParams()

	//fetchProducts function
	const fetchProducts = async () => {
		setLoading(true)
		if (!categoryId) {
			const response = await axios
				.get('https://fakestoreapi.com/products')
				.catch((err) => console.log('Error Fetching:', err))
			dispatch(setProducts(response.data))
		} else {
			const response = await axios
				.get(`https://fakestoreapi.com/products/category/${categoryId}`)
				.catch((err) => console.log('Error Fetching:', err))
			dispatch(setProducts(response.data))
		}
		setLoading(false)
	}

	//get all products
	useEffect(() => {
		fetchProducts()
	}, [categoryId])

	//function to render items
	const renderItems = (items) => {
		return items.map((i) => {
			return (
				<Grid item xs={12} sm={6} md={4} key={i.id}>
					<ProductCard product={i} component={Link} to={`/products/${i.id}`} />
				</Grid>
			)
		})
	}
	return (
		<>
			{loading && (
				<Container maxWidth='xl' className={classes.wrapper}>
					<Grid container spacing={2}>
						{[1, 2, 3, 4, 5, 6].map((id, index) => {
							return (
								<Grid item xs={12} sm={6} md={4} key={index}>
									<SkeletationAnimation />
								</Grid>
							)
						})}
					</Grid>
					<div className={classes.paginationCon}>
						<Pagination count={10} variant='outlined' />
					</div>
				</Container>
			)}

			{!loading && (
				<Container maxWidth='xl' className={classes.wrapper}>
					<Grid container spacing={2}>
						{/* if there is sorted products from reducer select that or choose all products */}
						{/* {Object.keys(sortedProducts).length !== 0 || !header */}
						{Object.keys(sortedProducts).length !== 0
							? renderItems(sortedProducts) //renderItems is function render products
							: renderItems(products)}
					</Grid>
					<div className={classes.paginationCon}>
						<Pagination count={10} variant='outlined' disabled />
					</div>
				</Container>
			)}
		</>
	)
}

export default AllProducts
