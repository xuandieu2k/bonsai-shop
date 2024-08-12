import React from 'react';
import search from '../../static/img/core-img/search.png';

const SearchHeader = () => (
    <div className="search-wrapper section-padding-100">
        <div className="search-close">
            <i className="fa fa-close" aria-hidden="true"></i>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="search-content">
                        <form action="#" method="get">
                            <input 
                                type="search" 
                                name="search" 
                                id="search" 
                                placeholder="Type your keyword..." 
                                aria-label="Search"
                            />
                            <button type="submit" aria-label="Search">
                                <img src={search} alt="Search icon" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SearchHeader;