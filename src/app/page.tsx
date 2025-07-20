
import { Button } from '@/components/ui/button';
import { Scissors, Search, MapPin, Clock, Shield, Star, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
            <Image
                src="https://placehold.co/1200x800.png"
                alt="Person getting measured by a tailor"
                layout="fill"
                objectFit="cover"
                className="opacity-20"
                data-ai-hint="tailor measurement"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-headline text-foreground">
              The Perfect Fit, <br />
              <span className="text-primary">Perfectly Simple.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80">
              Find skilled tailors nearby, browse their work, and get your
              perfect fit. Quality craftsmanship meets modern convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/signup">
                  <Users className="mr-2 h-5 w-5" />
                  Join as Customer
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm">
                <Link href="/signup?role=tailor">
                  <Scissors className="mr-2 h-5 w-5" />
                  Join as a Tailor
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
                    Choose Your Experience
                </h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
                    Whether you're looking for perfect tailoring or want to grow your business,
                    we have the right platform for you.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <Card className="bg-card p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <CardHeader className="p-0 mb-6 flex-row items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                           <Users className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-headline text-primary">I'm a Customer</CardTitle>
                            <p className="text-foreground/70">Find skilled tailors and get your perfect fit.</p>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ul className="space-y-3 text-foreground/90">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Browse local tailors nearby</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>View tailor profiles & work samples</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Place custom stitching orders</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Track order progress real-time</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Secure payment options</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Rate & review services</span>
                            </li>
                        </ul>
                        <Button asChild size="lg" className="w-full mt-8" variant="outline">
                            <Link href="/discover">Find a Tailor</Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="bg-card p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-primary/50 shadow-primary/10">
                     <CardHeader className="p-0 mb-6 flex-row items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                           <Scissors className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-headline text-primary">I'm a Tailor</CardTitle>
                            <p className="text-foreground/70">Grow your business and connect with customers.</p>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <ul className="space-y-3 text-foreground/90">
                           <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Create professional profile</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Showcase your work portfolio</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Manage customer orders</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Set your pricing & availability</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Connect with local customers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                <span>Grow your business online</span>
                            </li>
                        </ul>
                         <Button asChild size="lg" className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/signup?role=tailor">Join as Tailor</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      <section id="features" className="w-full py-16 md:py-24 bg-background">
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
            <Card className="bg-card text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
               <div className="mb-4 inline-block rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <MapPin className="h-8 w-8 text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Location-Based Discovery</h3>
              <p className="text-foreground/70">
                Find tailors near you with precise geolocation matching and
                distance filtering.
              </p>
            </Card>
            <Card className="bg-card text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
               <div className="mb-4 inline-block rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <Clock className="h-8 w-8 text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Real-Time Tracking</h3>
              <p className="text-foreground/70">
                Track your order progress from initial measurement to final
                delivery.
              </p>
            </Card>
            <Card className="bg-card text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
              <div className="mb-4 inline-block rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <Shield className="h-8 w-8 text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Secure Payments</h3>
              <p className="text-foreground/70">
                Safe and secure payment options with buyer protection and
                escrow services.
              </p>
            </Card>
            <Card className="bg-card text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
               <div className="mb-4 inline-block rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <Star className="h-8 w-8 text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Quality Assurance</h3>
              <p className="text-foreground/70">
                Verified tailors with ratings, reviews, and portfolio
                showcase.
              </p>
            </Card>
             <Card className="bg-card text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
               <div className="mb-4 inline-block rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                 <CheckCircle className="h-8 w-8 text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">Easy to Use</h3>
              <p className="text-foreground/70">
                 Seamless experience across all devices with intuitive mobile
                interface.
              </p>
            </Card>
            <Card className="bg-card text-center p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
              <div className="mb-4 inline-block rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                <Users className="h-8 w-8 text-primary transition-colors" />
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
