import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react'

import AppHeader from 'Components/AppHeader/AppHeader.jsx';
import { Navbar } from 'Components/Navbar'
import { News } from 'Components/News'




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
