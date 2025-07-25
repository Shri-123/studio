
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Clock, DollarSign, MapPin, Phone, Shirt, Star, Home, Ruler, Scissors, ShoppingBag, Truck, FileUp, ExternalLink, ArrowRight, ArrowDown, ArrowLeft } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState, useRef, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';

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

const serviceMeasurements: { [key: string]: string[] } = {
  'suit-stitching': ['Chest', 'Waist', 'Shoulder', 'Sleeve', 'Jacket Length', 'Trouser Length'],
  'shirt-making': ['Chest', 'Waist', 'Sleeve', 'Neck', 'Shirt Length'],
  'custom-trousers': ['Waist', 'Hip', 'Inseam', 'Outseam'],
  'alterations': ['Bust', 'Waist', 'Hips', 'Length to Alter'],
  'jacket-lining': [],
};

function TailorProfileContent({ params }: { params: { id: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const initialService = searchParams.get('service') || '';
  const initialMeasurementOption = searchParams.get('measurementOption') || '';
  const initialDeliveryOption = searchParams.get('deliveryOption') || '';
  
  const [unit, setUnit] = useState('in');
  const [selectedService, setSelectedService] = useState(initialService);
  const [measurementOption, setMeasurementOption] = useState(initialMeasurementOption);
  const [deliveryOption, setDeliveryOption] = useState(initialDeliveryOption);
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [designPreview, setDesignPreview] = useState<string>('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const card = formCardRef.current;
    if (!card) return;

    const checkScroll = () => {
      const isScrollable = card.scrollHeight > card.clientHeight;
      if (userHasScrolled) {
        setShowScrollIndicator(false);
        return;
      }
      setShowScrollIndicator(isScrollable);
    };
    
    const handleScroll = () => {
        if (card.scrollTop > 0 && !userHasScrolled) {
            setUserHasScrolled(true);
            setShowScrollIndicator(false);
        }
    }

    checkScroll();

    card.addEventListener('scroll', handleScroll);
    
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(card);

    return () => {
      card.removeEventListener('scroll', handleScroll);
      resizeObserver.unobserve(card);
    };
  }, [selectedService, measurementOption, userHasScrolled]);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setDesignFile(file);
      const previewUrl = URL.createObjectURL(file);
      setDesignPreview(previewUrl);
    } else {
      setDesignFile(null);
      setDesignPreview('');
    }
  };

  const handleScrollClick = () => {
    const card = formCardRef.current;
    if(card) {
        card.scrollTo({
            top: card.scrollHeight,
            behavior: 'smooth'
        });
    }
  };
  
  const measurements = selectedService ? serviceMeasurements[selectedService] : [];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedService) {
        toast({
            title: "Incomplete Order",
            description: "Please select a service before proceeding.",
            variant: "destructive",
        });
        return;
    }
    
    if (!measurementOption) {
        toast({
            title: "Incomplete Order",
            description: "Please select a measurement option.",
            variant: "destructive",
        });
        return;
    }
    
    if (!deliveryOption) {
        toast({
            title: "Incomplete Order",
            description: "Please select a delivery option for the finished garment.",
            variant: "destructive",
        });
        return;
    }

    const queryParams = new URLSearchParams({
        service: selectedService,
        measurementOption: measurementOption,
        deliveryOption: deliveryOption,
    });
    router.push(`/order/amount?${queryParams.toString()}`);
  };

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

        <div className="lg:col-span-1 lg:sticky lg:top-20 h-fit">
          <Card className="max-h-[calc(100vh-6rem)] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-headline text-primary">
                <Shirt className="h-6 w-6" />
                Place an Order
              </CardTitle>
            </CardHeader>
            <div ref={formCardRef} className="overflow-y-auto pr-2">
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service</Label>
                        <Select onValueChange={setSelectedService} value={selectedService}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {tailor.services.map(service => (
                               <SelectItem key={service} value={service.toLowerCase().replace(/ /g, '-')}>{service}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>How to get measured?</Label>
                        <RadioGroup value={measurementOption} onValueChange={setMeasurementOption} className="grid grid-cols-2 gap-2">
                            <Label htmlFor="provide-own" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                              <RadioGroupItem value="provide-own" id="provide-own" className="sr-only" />
                               <Ruler className="mb-2 h-6 w-6" />
                              <span className="text-sm text-center">Provide my own</span>
                            </Label>
                            <Label htmlFor="call-tailor" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                               <RadioGroupItem value="call-tailor" id="call-tailor" className="sr-only" />
                              <Home className="mb-2 h-6 w-6" />
                              <span className="text-sm text-center">Request home visit</span>
                            </Label>
                        </RadioGroup>
                      </div>
                      
                      {measurementOption === 'provide-own' && measurements.length > 0 && (
                        <div className="space-y-4 border-l-2 border-primary/50 pl-4">
                          <div className="flex justify-between items-center">
                              <Label>Measurements</Label>
                              <Select value={unit} onValueChange={setUnit}>
                                  <SelectTrigger className="w-[100px]">
                                      <SelectValue placeholder="Unit" />
                                  </SelectTrigger>
                                  <SelectContent>
                                      <SelectItem value="in">in</SelectItem>
                                      <SelectItem value="cm">cm</SelectItem>
                                      <SelectItem value="m">m</SelectItem>
                                  </SelectContent>
                              </Select>
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {measurements.map((measurement) => (
                              <div className="space-y-1" key={measurement}>
                                <Label htmlFor={measurement.toLowerCase().replace(' ', '-')} className="text-xs">{measurement}</Label>
                                <Input id={measurement.toLowerCase().replace(' ', '-')} type="number" placeholder="0" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                         <Label>Cloth Delivery</Label>
                        {measurementOption === 'provide-own' ? (
                           <RadioGroup defaultValue="dropoff" className="grid grid-cols-1 gap-2">
                             <Label htmlFor="dropoff-cloth" className="flex items-center gap-3 rounded-md border-2 border-muted bg-popover p-3 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                               <RadioGroupItem value="dropoff" id="dropoff-cloth" />
                                <Scissors className="h-5 w-5 text-accent" />
                               <span className="text-sm">I will drop it off at the shop</span>
                             </Label>
                           </RadioGroup>
                        ) : (
                          <div className="flex items-center gap-3 rounded-md border-2 border-dashed bg-secondary p-3">
                             <Home className="h-5 w-5 text-accent" />
                            <span className="text-sm text-muted-foreground">You can hand over the cloth during the home visit.</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label>Finished Garment Delivery</Label>
                        <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption} className="grid grid-cols-2 gap-2">
                            <Label htmlFor="pickup" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                              <RadioGroupItem value="pickup" id="pickup" className="sr-only" />
                               <ShoppingBag className="mb-2 h-6 w-6" />
                              <span className="text-sm text-center">Shop Pickup</span>
                            </Label>
                            <Label htmlFor="home-delivery" className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                               <RadioGroupItem value="home-delivery" id="home-delivery" className="sr-only" />
                              <Truck className="mb-2 h-6 w-6" />
                              <span className="text-sm text-center">Home Delivery</span>
                            </Label>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="instructions">Custom Instructions</Label>
                        <Textarea id="instructions" placeholder="e.g., Add a pocket on the left side." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="image-upload">Upload Design (Optional)</Label>
                        <div className="mt-2">
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <FileUp className="mr-2 h-4 w-4" />
                            Browse Design
                          </Button>
                          <Input
                            id="image-upload"
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                            accept="image/*"
                          />
                        </div>
                        {designFile && designPreview && (
                          <div className="mt-2 text-sm text-muted-foreground">
                            <a
                              href={designPreview}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-primary underline hover:text-primary/80"
                            >
                              <span>{designFile.name}</span>
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-6 flex flex-col gap-2">
                        <Button asChild variant="outline" size="lg" className="w-full">
                            <Link href="/discover">
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                Back
                            </Link>
                        </Button>
                        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            Proceed to Order
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </CardFooter>
                </form>
            </div>
            <div 
                className={cn("absolute bottom-16 left-1/2 -translate-x-1/2 transition-opacity duration-300 cursor-pointer", showScrollIndicator ? 'opacity-100' : 'opacity-0')}
                onClick={handleScrollClick}
            >
                <div className="animate-bounce rounded-full bg-primary p-2">
                    <ArrowDown className="h-6 w-6 text-primary-foreground" />
                </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function TailorProfilePage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TailorProfileContent params={params} />
    </Suspense>
  )
}

    