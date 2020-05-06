import React, {useEffect, useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TwitterIcon from '@material-ui/icons/Twitter';
import {useRouter} from 'next/router';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    svg: {

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: 20,
        backgroundColor: 'rgb(230, 236, 240)',
        '&:hover': {
            backgroundColor: fade('rgb(230, 236, 240)', 0.5),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Appbar = () => {

    const classes = useStyles();

    const Router = useRouter();

    const {q} = Router.query;

    const [query, setQuery] = useState(q);

    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            if (!query) return Router.push('/');
            Router.push('/search?q=' + query);
        }
    };

    useEffect(() => {
        setQuery(q);
    }, [q]);

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" color="inherit">
                <Container>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="primary"
                            aria-label="open drawer"
                        >
                            <TwitterIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap color="primary">
                            {'Twitter'}
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                autoFocus
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                                value={query}
                                onChange={event => setQuery(event.target.value)}
                                onKeyUp={handleEnter}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div>
                            <IconButton aria-label="show 17 new notifications" color="primary">
                                <Badge badgeContent={1} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar/>
        </div>
    );
};

export default Appbar;
