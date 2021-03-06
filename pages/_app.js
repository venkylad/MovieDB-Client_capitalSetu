import "../styles/globals.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import Header from "../Components/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick.css";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { ContextProvider } from "../Context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Toaster />
      <Header />
      <Component {...pageProps} />
      <footer
        className="mt-2 text-center bg-pink-100"
        style={{ boxShadow: "0px 2px 10px #80808061" }}
      >
        <div className="flex items-center justify-center p-4 text-center text-gray-700">
          © 2022 Copyright:
          <Link href="https://github.com/venkylad">
            <p className="ml-2 font-semibold text-gray-800 cursor-pointer">
              {" "}
              Venkatesh Konuku
            </p>
          </Link>
        </div>
      </footer>
    </ContextProvider>
  );
}

export default MyApp;
