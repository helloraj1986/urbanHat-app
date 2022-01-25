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
import { setProducts, removeProductHeader } from '../../redux/actions/ProductAction'

const AllProducts = () => {
	const classes = useStyles()
	//update redux
	const products = useSelector((state) => state.allProducts.products)

	const dispatch = useDispatch()
	//loading
	const [loading, setLoading] = useState(true)
	//get specific category if available
	const { categoryId } = useParams()
	const { productId } = useParams()

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
						{products.map((product) => {
							return (
								<Grid item xs={12} sm={6} md={4} key={product.id}>
									<ProductCard
										product={product}
										component={Link}
										to={`/products/${product.id}`}
									/>
								</Grid>
							)
						})}
					</Grid>
					<div className={classes.paginationCon}>
						<Pagination count={10} variant='outlined' />
					</div>
				</Container>
			)}
		</>
	)
}

export default AllProducts
