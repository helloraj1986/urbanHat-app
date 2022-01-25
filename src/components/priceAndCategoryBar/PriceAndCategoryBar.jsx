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
import React from 'react'
import useStyles from './styles'

const PriceAndCategoryBar = () => {
	const classes = useStyles()

	//
	function valuetext(value) {
		return `${value} $`
	}

	const [value, setValue] = React.useState([10, 20])

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	//

	return (
		<form action=''>
			<Paper className={classes.main}>
				<FormControl variant='outlined' className={classes.formControl}>
					<InputLabel id='demo-simple-select-outlined-label'>Category</InputLabel>
					<Select
						labelId='demo-simple-select-outlined-label'
						id='demo-simple-select-outlined'
						// value={age}
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
				<FormControl variant='outlined' className={classes.formControl}>
					<InputLabel id='demo-simple-select-filled-label'>Type</InputLabel>
					<Select
						labelId='demo-simple-select-filled-label'
						id='demo-simple-select-filled'
						value={''}
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
				<FormControl variant='outlined' className={classes.formControl}>
					<InputLabel id='demo-simple-select-filled-label'>Size</InputLabel>
					<Select
						labelId='demo-simple-select-filled-label'
						id='demo-simple-select-filled'
						value={''}
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
				<FormControl variant='outlined' className={classes.formControl}>
					<InputLabel id='demo-simple-select-filled-label'>Color</InputLabel>
					<Select
						labelId='demo-simple-select-filled-label'
						id='demo-simple-select-filled'
						value={''}
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
				</FormControl>
			</Paper>
		</form>
	)
}

export default PriceAndCategoryBar
