import React from 'react';
import { ALL, DONE, TODO } from '../useFilter';

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    maxWidth: '200px'
};

function Filter({ setActiveFilter }) {
    function onFilterClick(filter) {
        return function(e) {
            e.preventDefault();
            setActiveFilter(filter);
        };
    }

    return (
        <div style={style}>
            <a
                onClick={e => {
                    e.preventDefault();
                    setActiveFilter(ALL);
                }}
                href="/"
            >
                All
            </a>
            |
            <a onClick={onFilterClick(DONE)} href="/done">
                Done
            </a>
            |
            <a onClick={onFilterClick(TODO)} href="/todo">
                To do
            </a>
        </div>
    );
}

export default Filter;
