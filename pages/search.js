import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useRouter} from 'next/router';
import {searchTweets} from '../src/utils/RestClient';
import TweetsStore from '../src/Store/TweetsStore';
import {useStore} from 'laco-react';
import {Box} from '@material-ui/core';
import TweetItem from '../src/components/TweetItem';
import TweetSkeleton from '../src/components/TweetSkeleton';
import Head from 'next/head';

const Search = () => {

    const Router = useRouter();

    const {q} = Router.query;

    const [loading, setLoading] = useState(true);

    const {search_metadata, statuses} = useStore(TweetsStore);

    useEffect(() => {
        if (!q) return Router.push('/');
        searchTweets(q)
            .then(response => {
                const {tweets} = response;
                const {search_metadata, statuses} = tweets;
                TweetsStore.set(() => ({search_metadata, statuses}), 'search-result');
                setLoading(false);
            });
    }, [q]);

    const handleLoadMore = () => {
        const {max_id} = search_metadata;
        setLoading(true);
        searchTweets(q, max_id)
            .then(response => {
                const {tweets} = response;
                const {search_metadata, statuses: newStatuses} = tweets;
                TweetsStore.set(() => ({search_metadata, statuses: [...statuses, ...newStatuses]}), 'search-result-more');
                setLoading(false);
            })
    };

    return (
        <Container>
            <Head>
                <title>Twitter - Search</title>
            </Head>
            <Box mt={3} mb={3}>
                <Grid container spacing={2}>
                    <Grid md={8} sm={12} sx={12} item>
                        {
                            statuses.map((each, index) => <TweetItem tweet={each} key={index}/>)
                        }
                        {
                            loading ?
                                <React.Fragment>
                                    <TweetSkeleton/>
                                    <TweetSkeleton/>
                                    <TweetSkeleton/>
                                    <TweetSkeleton/>
                                </React.Fragment>:
                                <Box display="flex" justifyContent="center">
                                    <Button variant="outlined" color="primary" onClick={handleLoadMore}>View More</Button>
                                </Box>
                        }
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Search;
