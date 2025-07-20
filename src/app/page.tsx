import { Button } from '@/components/ui/button';
import { Scissors, Target, Heart, Users, Search, MapPin, Clock, Shield, Star, Smartphone, UserCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline">
                Connect with <br />
                <span className="text-primary">Local Tailors</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
                Find skilled tailors nearby, browse their work, and get your
                perfect fit. Quality craftsmanship meets modern convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/discover">
                    <Users className="mr-2 h-5 w-5" />
                    Find Tailors
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/signup">
                    <Scissors className="mr-2 h-5 w-5" />
                    Join as Tailor
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Vintage sewing machine"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full"
                data-ai-hint="vintage sewing machine"
              />
               <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
               <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              Why Choose StitchLink
            </h2>
            <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
              We bridge the gap between traditional craftsmanship and modern
              convenience, creating the perfect platform for tailors and
              customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card text-center p-6 hover:shadow-lg transition-shadow">
               <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Location-Based Discovery</h3>
              <p className="text-foreground/70">
                Find tailors near you with precise geolocation matching and
                distance filtering.
              </p>
            </Card>
            <Card className="bg-card text-center p-6 hover:shadow-lg transition-shadow">
               <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Real-Time Tracking</h3>
              <p className="text-foreground/70">
                Track your order progress from initial measurement to final
                delivery.
              </p>
            </Card>
            <Card className="bg-card text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Secure Payments</h3>
              <p className="text-foreground/70">
                Safe and secure payment options with buyer protection and
                escrow services.
              </p>
            </Card>
            <Card className="bg-card text-center p-6 hover:shadow-lg transition-shadow">
               <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Quality Assurance</h3>
              <p className="text-foreground/70">
                Verified tailors with ratings, reviews, and portfolio
                showcase.
              </p>
            </Card>
            <Card className="bg-card text-center p-6 hover:shadow-lg transition-shadow">
               <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Mobile-First Design</h3>
              <p className="text-foreground/70">
                Seamless experience across all devices with intuitive mobile
                interface.
              </p>
            </Card>
            <Card className="bg-card text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-block rounded-full bg-primary/10 p-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Community Driven</h3>
              <p className="text-foreground/70">
                Connect with a community of satisfied customers and skilled
                artisans.
              </p>
            </Card>
          </div>
        </div>
      </section>

    </div>
  );
}
