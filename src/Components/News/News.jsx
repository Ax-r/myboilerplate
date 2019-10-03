import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getNews } from 'Store/Actions'

import { Button, Container, Divider, Grid, Header, Image, Menu, Segment, Card, Dimmer, Loader } from 'semantic-ui-react'
import wireframe from 'assets/images/wireframe/white-image.png'

class News extends Component {

    componentDidMount() {
        const src = this.props.src || '';
        this.props.getNews(src)
    }

    render() {
        return (
            <Grid.Column width={12}>
                <Dimmer.Dimmable as={Segment} dimmed={false}>
                    <Dimmer active={false} inverted>
                        <Loader size='huge'>Loading</Loader>
                    </Dimmer>

                    <Card.Group itemsPerRow={5}>
                        <Card color='red' image={wireframe} />
                        <Card color='orange' image={wireframe} />
                        <Card color='yellow' image={wireframe} />
                        <Card color='olive' image={wireframe} />
                        <Card color='green' image={wireframe} />
                        <Card color='teal' image={wireframe} />
                        <Card color='blue' image={wireframe} />
                        <Card color='violet' image={wireframe} />
                        <Card color='purple' image={wireframe} />
                        <Card color='pink' image={wireframe} />
                        <Card color='brown' image={wireframe} />
                        <Card color='grey' image={wireframe} />
                    </Card.Group>

                </Dimmer.Dimmable>
            </Grid.Column>
        );
    }
}


const mapDispatchToProps = {
    getNews: getNews
}

function mapStateToProps(state) {
    const { news } = state;
    return {
        loading: news.loading,
        sources: news.sources,
        error: news.error
    }
}

const connectedNews = connect(mapStateToProps, mapDispatchToProps)(News)
export { connectedNews as News }