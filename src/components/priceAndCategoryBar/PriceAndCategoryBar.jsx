import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Slider,
	Typography,
} from '@material-ui/core'
import useStyles from './styles'
import axios from 'axios'
import { setProducts, userSelectedProducts } from '../../redux/actions/ProductAction'

const PriceAndCategoryBar = () => {
	const classes = useStyles()
	const dispatch = useDispatch()

	const products = useSelector((state) => state.allProducts.sortedProducts)
	const productsAPI = useSelector((state) => state.allProducts.products)
	const header = useSelector((state) => state.titles.productHeaders?.header)

	const [values, setValues] = useState({ sort: '', category: '', rating: '' })
	const [hide, setHide] = useState(false)

	const handleChange = (e) => {
		setValues({ ...values, sort: e.target.value })
	}

	// dispatch user options
	let uniq = []
	useEffect(() => {
		dispatch(userSelectedProducts(values))
	}, [values])

	// reset user options whenever product header changes
	useEffect(() => {
		setValues({ sort: '', category: '', rating: '' })
	}, [header])

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
					>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value={'desc'}>Price - Highest to Lowest</MenuItem>
						<MenuItem value={'asc'}>Price - Lowest to Highest</MenuItem>
						<MenuItem value={'a-z'}> Titles A - Z</MenuItem>
						<MenuItem value={'z-a'}> Titles Z - A</MenuItem>
					</Select>
					<FormHelperText>Sort Products</FormHelperText>
				</FormControl>
				<FormControl variant='outlined' className={classes.formControl}>
					{/* <InputLabel id='demo-simple-select-filled-label'>Categories</InputLabel> */}
					<Select
						// labelId='demo-simple-select-filled-label'
						// id='demo-simple-select-filled'
						value={values.category}
						onChange={(e) => setValues({ ...values, category: e.target.value })}
						disabled={productsAPI.length < 20}
					>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value={"women's clothing"}>Ladies</MenuItem>
						<MenuItem value={'jewelery'}>Jewelery</MenuItem>
						<MenuItem value={"men's clothing"}>Gents</MenuItem>
						<MenuItem value={'electronics'}>Electronics</MenuItem>
					</Select>
					<FormHelperText>Filter By Categories</FormHelperText>
				</FormControl>
				<FormControl variant='outlined' className={classes.formControl}>
					<InputLabel id='demo-simple-select-filled-label'>Rating</InputLabel>
					<Select
						labelId='demo-simple-select-filled-label'
						id='demo-simple-select-filled'
						value={values.rating}
						onChange={(e) => setValues({ ...values, rating: e.target.value })}
					>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={4}>4</MenuItem>
						<MenuItem value={3}>3</MenuItem>
						<MenuItem value={2}>2</MenuItem>
						<MenuItem value={1}>1</MenuItem>
					</Select>
				</FormControl>

				{/*	<FormControl variant='outlined' className={classes.formControl}>
					<InputLabel id='demo-simple-select-filled-label'>Color</InputLabel>
					<Select
						labelId='demo-simple-select-filled-label'
						id='demo-simple-select-filled'
						value={''}
						disabled
						// onChange={handleChange}
					>
						<MenuItem value=''>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>

				<div className={classes.sliderDiv}>
					<Typography
						id='range-slider'
						gutterBottom
						variant='subtitle1'
						className={classes.sliderHeading}
					>
						Filter by price
					</Typography>
					<div className={classes.slider}>
						<Slider
							value={value}
							onChange={handleChange}
							valueLabelDisplay='auto'
							aria-labelledby='range-slider'
							getAriaValueText={valuetext}
							step={1}
							classes={{ track: classes.track, rail: classes.rail }}
							scale={(x) => x * 40}
						/>
					</div>
				</div>
				<FormControl component='fieldset' className={classes.brandControl}>
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
						<FormGroup>
							<FormControlLabel
								control={<Checkbox onChange={handleChange} name='gilad' />}
								label='Gilad Gray'
							/>
							<FormControlLabel
								control={<Checkbox onChange={handleChange} name='jason' />}
								label='Jason Killian'
							/>
							<FormControlLabel
								control={<Checkbox onChange={handleChange} name='antoine' />}
								label='Antoine Llorca'
							/>
						</FormGroup>
					</div>
					<FormHelperText>Click on the Checkbox to select</FormHelperText>
				</FormControl>
				<FormControl component='fieldset' className={classes.brandControl}>
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
						<FormGroup>
							<FormControlLabel
								control={<Checkbox onChange={handleChange} name='gilad' />}
								label='Gilad Gray'
							/>
							<FormControlLabel
								control={<Checkbox onChange={handleChange} name='jason' />}
								label='Jason Killian'
							/>
							<FormControlLabel
								control={<Checkbox onChange={handleChange} name='antoine' />}
								label='Antoine Llorca'
							/>
						</FormGroup>
					</div>
					<FormHelperText>Click on the Checkbox to select</FormHelperText>
				</FormControl> */}
			</Paper>
		</form>
	)
}

export default PriceAndCategoryBar
