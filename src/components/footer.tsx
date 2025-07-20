import Link from 'next/link';
import { Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Scissors className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg font-headline text-primary">StitchLink</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-foreground/70">
            <Link href="/#about" className="hover:text-primary transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </nav>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {new Date().getFullYear()} StitchLink. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
