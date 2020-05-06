import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/components/ProTip';
import Link from '../src/components/Link';
import Copyright from '../src/components/Copyright';

export default function Index() {
    return (
        <Container>
            <Box mt={4} height={250} display="flex" justifyContent="center" textAlign="center">
                <Typography variant="h5" component="h1">{'Please Search a keyword on the above search box.'}</Typography>
            </Box>
            {/*<Grid container spacing={2}>*/}
            {/*    <Grid md={8} sm={12}>*/}
            {/*        dd*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </Container>
    );
}
