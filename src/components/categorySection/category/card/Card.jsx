import React from 'react'
import './card.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Card = ({ c }) => {
	const { title, img, link } = c

	return (
		<div className='card'>
			<div className='imgContainer'>
				<img src={img} alt='' className='cardImage' />
			</div>
			<div className='cardContent'>
				<h1 className='cardTitle'>{title}</h1>
				<Button className='btn' component={Link} to={link}>
					Shop Now
				</Button>
			</div>
		</div>
	)
}

export default Card
