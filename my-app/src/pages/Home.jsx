import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Header />
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
};

export default Home;