import React, { useEffect, useState } from 'react'
import { AppBar, Divider, Toolbar, Typography } from '@material-ui/core'
import useStyles from './styles'
import logo from '../../../images/logo/logo.svg'
//icons
import searchIcon from '../../../images/icons/search.svg'
import personIcon from '../../../images/icons/person.svg'
import cartIcon from '../../../images/icons/cart.svg'
import HeaderBar from '../headerBar/HeaderBar'
import PromoBar from '../promoBar/PromoBar'
import { HideOn } from 'react-hide-on-scroll'
import { Link } from 'react-router-dom'
//
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { filterByCategories } from '../../../redux/actions/ProductAction'
//
import { capitalize, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'

//

const Navbar = () => {
	const classes = useStyles()
	const dispatch = useDispatch()
	//
	//select categories from store
	const categories = useSelector((state) => state.categories.categoriesToBeDisplayed)

	//
	//fetch categories function
	const fetchCategories = async () => {
		const response = await axios
			.get('https://fakestoreapi.com/products/categories')
			.catch((err) => console.log('Category Fetch Error:', err))
		dispatch(filterByCategories(response.data))
	}
	const productId = useParams()
	const categoryId = useParams()

	//useEfect on Load
	useEffect(() => {
		fetchCategories()
	}, [])

	return (
		<>
			<AppBar className={classes.appBar} position='fixed'>
				<HideOn atHeight height={100}>
					<HeaderBar />
					<Divider orientation='horizontal' variant='fullWidth' />
				</HideOn>
				<Toolbar className={classes.toolbar}>
					<div className={classes.toolbarLeft}>
						{/* <a component={Link} to='/'>
							<img src={logo} alt='' className={classes.logo} />
						</a> */}
						<Button variant='text' color='default' component={Link} to='/'>
							<img src={logo} alt='' className={classes.logo} />
						</Button>
					</div>
					<div className={classes.toolbarMiddle}>
						<Typography
							component={Link}
							to='/'
							className={classes.title}
							variant='h6'
							noWrap
						>
							Home
						</Typography>
						<Typography
							className={classes.title}
							variant='h6'
							noWrap
							component={Link}
							to='/products'
						>
							Collections
						</Typography>

						{Object.values(categories).map((c, index) => {
							return (
								<Typography
									className={classes.title}
									variant='h6'
									noWrap
									key={index}
									component={Link}
									to={`/products/category/${c}`}
								>
									{capitalize(c)}
								</Typography>
							)
						})}

						<Typography className={classes.title} variant='h6' noWrap>
							Contact
						</Typography>
					</div>
					<div className={classes.toolbarRight}>
						<img src='' alt='' />
						{/* <SearchRounded className={classes.toolbarRightIcon} /> */}
						<img src={searchIcon} alt='' className={classes.toolbarRightIcon} />
						<img src={personIcon} alt='' className={classes.toolbarRightIcon} />
						<img src={cartIcon} alt='' className={classes.toolbarRightIcon} />
					</div>
				</Toolbar>
				<HideOn atHeight height={100}>
					<PromoBar />
				</HideOn>
			</AppBar>
		</>
	)
}

export default Navbar
