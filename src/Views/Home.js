import React, { Component } from 'react';

import AppHeader from 'Components/AppHeader/AppHeader.jsx';
import { Navbar } from 'Components/Navbar'
import { News } from 'Components/News'

import { Button, Container, Divider, Grid, Header, Image, Menu, Segment, Card, Dimmer, Loader } from 'semantic-ui-react'
import wireframe from 'assets/images/wireframe/white-image.png'


class Home extends Component {

    render() {
        return (
            <>
                <Container style={{ margin: '2em' }} fluid>
                    <AppHeader />

                    <Grid>
                        <Grid.Column width={3}>
                            <Navbar />
                        </Grid.Column>

                        <News />
                    </Grid>

                </Container>
            </>
        );
    }
}


export default Home;
