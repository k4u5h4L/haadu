import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <link
                        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800%7CPoppins:100,200,300i,300,400,700,400i,500%7CDancing+Script:700"
                        rel="stylesheet"
                    /> */}
                    {/* <link rel="stylesheet" href="/assets/css/rating.css" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    {/* <script src="/js/jquery-3.5.1.min.js"></script> */}
                    <script
                        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
                        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                        crossOrigin="anonymous"
                    ></script>
                    <script
                        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                        crossOrigin="anonymous"
                    ></script>
                    <script
                        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
                        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
                        crossOrigin="anonymous"
                    ></script>

                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                    <Script
                        src="/js/bootstrap.bundle.min.js"
                        strategy="beforeInteractive"
                    />
                    {/* <Script
                        src="/js/owl.carousel.min.js"
                        strategy="beforeInteractive"
                    /> */}
                    <Script
                        src="/js/slider-radio.js"
                        strategy="beforeInteractive"
                    />
                    <Script
                        src="/js/select2.min.js"
                        strategy="beforeInteractive"
                    />
                    <Script
                        src="/js/smooth-scrollbar.js"
                        strategy="beforeInteractive"
                    />
                    <Script
                        src="/js/jquery.magnific-popup.min.js"
                        strategy="beforeInteractive"
                    />
                    {/* <Script
                        src="/js/plyr.min.js"
                        strategy="beforeInteractive"
                    /> */}
                    <Script src="/js/main.js" strategy="beforeInteractive" />
                </body>
            </Html>
        );
    }
}
