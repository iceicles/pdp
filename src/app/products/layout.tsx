'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function ProductsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { productId: string };
}) {
  const pathname = usePathname();

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'grey',
        }}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/about' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {pathname === '/products' && (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/products'>Home</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}

      {children}
    </>
  );
}
