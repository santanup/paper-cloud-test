import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TimeDiff from 'js-time-diff';
import CardContent from '@material-ui/core/CardContent';
import {Box} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import Skeleton from '@material-ui/lab/Skeleton';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
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
    }
}));

const TweetSkeleton = () => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Skeleton variant="circle" width={40} height={40} />
                }
                action={
                    <IconButton aria-label="settings">
                        <Skeleton variant="circle" width={25} height={25} />
                    </IconButton>
                }
                title={<Skeleton variant="text" />}
                subheader={<Skeleton variant="text" />}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </Typography>
            </CardContent>
            <Box component={CardActions} justifyContent="space-around">
                <Skeleton variant="circle" width={25} height={25} />
                <Skeleton variant="circle" width={25} height={25} />
                <Skeleton variant="circle" width={25} height={25} />
                <Skeleton variant="circle" width={25} height={25} />
            </Box>
        </Card>
    );
};

export default TweetSkeleton;
