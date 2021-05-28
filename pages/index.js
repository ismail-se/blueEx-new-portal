import Head from "next/head";
import LoginArea from "../components/LoginArea";
import { parseCookies } from "../helpers/";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Login | blueEX Booking App - The one stop shop to access all blueEX
          services
        </title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      {/* Login Page */}
      <main className="flex w-screen h-screen">
        {/* Login Area */}
        <div className="flex-1 flex items-center justify-center">
          <LoginArea />
        </div>
        {/* Image Area */}
        <div
          className="hidden lg:flex bg-center bg-no-repeat bg-cover"
          style={{
            flex: "2",
            backgroundImage: "url('/images/app-login-img.jpg')",
          }}
        ></div>
      </main>
    </div>
  );
}

Home.getInitialProps = async ({ req, res }) => {
  const data = parseCookies(req);

  if (res) {
    if (
      !(
        (Object.keys(data).length === 0 && data.constructor === Object) ||
        Object(data).user === "undefined"
      )
    ) {
      res.writeHead(301, { Location: "/dashboard" });
      res.end();
    }
  }

  return {
    data: data && data,
  };
};
