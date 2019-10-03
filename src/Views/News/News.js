import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getNews, getSources } from 'Store/Actions'
import { NavLink } from "react-router-dom";

class News extends Component {

    componentDidMount() {
        this.props.getNews('el-mundo')
    }

    render() {
        const { loading, articles, error } = this.props;
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
                    {error &&
                        <p>
                            <span style={{ color: 'red' }}> {error} </span>
                        </p>
                    }
                    {articles &&
                        <div className="main">
                            {articles.map(function (article, index) {
                                return (
                                    <p key={ index }>
                                        <img src={article.urlToImage} style={{ width: 250 }} alt={article.title} />
                                        <span>{article.description}</span>
                                    </p>
                                )
                            })}
                        </div>
                    }
                </div>
            </>
        );
    }
}

const mapDispatchToProps = {
    getNews: getNews,
    getSources: getSources
}

function mapStateToProps(state) {
    const { news } = state;
    return {
        loading: news.loading,
        articles: news.articles,
        sources: news.sources,
        error: news.error
    }
}


const connectedNews = connect(mapStateToProps, mapDispatchToProps)(News)
export { connectedNews as News }
