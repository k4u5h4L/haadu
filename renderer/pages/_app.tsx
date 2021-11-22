// import Head from "next/head";
import type { AppProps /*, AppContext */ } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";

const PlayerWithNoSSR = dynamic(() => import("@/components/Player/Player"), {
    ssr: false,
});

import "@/styles/bootstrap-reboot.min.css";
import "@/styles/bootstrap-grid.min.css";
// import "@/styles/owl.carousel.min.css";
import "@/styles/slider-radio.css";
import "@/styles/select2.min.css";
import "@/styles/magnific-popup.css";
// import "@/styles/plyr.css";
import "@/styles/main.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "react-jinke-music-player/assets/index.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                {/* <link rel="stylesheet" href="/css/bootstrap-reboot.min.css" />
                <link rel="stylesheet" href="/css/bootstrap-grid.min.css" /> */}
                {/* <link rel="stylesheet" href="/css/owl.carousel.min.css" /> */}
                {/* <link rel="stylesheet" href="/css/slider-radio.css" /> */}
                {/* <link rel="stylesheet" href="/css/select2.min.css" /> */}
                {/* <link rel="stylesheet" href="/css/magnific-popup.css" /> */}
                {/* <link rel="stylesheet" href="/css/plyr.css" /> */}
                {/* <link rel="stylesheet" href="/css/main.css" /> */}

                <link
                    rel="icon"
                    type="image/png"
                    href="/icon/favicon-32x32.png"
                    sizes="32x32"
                />
                <link rel="apple-touch-icon" href="/icon/favicon-32x32.png" />

                <title>Haadu</title>
            </Head>
            <Component {...pageProps} />
            <PlayerWithNoSSR />
        </>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
