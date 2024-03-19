import "./App.css";
import React from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouterBreadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <div>
      <Navbar />
      <RouterBreadcrumbs />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
