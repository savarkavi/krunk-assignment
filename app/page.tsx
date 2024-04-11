import Chatbox from "@/components/Chatbox";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="p-2">
      <Header />
      <Chatbox />
      <Filters />
      <Footer />
    </div>
  );
}
