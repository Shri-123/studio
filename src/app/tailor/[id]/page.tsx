
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Clock, DollarSign, MapPin, Phone, Shirt, Star } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const tailor = {
  id: 1,
  name: 'Savile Row Creations',
  type: "Men's Fashion",
  rating: 4.8,
  address: '123 Tailor St, Fashion City, 12345',
  phone: '(123) 456-7890',
  timing: 'Mon-Sat: 10am - 7pm',
  priceRange: '$$ - $$$',
  services: ['Suit Stitching', 'Shirt Making', 'Alterations', 'Custom Trousers', 'Jacket Lining'],
  gallery: [
    { id: 1, src: 'https://placehold.co/600x400.png', alt: 'Custom suit', aihint: 'mens suit' },
    { id: 2, src: 'https://placehold.co/600x400.png', alt: 'Detailed stitching', aihint: 'sewing detail' },
    { id: 3, src: 'https://placehold.co/600x400.png', alt: 'Fabric samples', aihint: 'fabric swatch' },
    { id: 4, src: 'https://placehold.co/600x400.png', alt: 'Shop interior', aihint: 'tailor shop' },
  ],
};

export default function TailorProfilePage({ params }: { params: { id: string } }) {
  const [unit, setUnit] = useState('in');

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="https://placehold.co/800x300.png" alt={`${tailor.name} shop front`} fill className="object-cover" data-ai-hint="boutique storefront" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                <h1 className="text-4xl font-bold text-white font-headline">{tailor.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">{tailor.type}</Badge>
                  <div className="flex items-center gap-1 text-white">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold">{tailor.rating}</span>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-6 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-headline text-primary">Shop Details</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-foreground/90">
                  <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" /> {tailor.address}</p>
                  <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /> {tailor.phone}</p>
                  <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-accent" /> {tailor.timing}</p>
                  <p className="flex items-center gap-3"><DollarSign className="h-5 w-5 text-accent" /> {tailor.priceRange}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-headline text-primary">Services Offered</h2>
                <div className="flex flex-wrap gap-2">
                  {tailor.services.map((service) => (
                    <Badge key={service} variant="outline" className="text-base py-1 px-3">{service}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold font-headline text-primary">Sample Work</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tailor.gallery.map(image => (
                    <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" data-ai-hint={image.aihint}/>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-headline text-primary">
                <Shirt className="h-6 w-6" />
                Place an Order
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {tailor.services.map(service => (
                       <SelectItem key={service} value={service.toLowerCase().replace(' ', '-')}>{service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <Label>Measurements</Label>
                    <Select value={unit} onValueChange={setUnit}>
                        <SelectTrigger className="w-[100px]">
                            <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="in">in</SelectItem>
                            <SelectItem value="cm">cm</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-1">
                        <Label htmlFor="chest" className="text-xs">Chest</Label>
                        <Input id="chest" type="number" placeholder="40" className="text-center" />
                    </div>
                     <div className="space-y-1">
                        <Label htmlFor="waist" className="text-xs">Waist</Label>
                        <Input id="waist" type="number" placeholder="34" className="text-center" />
                    </div>
                     <div className="space-y-1">
                        <Label htmlFor="length" className="text-xs">Length</Label>
                        <Input id="length" type="number" placeholder="30" className="text-center" />
                    </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Delivery Option</Label>
                <RadioGroup defaultValue="pickup" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup">Shop Pickup</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dropoff" id="dropoff" />
                    <Label htmlFor="dropoff">Customer Drop-off</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="instructions">Custom Instructions</Label>
                <Textarea id="instructions" placeholder="e.g., Add a pocket on the left side." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image-upload">Upload Design (Optional)</Label>
                <Input id="image-upload" type="file" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">Submit Order</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
