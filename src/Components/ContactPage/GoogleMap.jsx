import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
    const defaultProps = {
        center: {
          lat: 24.414986,
          lng: 90.711394,
        },
        zoom: 11
      };
    
    return (
        <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={90.711394}
          lng={90.711394}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
    );
};

export default GoogleMap;