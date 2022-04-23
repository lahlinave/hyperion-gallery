import { Header } from "../components/header";
import { AllMintedGallery } from "../components/all-minted-gallery";
import Container from "react-bootstrap/Container";
import Head from "next/head";
import { Footer } from "../components/footer";
import React from "react";

export default function GalleryRoute() {
  return (
    <>
      <Head>
      <title>Gallery</title>
    </Head>
      <Header />
      <main style={{ padding: "1rem 0" }}>
        <Container>
        {/* <PageTitle>Gallery Reveal Imminent...</PageTitle> */}
        <AllMintedGallery />
        </Container>
      </main>
      <Footer />
    </>
  );
}
