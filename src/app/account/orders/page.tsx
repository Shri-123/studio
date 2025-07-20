import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const orders = [
  { id: 'MYORD01', tailor: 'Savile Row Creations', service: 'Suit Alteration', date: '2023-10-26', status: 'In Progress', amount: 75.00 },
  { id: 'MYORD02', tailor: 'The Queen\'s Needle', service: 'Blouse Stitching', date: '2023-10-20', status: 'Completed', amount: 120.00 },
  { id: 'MYORD03', tailor: 'Modern Alterations', service: 'Jacket Repair', date: '2023-10-15', status: 'Completed', amount: 90.00 },
];

const statusVariant: { [key: string]: 'default' | 'secondary' | 'outline' } = {
  'Pending': 'outline',
  'In Progress': 'secondary',
  'Completed': 'default',
};

export default function CustomerOrdersPage() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline text-primary">My Orders</CardTitle>
          <CardDescription>Track the status of your tailoring orders.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Tailor</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.tailor}</TableCell>
                  <TableCell>{order.service}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                     <Badge variant={statusVariant[order.status] || 'default'}
                      className={order.status === 'Completed' ? 'bg-green-600/80 text-white' : ''}
                    >
                        {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">₹{order.amount.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
