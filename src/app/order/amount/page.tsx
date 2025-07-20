// src/app/order/amount/page.tsx
"use client";

import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Suspense } from 'react';

const servicePrices: { [key: string]: number } = {
  'suit-stitching': 250,
  'shirt-making': 80,
  'custom-trousers': 120,
  'alterations': 50,
  'jacket-lining': 60,
};

function AmountContent() {
    const searchParams = useSearchParams();
    const service = searchParams.get('service') || '';
    const serviceName = service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const amount = servicePrices[service] || 0;

    return (
        <div className="min-h-screen w-full bg-background relative flex items-center justify-center p-4">
             <Link href="/" className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Link>
            <Card className="w-full max-w-md mx-auto text-center">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <CardTitle className="text-3xl font-headline text-primary">Order Submitted!</CardTitle>
                    <CardDescription>Your order request has been sent to the tailor.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="bg-secondary/50 p-6 rounded-lg">
                        <p className="text-lg font-semibold">Service: {serviceName}</p>
                        <p className="text-4xl font-bold text-foreground mt-2">${amount.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground mt-1">Estimated Cost</p>
                    </div>
                    <p className="text-sm text-muted-foreground">The tailor will review your request and confirm the order. You can track the status in your account.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <Button asChild className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/account/orders">View My Orders</Link>
                        </Button>
                        <Button asChild variant="outline" className="w-full sm:w-auto">
                            <Link href="/discover">Find Another Tailor</Link>
                        </Button>
                    </div>
                </CardContent>
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