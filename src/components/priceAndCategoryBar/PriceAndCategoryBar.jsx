import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StarIcon from '@material-ui/icons/Star'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel,
	MenuItem,
	Paper,
	Select,
} from '@material-ui/core'
import useStyles from './styles'
import { userSelectedProducts } from '../../redux/actions/ProductAction'

const PriceAndCategoryBar = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const products = useSelector((state) => state.allProducts.sortedProducts)
	const productsAPI = useSelector((state) => state.allProducts.products)
	const header = useSelector((state) => state.titles.productHeaders?.header)
	const subHeader = useSelector((state) => state.titles.productHeaders?.subHeader)

	const [values, setValues] = useState({
		sort: 'asc',
		category: '',
		rating: '',
		jacket: 'false',
		short: 'false',
		tb: 'false',
	})
	const { jacket, short, tb } = values
	// const [hide, setHide] = useState(true)

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.checked })
	}
	//
	const renderStarIcon = (icon, number) => {
		let arr = Array.from({ length: number }, (x, i) => i)
		return arr.map((i) => {
			return <span key={i}>{icon}</span>
		})
	}
	//
	useEffect(() => {
		dispatch(userSelectedProducts(values))
		// setHide(false)
	}, [values])

	// reset user options whenever product header changes
	useEffect(() => {
		setValues({ sort: '', category: '', rating: '', jacket: '', short: '', tb: '' })
	}, [header, products])

	return (
		<form action=''>
			<Paper className={classes.main}>
				<FormControl variant='outlined' className={classes.formControl}>
					{/* <InputLabel id='demo-simple-select-outlined-label'>Sort</InputLabel> */}
					<Select
						// labelId='demo-simple-select-outlined-label'
						// id='demo-simple-select-outlined'
						value={values.sort}
						onChange={(e) => setValues({ ...values, sort: e.target.value })}
						className={classes.helperText}
					>
						<MenuItem value='' className={classes.helperText}>
							<em>None</em>
						</MenuItem>
						<MenuItem value={'desc'} className={classes.helperText}>
							Price - Highest to Lowest
						</MenuItem>
						<MenuItem value={'asc'} className={classes.helperText}>
							Price - Lowest to Highest
						</MenuItem>
						<MenuItem value={'a-z'} className={classes.helperText}>
							Titles A - Z
						</MenuItem>
						<MenuItem value={'z-a'} className={classes.helperText}>
							Titles Z - A
						</MenuItem>
					</Select>
					<FormHelperText className={classes.helperText}>Sort Products</FormHelperText>
				</FormControl>
				<FormControl variant='outlined' className={classes.formControl}>
					{/* <InputLabel id='demo-simple-select-filled-label'>Categories</InputLabel> */}
					<Select
						// labelId='demo-simple-select-filled-label'
						// id='demo-simple-select-filled'
						value={values.category}
						onChange={(e) => setValues({ ...values, category: e.target.value })}
						disabled={productsAPI.length < 20}
						className={classes.helperText}
					>
						<MenuItem value='' className={classes.helperText}>
							<em>None</em>
						</MenuItem>
						<MenuItem value={"women's clothing"} className={classes.helperText}>
							Ladies
						</MenuItem>
						<MenuItem value={'jewelery'} className={classes.helperText}>
							Jewelery
						</MenuItem>
						<MenuItem value={"men's clothing"} className={classes.helperText}>
							Gents
						</MenuItem>
						<MenuItem value={'electronics'} className={classes.helperText}>
							Electronics
						</MenuItem>
					</Select>
					<FormHelperText className={classes.helperText}>
						Filter By Categories
					</FormHelperText>
				</FormControl>
				<FormControl variant='outlined' className={classes.formControl}>
					<Select
						value={values.rating}
						onChange={(e) => setValues({ ...values, rating: e.target.value })}
					>
						<MenuItem value='' className={classes.helperText}>
							<em>None</em>
						</MenuItem>
						<MenuItem value={4}>
							{renderStarIcon(
								<StarIcon fontSize='small' style={{ color: '#FFD700' }} />,
								4,
							)}
						</MenuItem>
						<MenuItem value={3}>
							{renderStarIcon(
								<StarIcon fontSize='small' style={{ color: '#FFD700' }} />,
								3,
							)}
						</MenuItem>
						<MenuItem value={2}>
							{renderStarIcon(
								<StarIcon fontSize='small' style={{ color: '#FFD700' }} />,
								2,
							)}
						</MenuItem>
						<MenuItem value={1}>
							{renderStarIcon(
								<StarIcon fontSize='small' style={{ color: '#FFD700' }} />,
								1,
							)}
						</MenuItem>
					</Select>
					<FormHelperText className={classes.helperText}>Filter By Rating</FormHelperText>
				</FormControl>

				<FormControl component='fieldset'>
					<FormLabel
						component='legend'
						style={{
							fontFamily: 'Jost, sans-sarif',
							fontWeight: 600,
							fontSize: '18px',
							color: 'black',
						}}
					>
						Filter By Brand
					</FormLabel>
					<div style={{ marginTop: '20px' }}>
						<FormGroup disabled>
							<FormControlLabel
								control={
									<Checkbox
										onChange={handleChange}
										name='jacket'
										checked={jacket}
										size='small'
										disabled={
											(subHeader?.length === 0) &
											(values.sort.length !== 0 ||
												values.rating.length !== 0) &
											(values.category.length === 0)
												? false
												: true
										}
									/>
								}
								label='Gilad Gray'
								classes={{ label: classes.helperText }}
							/>
							{/* checkboxes are available when categories are not selected from the priceAndCategoryBar or from the navbar and atleast one of the options is selcted from "Sort Products" or "Filter By Rating*/}
							<FormControlLabel
								control={
									<Checkbox
										onChange={handleChange}
										name='short'
										checked={short}
										size='small'
										disabled={
											(subHeader?.length === 0) &
											(values.sort.length !== 0 ||
												values.rating.length !== 0) &
											(values.category.length === 0)
												? false
												: true
										}
									/>
								}
								label='Jason Killian'
								classes={{ label: classes.helperText }}
							/>
							<FormControlLabel
								control={
									<Checkbox
										onChange={handleChange}
										name='tb'
										checked={tb}
										size='small'
										disabled={
											(subHeader?.length === 0) &
											(values.sort.length !== 0 ||
												values.rating.length !== 0) &
											(values.category.length === 0)
												? false
												: true
										}
									/>
								}
								label='Antoine Llorca'
								classes={{ label: classes.helperText }}
							/>
						</FormGroup>
					</div>
					<FormHelperText className={classes.helperText}>
						Click on the Checkbox to select
					</FormHelperText>
				</FormControl>
			</Paper>
		</form>
	)
}

export default PriceAndCategoryBar
