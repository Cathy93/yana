import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends React.Component {

    render() {

        const markers = this.props.markers || []

        return(
            <div>
                <GoogleMap
                  defaultZoom={this.props.zoom}
                  defaultCenter={ this.props.center }
                  markers={this.props.markers}
                >
                  {markers.map((marker, index) => (
                      <Marker {...marker} />
                    )
                  )}
                </GoogleMap>
            </div>
        );
    }
}

export default withGoogleMap(Map);
