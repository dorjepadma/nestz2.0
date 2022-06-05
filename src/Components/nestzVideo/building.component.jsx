import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import './building.styles.scss'

const BuildingVideo= ({ embedId }) => (
  <Container>
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Building a Nestz"
    />
  </div>
  </Container>
);

BuildingVideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default BuildingVideo;
