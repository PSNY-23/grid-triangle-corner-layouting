import { Button } from "../components/neo/Button";
import { Card } from "../components/neo/Card";
import { Badge } from "../components/neo/Badge";
import { ArrowRight, Check, Star } from "lucide-react";
import { Layout } from "../components/neo/Layout";

export const LandingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-16 lg:py-24">
        <Badge variant="teal">Neo-Skeuomorphism v2.0</Badge>
        <h1 className="text-5xl lg:text-7xl font-bold mt-6 mb-4 text-(--ink-primary) tracking-tight">
          Tactile Design <br /> for the{" "}
          <span className="text-(--teal-primary) relative whitespace-nowrap">
            Modern Web
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-(--teal-secondary) opacity-30"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5 L 100 8 Q 50 13 0 8 Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </h1>
        <p className="text-xl text-(--ink-secondary) max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the depth of interfaces with our new paper tactile system.
          Soft shadows, realistic textures, and responsive interactions.
        </p>
        <div className="flex items-center justify-center mb-8">
          <div className="relative group cursor-pointer">
            {/* Background / Empty State */}
            <Star
              size={96}
              className="text-(--teal-primary) opacity-20 transition-all duration-300 group-hover:opacity-40"
              strokeWidth={1}
            />

            {/* Foreground / Filling State */}
            <div className="absolute bottom-0 left-0 w-full h-0 overflow-hidden group-hover:h-full transition-[height] duration-1000 ease-in-out">
              <Star
                size={96}
                className="text-(--teal-primary) absolute bottom-0 left-0"
                strokeWidth={1}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="primary" size="lg" className="rounded-full !px-10">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="secondary" size="lg" className="rounded-full">
            View Documentation
          </Button>
        </div>
      </section>

      {/* Feature Grids */}
      <section className="grid md:grid-cols-3 gap-8 mt-12">
        <Card className="hover:translate-y-[-4px] transition-transform duration-300">
          <div className="w-12 h-12 rounded-xl bg-[var(--teal-primary)] flex items-center justify-center text-white mb-6 shadow-[var(--shadow-2)]">
            <Star fill="currentColor" />
          </div>
          <h3 className="text-xl font-bold mb-2">Premium Feel</h3>
          <p className="text-[var(--ink-muted)]">
            Every element is crafted to feel like high-quality stationery paper.
          </p>
        </Card>

        <Card className="hover:translate-y-[-4px] transition-transform duration-300">
          <div className="w-12 h-12 rounded-xl bg-[var(--ink-primary)] flex items-center justify-center text-white mb-6 shadow-[var(--shadow-2)]">
            <Check />
          </div>
          <h3 className="text-xl font-bold mb-2">Accessible</h3>
          <p className="text-[var(--ink-muted)]">
            High contrast text and clear hierarchy ensure your content is
            readable by everyone.
          </p>
        </Card>

        <Card className="hover:translate-y-[-4px] transition-transform duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Star size={120} />
          </div>
          <div className="w-12 h-12 rounded-xl bg-[var(--danger)] flex items-center justify-center text-white mb-6 shadow-[var(--shadow-2)]">
            <span className="font-bold text-xl">Aa</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Typography</h3>
          <p className="text-[var(--ink-muted)]">
            Paired with the beautiful 'Outfit' font for a modern, geometric yet
            friendly look.
          </p>
        </Card>
      </section>

      {/* Complex Call to Action */}
      <section className="mt-24">
        <div className="paper-card p-12 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--ink-primary)] mb-4">
                Ready to transform your UI?
              </h2>
              <p className="text-lg text-[var(--ink-secondary)] mb-8">
                Join thousands of developers building tactile, human-centric
                interfaces.
              </p>
              <div className="flex gap-4">
                <Button variant="primary">Start Building Now</Button>
              </div>
            </div>

            <div className="relative">
              {/* Abstract decorative elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--teal-primary)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[var(--danger)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

              <div className="paper-card bg-[var(--paper-light)] p-6 rotate-3 transform transition-transform hover:rotate-0">
                <div className="h-4 w-1/3 bg-[var(--ink-muted)]/20 rounded mb-4"></div>
                <div className="h-2 w-full bg-[var(--ink-muted)]/10 rounded mb-2"></div>
                <div className="h-2 w-full bg-[var(--ink-muted)]/10 rounded mb-2"></div>
                <div className="h-2 w-2/3 bg-[var(--ink-muted)]/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
