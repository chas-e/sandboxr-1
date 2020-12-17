import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

const StyledCardBodyText = styled.div`
  /* body */

  position: static;
  width: 280px;
  height: 34px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;

  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  //   line-height: 13px;

  color: #fcfcfc;
`;

export default function CardBodyText({ description }) {
  return <StyledCardBodyText>{description}</StyledCardBodyText>;
}
