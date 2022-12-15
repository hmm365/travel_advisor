import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from './styles';
const Map = ({ setCoords, setBounds, coords }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px');
    console.log(coords);
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCxGAwimiPN7Y64-kXlxAbScOR0a3YKNtY' }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                // options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                // onChildClick={''}
            ></GoogleMapReact>
        </div>
    );
};

export default Map;
