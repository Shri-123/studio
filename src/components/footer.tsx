import Link from 'next/link';
import { Scissors, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Scissors className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline text-primary">StitchLink</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting skilled tailors with customers who value quality craftsmanship.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">For Customers</h4>
            <ul className="space-y-2">
              <li><Link href="/discover" className="text-sm text-muted-foreground hover:text-primary">Find Tailors</Link></li>
              <li><Link href="/discover" className="text-sm text-muted-foreground hover:text-primary">Browse Services</Link></li>
              <li><Link href="/account/orders" className="text-sm text-muted-foreground hover:text-primary">Track Orders</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Customer Support</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">For Tailors</h4>
            <ul className="space-y-2">
              <li><Link href="/signup" className="text-sm text-muted-foreground hover:text-primary">Join Platform</Link></li>
              <li><Link href="/tailor/dashboard" className="text-sm text-muted-foreground hover:text-primary">Business Tools</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Success Stories</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Resources</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} StitchLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
