import React, { useEffect } from 'react'
import { AppBar, Divider, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
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
import MenuIcon from '@material-ui/icons/Menu'

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

	//for Mobile display
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

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
				{/* For Mobile Display 
				//
				//*/}
				<Toolbar className={classes.toolbarForMobile}>
					<div className={classes.toolbarForMobileLeft}>
						<Button variant='text' color='default' component={Link} to='/'>
							<img src={logo} alt='' className={classes.logo} />
						</Button>
					</div>
					<div className={classes.toolbarForMobileRight}>
						<Button
							id='demo-positioned-button'
							aria-controls={open ? 'demo-positioned-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
						>
							<MenuIcon />
						</Button>
						<Menu
							id='demo-positioned-menu'
							aria-labelledby='demo-positioned-button'
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
						>
							<MenuItem
								onClick={handleClose}
								component={Link}
								to='/'
								className={classes.title}
								dense
							>
								Home
							</MenuItem>
							<MenuItem
								onClick={handleClose}
								component={Link}
								to='/products'
								className={classes.title}
								dense
							>
								Collections
							</MenuItem>
							{Object.values(categories).map((c, index) => {
								return (
									<MenuItem
										onClick={handleClose}
										component={Link}
										to={`/products/category/${c}`}
										className={classes.title}
										dense
									>
										{capitalize(c)}
									</MenuItem>
								)
							})}
							<MenuItem
								onClick={handleClose}
								component={Link}
								to='/contacts'
								className={classes.title}
								dense
							>
								Contact
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
				<Toolbar className={classes.toolbar}>
					<div className={classes.toolbarLeft}>
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

						<Typography
							className={classes.title}
							variant='h6'
							noWrap
							component={Link}
							to='/contacts'
						>
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
