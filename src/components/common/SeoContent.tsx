import Head from "next/head";

const SeoContent = () => {
  return (
    <>
      <Head>
        <title>Mayank Raj Parmar | Full Stack Web Developer</title>
        <meta
          name="description"
          content="Mayank Raj Parmar is a Full stack Web developer passionate about creating web applications with a focus on user experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://mayankrajparmar.vercel.app/og-image.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
export default SeoContent;
