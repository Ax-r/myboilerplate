import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react'

export default class AppHeader extends Component {
    render() {
        return (
            <Segment>
                <Header as='h3'>
                    React News
                </Header>
            </Segment>
        );
    }
}
