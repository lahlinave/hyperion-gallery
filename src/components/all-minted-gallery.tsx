import { useEffect, useState } from "react";
import { useQueryContract } from "../hooks/useQueryContract";
import { Gallery } from "./gallery";
import { PagedGallery } from "./paged-gallery";
import Container from "react-bootstrap/Container";
import { useNumberTokens } from "../hooks/useNumberTokens";
import config from "../config";

export const AllMintedGallery = ()=>{
  const {numTokens}= useNumberTokens()

  return (
    <Container>

      <p>
        <b>{numTokens || 0}</b> of <b>{config.totalNumMints}</b> tokens have been minted.
      </p>
      {numTokens!==undefined?<PagedGallery totalNumTokens={numTokens} />:<p>Loading...</p>}
    </Container>
  );


}
