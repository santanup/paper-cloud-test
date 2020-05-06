import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Index() {
    return (
        <Container>
            <Box mt={4} height={250} display="flex" justifyContent="center" textAlign="center">
                <Typography variant="h5" component="h1">{'Please Search a keyword on the above search box and press enter'}</Typography>
            </Box>
        </Container>
    );
}
