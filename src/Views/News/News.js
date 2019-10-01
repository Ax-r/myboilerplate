import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getNews } from '../../Store/Actions'
import { NavLink } from "react-router-dom";

class News extends Component {

    componentDidMount() {
        this.props.getNews()
    }

    render() {
        const { loading, articles } = this.props;
        return (
            <>
                <div>
                    <ul>
                        <li><NavLink to="/"> Home </NavLink></li>
                        <li><NavLink to="/jobs"> Jobs </NavLink></li>
                    </ul>
                </div>

                <div>
                    {loading && <b>Loading.......</b>}
                    {articles &&
                        <div>
                            <img src={articles.urlToImage} style={{ width: 250}}/>
                            <p>
                                { articles.description }
                            </p>
                        </div>
                    }
                </div>
            </>
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
        articles: news.articles
    }
}


const connectedNews = connect(mapStateToProps, mapDispatchToProps)(News)
export { connectedNews as News }
