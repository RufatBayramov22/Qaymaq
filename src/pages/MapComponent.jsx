import React, {Component} from 'react'

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.initMap();
  }

  initMap() {
    // İlk konumun koordinatları
    const location1 = { lat: 40.38143695981493, lng: 49.84969384271322 };

    // İkinci konumun koordinatları
    const location2 = { lat: 41.12345, lng: 42.54321 }; // Örnek bir konum

    const map = new window.google.maps.Map(this.mapRef.current, {
      center: location1, // Harita başlangıç konumu
      zoom: 10, // Yakınlaştırma seviyesi
    });

    // İlk konumu işaretle
    new window.google.maps.Marker({
      position: location1,
      map: map,
      title: 'Konum 1',
    });

    // İkinci konumu işaretle
    new window.google.maps.Marker({
      position: location2,
      map: map,
      title: 'Konum 2',
    });
  }

  render() {
    return <div ref={this.mapRef} style={{ width: '100%', height: '450px' }}></div>;
  }
}


export default MapComponent