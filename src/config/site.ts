
import { Routes } from '@/config/routes';
import { PaymentGateway } from '@/types';

export const siteSettings = {
  name: 'Blooming Tales',
  description: 'Your premier destination for plants and flowers with fast delivery',
  logo: {
    url: '/logo.svg',
    alt: 'Blooming Tales',
    href: '/',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  currencyCode: 'EUR',
  product: {
    placeholderImage: '/product-placeholder.svg',
    // Focus only on grocery theme for plant marketplace
    cardMaps: {
      default: 'Krypton', // Use Krypton cards for all products
    },
  },
  authorizedLinks: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },
    { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
  ],
  authorizedLinksMobile: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },
    { href: Routes.cards, label: 'profile-sidebar-my-cards' },
    { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    { href: Routes.questions, label: 'profile-sidebar-my-questions' },
    { href: Routes.refunds, label: 'text-my-refunds' },
    { href: Routes.reports, label: 'profile-sidebar-my-reports' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
    { href: Routes.changePassword, label: 'profile-sidebar-password' },
  ],
  dashboardSidebarMenu: [
    {
      href: Routes.profile,
      label: 'profile-sidebar-profile',
    },
    {
      href: Routes.changePassword,
      label: 'profile-sidebar-password',
    },
    {
      href: Routes.orders,
      label: 'profile-sidebar-orders',
    },
    {
      href: Routes.downloads,
      label: 'profile-sidebar-downloads',
    },
    {
      href: Routes.wishlists,
      label: 'profile-sidebar-my-wishlist',
    },
    {
      href: Routes.questions,
      label: 'profile-sidebar-my-questions',
    },
    {
      href: Routes.refunds,
      label: 'text-my-refunds',
    },
    {
      href: Routes.reports,
      label: 'profile-sidebar-my-reports',
    },
    {
      href: Routes.cards,
      label: 'profile-sidebar-my-cards',
      cardsPayment: [PaymentGateway.STRIPE],
    },
    {
      href: Routes.help,
      label: 'profile-sidebar-help',
    },
    {
      href: Routes.logout,
      label: 'profile-sidebar-logout',
    },
  ],
  headerLinks: [
    { href: Routes.shops, icon: null, label: 'nav-menu-shops' },
    { href: Routes.coupons, icon: null, label: 'nav-menu-offer' },
    { href: Routes.contactUs, label: 'nav-menu-contact' },
    { href: Routes.help, label: 'nav-menu-faq' },
  ],
  footer: {
    menus: [
      {
        title: 'text-explore',
        links: [
          {
            name: 'Plant Shops',
            href: Routes.shops,
          },
          {
            name: 'Indoor Plants',
            href: '/products?category=indoor-plants',
          },
          {
            name: 'Outdoor Plants',
            href: '/products?category=outdoor-plants',
          },
          {
            name: 'Flowers',
            href: '/products?category=flowers',
          },
        ],
      },
      {
        title: 'text-customer-service',
        links: [
          {
            name: 'text-faq-help',
            href: Routes.help,
          },
          {
            name: 'Plant Care Guide',
            href: '/plant-care',
          },
          {
            name: 'Delivery Information',
            href: '/delivery-info',
          },
        ],
      },
      {
        title: 'text-our-information',
        links: [
          {
            name: 'About Us',
            href: '/about',
          },
          {
            name: 'Privacy policies',
            href: Routes.privacy,
          },
          {
            name: 'text-terms-condition',
            href: Routes.terms,
          },
          {
            name: 'text-contact-us',
            href: Routes.contactUs,
          },
        ],
      },
    ],
  },
};
