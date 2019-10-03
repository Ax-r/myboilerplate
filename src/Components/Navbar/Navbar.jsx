import React, { Component } from 'react';
import { Input, Menu, Segment, Dimmer, Loader } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { getSources } from 'Store/Actions'

class Navbar extends Component {

    componentDidMount() {
        this.props.getSources()
    }

    showSources = () => {
        const { sources } = this.props;
        if (!sources) {
            return <></>
        }

        return sources.map((source, index) => {
            //const is_active = index === 0;
            return (
                <Menu.Item name={source.id} active={false} key={source.id}>
                    {source.name}
                </Menu.Item>
            )
        })
    }

    render() {
        const { loading } = this.props;
        return (
            <Menu vertical>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' disabled={loading} />
                </Menu.Item>

                <Dimmer.Dimmable as={Segment} dimmed={loading} style={{ overflow: 'auto', maxHeight: 500 }}>
                    <Dimmer active={loading} inverted style={{ marginTop: '1em' }}>
                        <Loader size='tiny'>Loading</Loader>
                    </Dimmer>
                    {this.showSources()}
                </Dimmer.Dimmable>
            </Menu>
        );
    }
}

const mapDispatchToProps = {
    getSources: getSources
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