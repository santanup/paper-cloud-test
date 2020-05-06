import { Store } from 'laco';

const TweetsStore = new Store(
    {
        search_metadata: {},
        statuses : []
    },
    'tweets'
);

export default TweetsStore;
