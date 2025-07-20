import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FileText, User, Calendar, DollarSign, Wand2, Truck, Ruler, Shirt } from 'lucide-react';
import PatternSuggestion from '@/components/pattern-suggestion';

const orderDetails = {
  id: 'ORD003',
  customer: {
    name: 'Bob Johnson',
    email: 'bob.j@example.com',
    phone: '555-0103',
  },
  date: '2023-10-24',
  status: 'Pending',
  amount: 150.00,
  service: 'Custom Shirt',
  measurements: 'Chest: 42", Waist: 36", Sleeve: 25", Neck: 16.5"',
  deliveryOption: 'Shop Pickup',
  instructions: 'I want a classic business shirt with a spread collar. Please use a high-quality white cotton fabric. I prefer mother-of-pearl buttons. The fit should be slim but not too tight. Make sure the cuffs are French cuffs for cufflinks.',
  designImage: null,
};

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold font-headline text-primary">
          Order Details
        </h1>
        <div className="flex items-center gap-2">
            <Button variant="outline">Reject Order</Button>
            <Button className="bg-accent hover:bg-accent/90">Accept & Start</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Order #{orderDetails.id}</span>
                <Badge variant={orderDetails.status === 'Pending' ? 'outline' : 'secondary'}>{orderDetails.status}</Badge>
              </CardTitle>
              <CardDescription>Service: {orderDetails.service}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /> Instructions</h3>
                <p className="text-foreground/80 bg-secondary/50 p-4 rounded-md">{orderDetails.instructions}</p>
              </div>

               <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Ruler className="h-5 w-5 text-primary" /> Measurements</h3>
                <p className="text-foreground/80">{orderDetails.measurements}</p>
              </div>
              
              <Separator />

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Truck className="h-5 w-5 text-primary" /> Delivery</h3>
                <p className="text-foreground/80">{orderDetails.deliveryOption}</p>
              </div>

            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                    <Wand2 className="h-6 w-6 text-primary" />
                    AI Pattern Suggestions
                </CardTitle>
                <CardDescription>Analyze customer instructions to get pattern ideas.</CardDescription>
            </CardHeader>
            <CardContent>
                <PatternSuggestion garmentDescription={orderDetails.instructions} />
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Customer & Order Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2"><User className="h-4 w-4 text-accent" /> Customer</h4>
                  <p className="text-foreground/80">{orderDetails.customer.name}</p>
                  <p className="text-foreground/80 text-sm">{orderDetails.customer.email}</p>
                  <p className="text-foreground/80 text-sm">{orderDetails.customer.phone}</p>
              </div>
              <Separator />
               <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> Date</h4>
                  <p className="text-foreground/80">{orderDetails.date}</p>
              </div>
               <Separator />
               <div className="space-y-2">
                  <h4 className="font-semibold flex items-center gap-2"><DollarSign className="h-4 w-4 text-accent" /> Amount</h4>
                  <p className="text-foreground/80 font-bold text-lg">₹{orderDetails.amount.toFixed(2)}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
