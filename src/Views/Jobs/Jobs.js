import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getJobs } from '../../Store/Actions'
import { NavLink } from "react-router-dom";

class Jobs extends Component {

    componentDidMount() {
        this.props.getJobs()
    }

    render() {
        const { loading, offers } = this.props;
        return (
            <>
                <div>
                    <ul>
                        <li><NavLink to="/"> Home </NavLink></li>
                        <li><NavLink to="/news"> News </NavLink></li>
                    </ul>
                </div>

                <div>
                    {loading && <b>Loading.......</b>}
                    {offers &&
                        <div>
                            {offers.name}
                        </div>
                    }
                </div>
            </>
        );
    }
}

const mapDispatchToProps = {
    getJobs: getJobs
}

function mapStateToProps(state) {
    const { jobs } = state;
    return {
        loading: jobs.loading,
        offers: jobs.offers
    }
}

const connectedJobs = connect(mapStateToProps, mapDispatchToProps)(Jobs)
export { connectedJobs as Jobs }
