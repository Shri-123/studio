
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, SlidersHorizontal, Star, Search, X } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

const allTailors = [
  { id: 1, name: 'Savile Row Creations', type: "Men's Fashion", distance: 1.2, rating: 4.8, image: 'https://placehold.co/400x300.png', aihint: 'tailor shop' },
  { id: 2, name: 'The Queen\'s Needle', type: "Women's Wear", distance: 2.5, rating: 4.9, image: 'https://placehold.co/400x300.png', aihint: 'fashion boutique' },
  { id: 3, name: 'Stitch Perfect Kids', type: 'Kids Apparel', distance: 3.1, rating: 4.7, image: 'https://placehold.co/400x300.png', aihint: 'children clothing' },
  { id: 4, name: 'Modern Alterations', type: 'Alterations', distance: 4.0, rating: 4.6, image: 'https://placehold.co/400x300.png', aihint: 'sewing machine' },
  { id: 5, name: 'The Bridal Tailor', type: "Bridal Gowns", distance: 5.2, rating: 5.0, image: 'https://placehold.co/400x300.png', aihint: 'wedding dress' },
  { id: 6, name: 'Dapper Dans', type: "Men's Fashion", distance: 6.8, rating: 4.8, image: 'https://placehold.co/400x300.png', aihint: 'mens suit' },
  { id: 7, name: 'Ultimate Alterations', type: 'Alterations', distance: 8.5, rating: 4.9, image: 'https://placehold.co/400x300.png', aihint: 'sewing machine thread' },
  { id: 8, name: 'Glamour Gowns', type: "Women's Wear", distance: 12.0, rating: 4.7, image: 'https://placehold.co/400x300.png', aihint: 'evening gown' },
];


export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [stitchingType, setStitchingType] = useState('all');
  const [distance, setDistance] = useState(15);
  const [filteredTailors, setFilteredTailors] = useState(allTailors);

  useEffect(() => {
    let tailors = allTailors;

    if (searchTerm) {
      tailors = tailors.filter(tailor => tailor.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    if (stitchingType !== 'all') {
      tailors = tailors.filter(tailor => tailor.type === stitchingType);
    }
    
    tailors = tailors.filter(tailor => tailor.distance <= distance);
    
    setFilteredTailors(tailors);
  }, [searchTerm, stitchingType, distance]);

  const clearFilters = () => {
    setSearchTerm('');
    setStitchingType('all');
    setDistance(15);
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Discover Your Perfect Tailor</h1>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          Find the best local tailors and artisans for your custom clothing and alteration needs.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
            <Card className="sticky top-20">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <SlidersHorizontal className="h-5 w-5"/>
                        Filters
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <Label htmlFor="search" className="text-sm font-medium">Search Tailor</Label>
                        <div className="relative mt-2">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="search"
                                placeholder="e.g., Savile Row"
                                className="pl-10"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="stitching-type" className="text-sm font-medium">Stitching Type</Label>
                        <Select value={stitchingType} onValueChange={setStitchingType}>
                            <SelectTrigger id="stitching-type" className="mt-2">
                                <SelectValue placeholder="All Types" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Types</SelectItem>
                                <SelectItem value="Men's Fashion">Men's Fashion</SelectItem>
                                <SelectItem value="Women's Wear">Women's Wear</SelectItem>
                                <SelectItem value="Kids Apparel">Kids Apparel</SelectItem>
                                <SelectItem value="Alterations">Alterations</SelectItem>
                                <SelectItem value="Bridal Gowns">Bridal Gowns</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="distance" className="text-sm font-medium">Max Distance: {distance} km</Label>
                        <Slider 
                            id="distance"
                            min={1} 
                            max={15} 
                            step={1} 
                            value={[distance]} 
                            onValueChange={(value) => setDistance(value[0])}
                        />
                         <div className="flex justify-between text-xs text-muted-foreground">
                            <span>1 km</span>
                            <span>15 km</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" onClick={clearFilters}>
                    <X className="mr-2 h-4 w-4" />
                    Clear Filters
                  </Button>
                </CardFooter>
            </Card>
        </aside>
        
        <main className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredTailors.length > 0 ? filteredTailors.map((tailor) => (
                <Card key={tailor.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                <CardHeader className="p-0">
                    <div className="relative aspect-video">
                    <Image
                        src={tailor.image}
                        alt={tailor.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={tailor.aihint}
                    />
                    <Badge variant="secondary" className="absolute top-3 right-3">{tailor.type}</Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                    <div className="flex justify-between items-start">
                    <h2 className="text-lg font-bold font-headline text-primary truncate pr-2">{tailor.name}</h2>
                    <div className="flex items-center gap-1 text-sm shrink-0">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{tailor.rating}</span>
                    </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm text-foreground/80">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span>{tailor.distance} km away</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href={`/tailor/${tailor.id}`}>View Profile</Link>
                    </Button>
                </CardFooter>
                </Card>
            )) : (
                <div className="col-span-full text-center py-16">
                    <p className="text-lg text-muted-foreground">No tailors found with the selected filters.</p>
                    <p className="text-sm text-muted-foreground mt-2">Try adjusting your search criteria.</p>
                </div>
            )}
            </div>
        </main>
      </div>
    </div>
  );
}
