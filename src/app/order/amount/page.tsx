// src/app/order/amount/page.tsx
"use client";

import { useSearchParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CreditCard, ShoppingBag, Truck, ArrowRight } from 'lucide-react';
import { Suspense } from 'react';
import { Separator } from '@/components/ui/separator';

const servicePrices: { [key: string]: number } = {
  'suit-stitching': 250,
  'shirt-making': 80,
  'custom-trousers': 120,
  'alterations': 50,
  'jacket-lining': 60,
};

const PLATFORM_FEE = 5.00;
const TAX_RATE = 0.08; // 8%

function toTitleCase(str: string) {
    if (!str) return '';
    return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}


function AmountContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const service = searchParams.get('service') || '';
    const measurementOption = searchParams.get('measurementOption') || 'provide-own';
    const deliveryOption = searchParams.get('deliveryOption') || 'pickup';
    
    const baseAmount = servicePrices[service] || 0;
    const taxAmount = baseAmount * TAX_RATE;
    const totalAmount = baseAmount + taxAmount + PLATFORM_FEE;

    const handleEditOrder = () => {
        const queryParams = new URLSearchParams({
            service: service,
            measurementOption: measurementOption,
            deliveryOption: deliveryOption,
        }).toString();
        // Assuming the tailor ID is 1 for this example. In a real app, you'd get this from the URL or state.
        router.push(`/tailor/1?${queryParams}`);
    };

    return (
        <div className="min-h-screen w-full bg-background relative flex items-center justify-center p-4">
             <Button
                variant="ghost"
                onClick={handleEditOrder}
                className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Edit Order
            </Button>
            <Card className="w-full max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl font-headline text-primary">Confirm Your Order</CardTitle>
                    <CardDescription>Review your order details before proceeding to payment.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
                        <div className="space-y-4 rounded-lg border bg-secondary/30 p-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Service:</span>
                                <span className="font-medium">{toTitleCase(service)}</span>
                            </div>
                             <Separator />
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Measurements:</span>
                                <span className="font-medium">{toTitleCase(measurementOption)}</span>
                            </div>
                             <Separator />
                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Delivery:</span>
                                <div className="flex items-center gap-2 font-medium">
                                    {deliveryOption === 'pickup' ? <ShoppingBag className="h-4 w-4" /> : <Truck className="h-4 w-4" />}
                                    <span>{toTitleCase(deliveryOption)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                     <div>
                        <h3 className="text-lg font-semibold mb-3">Price Breakdown</h3>
                        <div className="space-y-2 rounded-lg border p-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Service Cost:</span>
                                <span className="font-medium">₹{baseAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Platform Fee:</span>
                                <span className="font-medium">₹{PLATFORM_FEE.toFixed(2)}</span>
                            </div>
                             <div className="flex justify-between">
                                <span className="text-muted-foreground">Tax ({(TAX_RATE * 100).toFixed(0)}%):</span>
                                <span className="font-medium">₹{taxAmount.toFixed(2)}</span>
                            </div>
                             <Separator className="my-2"/>
                             <div className="flex justify-between font-bold text-lg">
                                <span className="text-foreground">Total:</span>
                                <span className="text-primary">₹{totalAmount.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <CreditCard className="mr-2 h-5 w-5" />
                        Place Order & Pay
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}


export default function OrderAmountPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AmountContent />
        </Suspense>
    );
}
