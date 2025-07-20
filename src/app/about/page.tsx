
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold font-headline text-primary mb-4">About StitchLink</h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          We are dedicated to weaving together the timeless craft of tailoring with the convenience of modern technology, creating a seamless experience for both customers and artisans.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
           <h2 className="text-3xl font-bold font-headline text-primary mb-4 flex items-center gap-3">
            <Target className="h-8 w-8" />
            Our Mission
          </h2>
          <p className="text-foreground/70 text-lg mb-4">
            Our mission is to empower local tailors by providing them with a platform to showcase their skills, connect with a wider audience, and streamline their business operations. For customers, we aim to make custom clothing and alterations accessible, transparent, and enjoyable.
          </p>
           <p className="text-foreground/70 text-lg">
            We believe in the power of a perfect fit and the stories that clothes tell. StitchLink is more than a service; it's a community that celebrates craftsmanship, individuality, and local enterprise.
          </p>
        </div>
        <div className="relative h-80 rounded-xl shadow-lg overflow-hidden">
            <Image
                src="https://placehold.co/600x400.png"
                alt="Tailor sketching a design"
                fill
                className="object-cover"
                data-ai-hint="fashion sketch"
            />
        </div>
      </div>
      
      <section className="mb-20">
        <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
                <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-2">
                        <Heart className="h-8 w-8 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-xl">Craftsmanship</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/70">We honor the skill, precision, and artistry inherent in tailoring.</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-2">
                        <Users className="h-8 w-8 text-primary"/>
                    </div>
                    <CardTitle className="font-headline text-xl">Community</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/70">We foster connections between local tailors and their communities.</p>
                </CardContent>
            </Card>
             <Card className="text-center">
                <CardHeader className="items-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-2">
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22a10 10 0 1 0-8.6-14.8M12 22a10 10 0 0 1-8.6-14.8M12 2a10 10 0 0 1 8.6 14.8M12 2a10 10 0 0 0 8.6 14.8"/></svg>
                    </div>
                    <CardTitle className="font-headline text-xl">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/70">We leverage technology to simplify and enhance the tailoring experience.</p>
                </CardContent>
            </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline text-primary text-center mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-md">
                <Image src="https://placehold.co/300x300.png" alt="Team member 1" fill className="object-cover" data-ai-hint="portrait woman" />
            </div>
            <h3 className="text-lg font-bold">Alice Johnson</h3>
            <p className="text-sm text-muted-foreground">Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-md">
                <Image src="https://placehold.co/300x300.png" alt="Team member 2" fill className="object-cover" data-ai-hint="portrait man" />
            </div>
            <h3 className="text-lg font-bold">Ben Carter</h3>
            <p className="text-sm text-muted-foreground">Head of Technology</p>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-md">
                <Image src="https://placehold.co/300x300.png" alt="Team member 3" fill className="object-cover" data-ai-hint="portrait person" />
            </div>
            <h3 className="text-lg font-bold">Chloe Davis</h3>
            <p className="text-sm text-muted-foreground">Lead Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
