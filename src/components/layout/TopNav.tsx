'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import styles from './TopNav.module.css';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { authClient } from "@/lib/auth-client";

export default function TopNav({ loggedIn }: { loggedIn?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const logoutUser = async () => {
    try {
      await authClient.signOut();
      router.push('/');
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: '/', label: 'Kezdőlap' },
    { href: '/recipes', label: 'Receptek' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href='/' className={styles.logo}>
          MealPlan
        </Link>
        <div className={styles.desktopNav}>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive(item.href) && styles.active,
                    )}
                    asChild
                  >
                    <Link href={item.href} passHref>
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/login") && styles.active,
                    )}
                    asChild
                  >
                    {loggedIn ? 
                      <button onClick={logoutUser}>Kijelentkezés</button> : 
                      <Link href="/login">Bejelentkezés</Link>
                    }
                  </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
              className={styles.hamburger}
              aria-label='Menü megnyitása'
            >
              <Menu className='h-6 w-6' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className={styles.sheetContent}>
            <SheetHeader>
              <SheetTitle>Menü</SheetTitle>
            </SheetHeader>
            <nav className={styles.mobileNavLinks}>
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        styles.mobileNavLink,
                        isActive(item.href) && styles.active,
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  {loggedIn ?
                    <button
                      onClick={logoutUser}
                      className={styles.mobileNavLink}
                    >
                      Kijelentkezés
                    </button> 
                    :
                    <Link
                        href="/login"
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          styles.mobileNavLink,
                          isActive("/login") && styles.active,
                        )}
                      >
                        Bejelentkezés
                      </Link>
                  }
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}