import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesSection />
      <WhyChooseUs />
      <BeforeAfterSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
