import {Box, Container, Typography} from "@mui/material";

export function Homepage() {
    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Oleksandr Lynnyk
                </Typography>
                <Typography variant="body1" paragraph>
                    Front-end developer with experience in: HTML,
                    CSS,
                    SCSS,
                    JavaScript,
                    React,
                    Git,
                    npm,
                    Gulp,
                    Python,
                    C++,
                    Babel,
                    Webpack,
                    Redux, and redux-thunk.
                </Typography>
                <Typography variant="h6">Skills:</Typography>
                <Typography variant="body1" paragraph>
                    HTML,
                    CSS,
                    SCSS,
                    JavaScript,
                    React,
                    Git,
                    npm,
                    Gulp,
                    Babel,
                    Webpack,
                    Redux,
                    redux-thunk.
                </Typography>
                <Typography variant="h6">Basic Skills in:</Typography>
                <Typography variant="body1" paragraph>
                    Python,
                    C++.
                </Typography>
                <Typography variant="h6">Projects:</Typography>
                <Typography variant="body1" paragraph>
                    <a href="https://organicbud.com.ua/" target="_blank">OrganicBud</a> - HTML, CSS, VanillaJS, image optimization at
                    the customer's request.<br/>
                    <a href="https://www.vengreenery.com/" target="_blank">VenGreenery</a> - HTML, CSS, VanillaJS, GulpJS, image
                    optimization.
                </Typography>
            </Box>
        </Container>
    );
}