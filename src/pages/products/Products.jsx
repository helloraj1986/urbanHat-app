import { Container, Grid } from '@material-ui/core'
import React from 'react'
import AllProducts from '../../components/allProducts/AllProducts'
import PriceAndCategoryBar from '../../components/priceAndCategoryBar/PriceAndCategoryBar'
//
import useStyles from './styles'
//
import ProductsHeader from '../../components/productsHeader/ProductsHeader'

const Products = () => {
	const classes = useStyles()
	return (
		<>
			<ProductsHeader />
			<Container maxWidth='xl' className={classes.wrapper}>
				<Grid container spacing={2}>
					<Grid item sm={3} xs={12}>
						<PriceAndCategoryBar />
					</Grid>
					<Grid item sm={9} xs={12}>
						<AllProducts />
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

export default Products
