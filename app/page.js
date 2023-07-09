import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import PersonalCard from "./components/PersonalCard";

export default function Home() {
  return (
    <main className="text-[#fffdff] min-h-screen flex gap-10 max-w-[85rem] mx-auto px-3 pt-0">
      <div className="sticky top-0 h-fit pt-3">
        <PersonalCard />
      </div>
      <div className="min-w-[800px]">
        <MainContent />
      </div>
      <div className="w-full flex items-center max-h-screen sticky top-0">
        <Navbar />
      </div>
    </main>
  );
}
