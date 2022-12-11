import React, { Fragment } from "react";
import AvaliblePasta from "./AvaliblePasta";
import PastaSummary from "./PastaSummary";

const Pasta = () => {
  return (
    <Fragment>
      <PastaSummary />
      <AvaliblePasta />
    </Fragment>
  );
};

export default Pasta;
