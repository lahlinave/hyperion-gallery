import { Wallet } from "../components/wallet";
import { Header } from "../components/header";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { PageTitle } from "../components/page-title";
import Head  from "next/head";
import { Footer } from "../components/footer";
import React from "react";
import config from "../config";
import { BrandedHomepage } from "../components/branded-homepage";

export default function RepopRoute() {
  return (
    <>
      <Head>
        <title>RePop</title>
      </Head>
      <Header/>
      <main style={{ padding: "1rem 0" }}>
        <Container>


          <BrandedHomepage />
        </Container>
      </main>
      <Footer />
    </>
  );
}
