import Companies from "@/components/home/Companies";
import CTASection from "@/components/home/CTASection";
import ExploreByCategories from "@/components/home/ExploreByCategories";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import HeroSection from "@/components/home/HeroSection";
import LatestJobs from "@/components/home/LatestJobs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <main className="max-w-7xl mx-auto">
        <Companies />
        <ExploreByCategories />
        <CTASection />
        <FeaturedJobs />
      </main>
      <LatestJobs />
    </div>
  );
}
