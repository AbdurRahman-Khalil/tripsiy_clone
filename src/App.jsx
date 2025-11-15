import { Toaster } from "react-hot-toast";

import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/footer/Footer";
import { ScrollTop } from "./components/custom/ScrollTop";


export const App = () => {
  const customToastsStyles = {
    success: {
      style: {
        fontFamily: "inherit",
        color: "#00B517",
        background: "#E5F7E7",
        paddingBlock: "11px",
        gap: "3px",
      },
      iconTheme: {
        primary: "#00B517",
        secondary: "#FFFFFF",
      },
    },
    error: {
      style: {
        fontFamily: "inherit",
        color: "#FA3434",
        background: "#FFE0E0",
        paddingBlock: "11px",
        gap: "3px",
      },
      iconTheme: {
        primary: "#FA3434",
        secondary: "#FFFFFF",
      },
    },
  };


  return (
    <>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>

      <ScrollTop />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={customToastsStyles}
      />
    </>
  );
};
