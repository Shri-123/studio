import { Button } from '@/components/ui/button';
import { Scissors } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary font-headline">
                StitchLink
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                Your local tailor, just a click away. <br />
                Custom stitching, alterations, and repairs made easy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/discover">Find a Tailor</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/signup">I'm a Tailor</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl shadow-2xl overflow-hidden">
               <Image
                src="https://placehold.co/600x400.png"
                alt="Tailor at work"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint="tailor sewing"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="flex flex-col items-center text-center bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                   <Scissors className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-primary font-headline">Discover Local Talent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Browse profiles of skilled tailors in your neighborhood.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                 <div className="mb-4 rounded-full bg-primary/10 p-4">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                </div>
                <CardTitle className="text-xl font-bold text-primary font-headline">Place Orders Easily</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Submit your requirements and measurements with our simple order form.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                 <div className="mb-4 rounded-full bg-primary/10 p-4">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-primary"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
                </div>
                <CardTitle className="text-xl font-bold text-primary font-headline">Track Your Stitch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  Stay updated on your order's progress from start to finish.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
