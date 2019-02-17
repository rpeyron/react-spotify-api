import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

const BASE_URL = 'https://api.spotify.com/v1/tracks';

const Track = props => {
    let url = BASE_URL;
    let options = { ...props.options };
    if (Array.isArray(props.id)) {
        options.ids = props.id.join(',');
    } else {
        url += `/${props.id}`;
    }

    return (
        <ApiRequest url={url} options={options}>
            {(data, loading, error) => props.children(data, loading, error)}
        </ApiRequest>
    );
};

Track.propTypes = {
    /** Process spotify data with render props using props.children as a function */
    children: PropTypes.func.isRequired,
    /** The id/s of the track/s */
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    /** Options object (more info above) */
    options: PropTypes.object
};

Track.defaultProps = {
    options: {}
};

export default Track;
