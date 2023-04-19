import Head from "next/head";

export const PageSeo = ({
  title = "",
  description = "",
  url = "",
  imageUrl = "",
}) => {
  return (
    <Head>
      <title>{title} </title>
      <link rel="icon" href="/assets/logo/logo-pmb.png" />
      <link rel="shortcut icon" href="/assets/logo/logo-pmb.png" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
    </Head>
  );
};
