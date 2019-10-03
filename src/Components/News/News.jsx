import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getNews } from 'Store/Actions'

import { Grid, Segment, Card, Dimmer, Loader } from 'semantic-ui-react'

class News extends Component {

    constructor(props) {
        super(props)

        this.activeSrc = 'techcrunch'
    }

    componentDidMount() {
        const src = this.props.src || this.activeSrc;
        this.props.getNews(src)
    }

    showArticles = () => {
        const { articles } = this.props;
        if (!articles) {
            return <></>
        }

        return articles.map((article, index) => {
            return (
                <Card
                    image={article.urlToImage}
                    header={article.title}
                    meta={article.author}
                    description={article.description}
                    key={index}
                />
            )
        })
    }

    render() {
        const { loading, articles } = this.props;
        return (
            <Grid.Column width={12}>
                <Dimmer.Dimmable as={Segment} dimmed={loading}>
                    <Dimmer active={loading} inverted>
                        <Loader size='huge'>Loading</Loader>
                    </Dimmer>

                    {articles &&
                        <Card.Group itemsPerRow={5}>
                            {this.showArticles()}
                        </Card.Group>
                    }
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
        articles: news.articles,
        error: news.error
    }
}

const connectedNews = connect(mapStateToProps, mapDispatchToProps)(News)
export { connectedNews as News }