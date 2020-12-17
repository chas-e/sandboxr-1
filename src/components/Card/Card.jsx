import React from "react";
import styled from "styled-components";
import CardBody from "../CardBody/CardBody.jsx";
import CardGif from "../CardGif/CardGif.jsx";

const StyledCard = styled.div`
  width: 32%;
  padding-bottom: 3%; /* Same as width, sets height */
  padding-top: 3%; /* Same as width, sets height */
  margin-bottom: 2%; /* (100-32*3)/2 */

  display: flex;
  flex-direction: column;
  align-items: middle;
  padding: 0px;

  position: relative;
  width: 18.75em;
  height: 25.8125em;
  left: calc(50% - 18.75em / 2);
  top: calc(50% - 25.8125em / 2 - 0.5px);

  background: #333333;
  border: 10px solid #000000;
  box-shadow: 1.25em 1.25em 0.25em #623cea;
  border-radius: 1.25em;

  &:hover {
    box-shadow: 2em 2em 0.25em #623cea;
  }
`;

export default function Card({ cardInfo }) {
  return (
    <StyledCard>
      <div>
        <CardGif imgURL={cardInfo.imgURL} />
        <CardBody title={cardInfo.title} description={cardInfo.description} />
      </div>
    </StyledCard>
  );
}
