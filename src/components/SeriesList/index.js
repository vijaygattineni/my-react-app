import React from 'react';

const seriesList =  (props) => {
    return (
        <div>
            <ul>
                {props.list.map(series => (
                    <li key={series.show.id}> {series.show.name} </li>
                ))}
            </ul>
        </div>
    )
}

export default seriesList;