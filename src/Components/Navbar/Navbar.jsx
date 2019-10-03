import React, { Component } from 'react';
import { Input, Menu, Segment, Dimmer, Loader } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { getSources, getNews } from 'Store/Actions'

class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchedSrc: ''
        }
    }

    componentDidMount() {
        this.props.getSources()
    }

    showSources = () => {
        const { sources } = this.props;
        const { searchedSrc } = this.state
        if (!sources) {
            return <></>
        }

        return sources.map((source, index) => {
            let activeSource = (searchedSrc.length === 0 || source.id.indexOf(searchedSrc.toLowerCase())) >= 0
            return activeSource ? (
                <Menu.Item name={source.id} active={false} key={source.id} onClick={this.getSourceNews}>
                    {source.name}
                </Menu.Item>
            ) : null
        })
    }

    getSourceNews = (e, { name }) => {
        this.props.getNews(name)
    }

    searchSource = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    render() {
        const { loading } = this.props;
        const { searchedSrc } = this.state
        return (
            <Menu vertical>
                <Menu.Item>
                    <Input
                        icon='search'
                        placeholder='Search...'
                        disabled={loading}
                        onChange={this.searchSource}
                        name='searchedSrc'
                    />
                </Menu.Item>

                <Dimmer.Dimmable as={Segment} dimmed={loading} style={{ overflow: 'auto', maxHeight: 500 }}>
                    <Dimmer active={loading} inverted style={{ marginTop: '1em' }}>
                        <Loader size='tiny'>Loading</Loader>
                    </Dimmer>
                    {this.showSources(searchedSrc)}
                </Dimmer.Dimmable>
            </Menu>
        );
    }
}

const mapDispatchToProps = {
    getSources: getSources,
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

const connectedNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export { connectedNavbar as Navbar }