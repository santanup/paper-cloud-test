import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/ShareOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import {Box} from '@material-ui/core';
import TimeDiff from "js-time-diff";

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

const TweetItem = ({tweet}) => {

    const classes = useStyles();

    const {user, entities = {}} = tweet;
    const {hashtags = []} = entities;

    const hastag = hashtags.map(each => '#' + each.text).join(', ');

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label={user && user.name ? user.name : 'Unknown User'} className={classes.avatar}>
                        {
                            user && user.name ? user.name.slice(0, 1).toUpperCase() : 'U'
                        }
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={
                    <React.Fragment>
                        {user && user.name ? user.name : 'Unknown User'}
                        {
                            tweet.created_at ?
                                <Typography variant="caption" component="span" style={{marginLeft: 8}}>{TimeDiff(new Date(tweet.created_at))}</Typography>  :
                                ''
                        }
                    </React.Fragment>
                }
                subheader={hastag}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {tweet.text ? tweet.text : 'Next not available'}
                </Typography>
            </CardContent>
            <Box component={CardActions} justifyContent="space-around">
                <IconButton aria-label="Comment" size="small">
                    <ModeCommentOutlinedIcon />
                </IconButton>
                <IconButton aria-label="Repeat" size="small">
                    <RepeatIcon />
                </IconButton>
                <IconButton aria-label="Favorite" size="small">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share" size="small">
                    <ShareIcon />
                </IconButton>
            </Box>
        </Card>
    );
};

export default TweetItem;
