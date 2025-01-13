import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css"
        rel="stylesheet"
      />
      <script
        src="https://use.fontawesome.com/releases/v6.3.0/js/all.js"
        crossOrigin="anonymous"
      ></script>

      <body>
        <Main />
        <NextScript />
        <script src="/assets/js/bootstrap.bundle.min.js" defer />
        <script src="/assets/js/scripts.js" defer />
        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"
          crossOrigin="anonymous"
          defer
        /> */}
        {/* <script src="/assets/js/demo/chart-area-demo.js" defer />
        <script src="/assets/js/demo/chart-bar-demo.js" defer /> */}
        <script
          src="https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/umd/simple-datatables.min.js"
          crossOrigin="anonymous"
          defer
        />
        <script src="/assets/js/datatables-simple-demo.js" defer />
      </body>
    </Html>
  );
}
