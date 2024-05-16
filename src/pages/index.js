import { Container } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";

const Homepage = dynamic(() => import("@/section/homepage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Capsules</title>
        <meta name="description" content="Capsules" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="lg">
        <Homepage />
      </Container>
    </>
  );
}
