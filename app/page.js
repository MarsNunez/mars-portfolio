import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import PersonalCard from "./components/PersonalCard";

export default function Home() {
  return (
    <main>
      <div className="text-[#fffdff] min-h-screen md:flex gap-10 max-w-[85rem] mx-auto px-3 pt-0">
        <div className="md:sticky top-0 pt-3 flex items-center md:max-h-screen">
          <PersonalCard />
        </div>
        <div className="md:min-w-[800px]">
          <MainContent />
        </div>
        <div className="w-full flex items-center max-h-screen sticky top-0">
          <Navbar />
        </div>
      </div>
      <Footer />
    </main>
  );
}
