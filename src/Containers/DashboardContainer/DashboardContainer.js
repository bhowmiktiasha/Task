import React from 'react';
import { Grid } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { red } from '@material-ui/core/colors';
import mountain from './mountain.jpg';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ChatIcon from '@material-ui/icons/Chat';
import steve from './steve.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		marginTop: '10%',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function DashboardContainer() {
	const classes = useStyles();
	return (
		<>
			<Grid container direction="column" alignItems="center" justify="center">
				<Card className={classes.root}>
					<Button variant="contained" style={{ backgroundColor: 'yellow', position: 'absolute' }}>
						Nature
					</Button>
					<CardMedia className={classes.media} image={mountain} title="Paella dish" />
					<Typography
						variant="h5"
						style={{ marginLeft: '20px', fontWeight: '600', marginBottom: '-10px', marginTop: '10px' }}
					>
						Mountains
					</Typography>
					<div style={{ display: 'flex' }}>
						<CardHeader avatar={<Avatar alt="Remy Sharp" src={steve} />} />
						<Typography style={{ marginTop: '25px', marginLeft: '-18px' }}>By</Typography>
						<span style={{ marginTop: '25px', color: 'gold' }}>&nbsp;Suzan Hill</span>
					</div>

					<CardContent style={{ marginTop: '-12px' }}>
						<Typography variant="body2" color="textSecondary" component="p">
							This impressive paella is a perfect party dish and a fun meal to cook together with your
							guests. Add 1 cup of frozen peas along with the mussels, if you like.
						</Typography>
					</CardContent>
					<CardActions disableSpacing style={{ marginTop: '-18px' }}>
						<IconButton aria-label="add to favorites">
							<AccessTimeIcon />
							<Typography>&nbsp;2 days ago</Typography>
						</IconButton>

						<IconButton>
							<ChatIcon />
							<Typography> &nbsp;13 comments</Typography>
						</IconButton>
					</CardActions>
				</Card>
			</Grid>
		</>
	);
}
