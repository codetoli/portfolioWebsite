import { useState, useEffect } from "react";
import "./styles/global.css";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Join from "./pages/Join";
import About from "./pages/About";
import Resources, { ArticlePage } from "./pages/Resources";
import Contact from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activePost, setActivePost] = useState(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage, activePost]);

  // When navigating away from resources, clear the active post
  const navigate = (page) => {
    if (page !== "resources") setActivePost(null);
    setCurrentPage(page);
  };

  const renderPage = () => {
    const props = { setCurrentPage: navigate };

    if (currentPage === "resources" && activePost) {
      return (
        <div className="page-wrapper">
          <ArticlePage post={activePost} onBack={() => setActivePost(null)} />
        </div>
      );
    }

    switch (currentPage) {
      case "home":
        return (
          <div className="page-wrapper">
            <Home {...props} />
          </div>
        );
      case "services":
        return (
          <div className="page-wrapper">
            <Services {...props} />
          </div>
        );
      case "join":
        return (
          <div className="page-wrapper">
            <Join {...props} />
          </div>
        );
      case "about":
        return (
          <div className="page-wrapper">
            <About {...props} />
          </div>
        );
      case "resources":
        return (
          <div className="page-wrapper">
            <Resources {...props} setActivePost={setActivePost} />
          </div>
        );
      case "contact":
        return (
          <div className="page-wrapper">
            <Contact {...props} />
          </div>
        );
      default:
        return (
          <div className="page-wrapper">
            <Home {...props} />
          </div>
        );
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={navigate} />
      {renderPage()}
    </>
  );
}
