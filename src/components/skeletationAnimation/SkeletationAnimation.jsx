import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { Card, CardActionArea, CardActions, CardContent} from '@material-ui/core'

const SkeletationAnimation = () => {
  return (
		<Card>
			<CardActionArea>
				<Skeleton variant='rect' width={300} height={250} animation='wave' />
				<CardContent>
					<Skeleton variant='rect' width={180} height={20} animation='wave' style={{marginBottom: '10px'}}/>
					<Skeleton variant='rect' width={50} height={20} animation='wave' />
				</CardContent>
			</CardActionArea>
			<CardActions style={{ justifyContent: 'space-between', width: '70%' }}>
				<Skeleton variant='rect' width={20} height={20} animation='wave' />
				<Skeleton variant='rect' width={20} height={20} animation='wave' />
				<Skeleton variant='rect' width={20} height={20} animation='wave' />
			</CardActions>
		</Card>
  )
}

export default SkeletationAnimation