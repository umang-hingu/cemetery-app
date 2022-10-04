import React, { useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  Autocomplete,
} from "@react-google-maps/api";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { FormGroup, FormText } from "reactstrap";

const center = { lat: 21.215284608632743, lng: 72.85702453927374 };
const libraries = ["places", "drawing"];

function CemeteryPage() {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(center);
  const [address, setAddress] = useState("");
  const [autoAdd, setAutoAdd] = useState("");

  useEffect(() => {
    const getAddress = async () => {
      // eslint-disable-next-line no-undef
      const geocoder = new google.maps.Geocoder();
      const result = await geocoder.geocode({
        location: position,
      });
      setAddress(result.results[0].formatted_address);
    };
    getAddress();
  }, [position]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA8yt4N3hU5FZOiZ2LrG6jqZK-fBPCsn50",
    libraries,
  });

  const addMarker = async () => {
    // eslint-disable-next-line no-undef
    const geocoder = new google.maps.Geocoder();
    const result = await geocoder.geocode({
      address: autoAdd,
    });
    console.log(
      result.results[0].geometry.location.lat(),
      result.results[0].geometry.location.lng()
    );
    setPosition({
      lat: result.results[0].geometry.location.lat(),
      lng: result.results[0].geometry.location.lng(),
    });
    map.panTo({
      lat: result.results[0].geometry.location.lat(),
      lng: result.results[0].geometry.location.lng(),
    });
  };

  if (!isLoaded) {
    return (
      <Container>
        <div>Loading</div>
      </Container>
    );
  }

  const locationHandler = async (e) => {
    console.log("Lat:", e.latLng.lat(), "Lng:", e.latLng.lng());
    setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  const datatosend = {latitude: position.lat, longitude: position.lng, address}


  const sendData = async () => {
    const response =  await fetch(
      "https://cemetery-app-2ae5a-default-rtdb.firebaseio.com/item.json",
      {
        method: "POST",
        body: JSON.stringify(datatosend),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendData();
  };

  const autoSearchValueHandler = (e) => {
    setAutoAdd(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <IndexNavbar />

      <div className="main" style={{ display: "flex" }}>
        <Container style={{ paddingTop: "5rem" }}>
          <GoogleMap
            onClick={locationHandler}
            center={center}
            zoom={15}
            mapContainerStyle={{
              width: "1000px",
              height: "600px",
              margin: "2%",
            }}
            onLoad={(map) => setMap(map)}
          >
            <MarkerF position={position} />
          </GoogleMap>

          <form onSubmit={submitHandler}>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <FormText color="muted">Latitude</FormText>
                  <Input
                    placeholder="Latitude"
                    type="text"
                    value={position.lat}
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <FormText color="muted">Longitude</FormText>
                  <Input
                    placeholder="Longitude"
                    type="text"
                    value={position.lng}
                  />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <FormText color="muted">Address</FormText>
                  <Input placeholder="Address" type="text" value={address} />
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <FormText color="muted">Search Address</FormText>
                  <Autocomplete onPlaceChanged={addMarker}>
                    <Input
                      placeholder="Search Place"
                      type="text"
                      onBlur={autoSearchValueHandler}
                    />
                  </Autocomplete>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <Button color="success" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </>
  );
}

export default CemeteryPage;
