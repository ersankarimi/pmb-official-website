import { RootLayout } from "@/layouts";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>;
};

export default App;
