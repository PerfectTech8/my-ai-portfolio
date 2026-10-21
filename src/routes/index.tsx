import { createFileRoute } from "@tanstack/react-router";
import { Floating, Footer, Navbar } from "@/components/site/Chrome";
import { About, Contact, FinalCta, Hero, Pricing, Process, ProblemSolution, Services, Testimonials, Work } from "@/components/site/Sections";

const title = "Nnanta Charles — Cinematic AI Video & Content for Brands";
const description = "Premium AI-generated brand films, social content engines and ad creative for enterprise brands. Faster and more cost-effective than traditional production.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <Work />
        <ProblemSolution />
        <Services />
        <Process />
       
        
        <About />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
  
    </>
  );
}
