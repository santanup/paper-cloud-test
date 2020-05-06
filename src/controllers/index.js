import express from 'express';
import BodyParser from 'body-parser';
import TwitterClient from '../utils/twitterClient';

const Router = express.Router();

Router.use(BodyParser.urlencoded({extended: true}));

Router.get('/search-tweets', (req, res) => {

    const {q = '', max_id, since_id} = req.query;

    const params = {q, lang: 'en', include_entities: 1};

    if (max_id) params.max_id = max_id;

    if (since_id) params.since_id = max_id;

    TwitterClient.get('search/tweets', params, function(error, tweets, response) {
        if (error) return res.status(400).send({status: 400, message: error.message});
        res.status(200).json({tweets});
    });
});

export default Router;
