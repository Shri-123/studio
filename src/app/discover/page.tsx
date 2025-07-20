
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, SlidersHorizontal, Star } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';

const allTailors = [
  { id: 1, name: 'Savile Row Creations', type: "Men's Fashion", distance: 1.2, rating: 4.8, image: 'https://placehold.co/400x300.png', aihint: 'tailor shop' },
  { id: 2, name: 'The Queen\'s Needle', type: "Women's Wear", distance: 2.5, rating: 4.9, image: 'https://placehold.co/400x300.png', aihint: 'fashion boutique' },
  { id: 3, name: 'Stitch Perfect Kids', type: 'Kids Apparel', distance: 3.1, rating: 4.7, image: 'https://placehold.co/400x300.png', aihint: 'children clothing' },
  { id: 4, name: 'Modern Alterations', type: 'Alterations', distance: 4.0, rating: 4.6, image: 'https://placehold.co/400x300.png', aihint: 'sewing machine' },
  { id: 5, name: 'The Bridal Tailor', type: "Bridal Gowns", distance: 5.2, rating: 5.0, image: 'https://placehold.co/400x300.png', aihint: 'wedding dress' },
  { id: 6, name: 'Dapper Dans', type: "Men's Suits", distance: 6.8, rating: 4.8, image: 'https://placehold.co/400x300.png', aihint: 'mens suit' },
  { id: 7, name: 'Ultimate Alterations', type: 'Alterations', distance: 8.5, rating: 4.9, image: 'https://placehold.co/400x300.png', aihint: 'sewing machine thread' },
  { id: 8, name: 'Glamour Gowns', type: "Women's Wear", distance: 12.0, rating: 4.7, image: 'https://placehold.co/400x300.png', aihint: 'evening gown' },
];

export default function DiscoverPage() {
  const [stitchingType, setStitchingType] = useState('all');
  const [distance, setDistance] = useState(15);
  const [rating, setRating] = useState(1);
  const [filteredTailors, setFilteredTailors] = useState(allTailors);
  
  const applyFilters = () => {
    let tailors = allTailors;

    if (stitchingType !== 'all') {
      tailors = tailors.filter(tailor => tailor.type.toLowerCase().includes(stitchingType));
    }

    tailors = tailors.filter(tailor => tailor.distance <= distance);
    tailors = tailors.filter(tailor => tailor.rating >= rating);
    
    setFilteredTailors(tailors);
  };
  
  useEffect(() => {
    applyFilters();
  }, []);


  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline">
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Stitching Type</Label>
                <Select value={stitchingType} onValueChange={setStitchingType}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="men">Men's Fashion</SelectItem>
                    <SelectItem value="women">Women's Wear</SelectItem>
                    <SelectItem value="kids">Kids Apparel</SelectItem>
                    <SelectItem value="alterations">Alterations</SelectItem>
                    <SelectItem value="bridal">Bridal Gowns</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Distance (km): {distance}km</Label>
                <Input type="range" min="1" max="15" value={distance} onChange={e => setDistance(Number(e.target.value))} />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Min Rating: {rating.toFixed(1)}</Label>
                 <Input type="range" min="1" max="5" step="0.1" value={rating} onChange={e => setRating(Number(e.target.value))} />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" onClick={applyFilters}>Apply Filters</Button>
            </CardContent>
          </Card>
           <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline">
                <MapPin className="h-5 w-5" />
                Map View
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square w-full rounded-lg overflow-hidden shadow-inner">
                <Image
                  src="https://placehold.co/400x400.png"
                  alt="Map of tailors"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint="city map"
                />
              </div>
            </CardContent>
          </Card>
        </aside>

        <main className="w-full md:w-3/4 lg:w-4/5">
          <h1 className="text-3xl font-bold mb-6 font-headline text-primary">Nearby Tailors</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTailors.length > 0 ? filteredTailors.map((tailor) => (
              <Card key={tailor.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={tailor.image}
                      alt={tailor.name}
                      fill
                      className="object-cover"
                      data-ai-hint={tailor.aihint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <h2 className="text-lg font-bold font-headline text-primary truncate">{tailor.name}</h2>
                  <Badge variant="secondary" className="mt-1">{tailor.type}</Badge>
                  <div className="mt-3 flex items-center justify-between text-sm text-foreground/80">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{tailor.distance} km</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>{tailor.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href={`/tailor/${tailor.id}`}>View Profile</Link>
                  </Button>
                </CardFooter>
              </Card>
            )) : <p>No tailors found with the selected filters.</p>}
          </div>
        </main>
      </div>
    </div>
  );
}
