import { Container } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import React from 'react'

const SingleProductAnimation = () => {
	return (
		<Container
			maxWidth='xl'
			style={{
				disply: 'flex',
				height: '750px',
				justifyContent: 'center',
				alignitems: 'center',
			}}
		>
			<Skeleton
				variant='rect'
				height={350}
				width={1100}
				style={{ margin: '30px auto' }}
				animation='wave'
			/>
		</Container>
	)
}

export default SingleProductAnimation
