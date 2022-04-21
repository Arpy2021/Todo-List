import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { FILTER_TYPE } from "../constants/constType";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(FILTER_TYPE).map(filterKey => {
                const currentFilter = FILTER_TYPE[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
            {currentFilter}
          </span>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    // console.log(mapStateToProps, 'dddd')
    return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);