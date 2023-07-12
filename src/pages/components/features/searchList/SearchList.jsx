import React from "react";

import "./SearchList.css";

const SearchList = (props) => {
  const freeCancel = (
    <p className="search-list__free-cancel">
      Free cancellation
      <span>You can cancel later, so lock in this great price today!</span>
    </p>
  );

  return (
    <div className="search-list">
      <div className="search-list__container">
        {/* Render search result from given data */}
        {props.results.map((curr, index) => (
          <div className="search-list__wrapper" key={index}>
            <img
              src={curr.image_url}
              alt="hotel"
              className="search-list__img"
            />
            {/* Hotel detail container */}
            <div className="search-list__detail">
              {/* Click title to go to Detail Page */}
              <h4 className="search-list__name" onClick={props.onDetail}>
                {curr.name}
              </h4>
              <p className="search-list__distance">
                {curr.distance} from center
              </p>
              <span className="search-list__tag">{curr.tag}</span>
              <p className="search-list__type">{curr.description}</p>
              <p className="search-list__description">{curr.type}</p>
              {/* Render free cancel belongs to value of "free_cancel" varaible */}
              {curr.free_cancel && freeCancel}
            </div>
            {/* Hotel information container */}
            <div className="search-list__info">
              <div className="search-list__review">
                <span className="search-list__rate-text">{curr.rate_text}</span>
                <span className="search-list__rate">{curr.rate}</span>
              </div>
              <div className="search-list__price-wrapper">
                <p className="search-list__price">${curr.price}</p>
                <p className="search-list__price-info">
                  Includes taxex and fees
                </p>
                {/* Click button to go to Detail page */}
                <button
                  className="search-list__button"
                  onClick={props.onDetail}
                >
                  See availability
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
