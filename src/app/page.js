import Companies from "@/components/home/Companies";
import ExploreByCategories from "@/components/home/ExploreByCategories";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <main className="max-w-7xl mx-auto">
        <Companies />
        <ExploreByCategories />
      </main>
    </div>
  );
}
