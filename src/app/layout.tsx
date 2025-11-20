import type { Metadata } from 'next';
import {
  Barlow_Condensed,
  Inter,
  Manrope,
  Montserrat_Alternates,
  Playfair_Display,
  Poppins,
} from 'next/font/google';
import '../styles/globals.css';
import '../styles/ham.css';
import { cn } from '@/lib/utils';
import Providers from './Providers';

// ⚠️ IMPORTANT: Update this to your actual domain once you get a custom domain
// For now, use your Vercel URL, but prioritize getting Spicysquarecatering.ae
const SITE_URL = 'https://spicy-square-catering-servives.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Spicy Square Catering | Authentic Indian Food Delivery in Dubai - Monthly Mess Packages',
    template: '%s | Spicy Square Catering Dubai',
  },
  description:
    'Spicy Square Catering offers authentic Indian cuisine with monthly mess packages in Dubai. Enjoy fresh Kerala-style breakfast, lunch, and dinner delivered to your doorstep. Traditional recipes, home delivery, and affordable pricing at Dubai Investment Park 2.',
  keywords: [
    'Spicy Square Catering',
    'Indian food delivery Dubai',
    'monthly mess Dubai',
    'Kerala food Dubai',
    'Indian catering Dubai',
    'home food delivery Dubai',
    'mess service Dubai',
    'authentic Indian cuisine',
    'South Indian food Dubai',
    'tiffin service Dubai',
    'Indian meal plans Dubai',
    'daily food delivery',
    'Kerala restaurant Dubai',
    'biryani delivery Dubai',
    'dosa Dubai',
    'Indian breakfast Dubai',
    'Dubai Investment Park catering',
    'affordable Indian food',
    'home-cooked meals Dubai',
    'Indian mess Dubai',
  ],
  openGraph: {
    title:
      'Spicy Square Catering Dubai | Authentic Indian Monthly Mess & Food Delivery',
    description:
      'Experience authentic Indian cuisine delivered fresh daily. Spicy Square Catering offers monthly mess packages with traditional Kerala recipes. Fresh breakfast, lunch, and dinner. Order now for home delivery in Dubai! Starting from 180 AED/month.',
    siteName: 'Spicy Square Catering',
    images: [
      {
        url: `${SITE_URL}/images/Spicy-catering-og.jpg`,
        width: 1200,
        height: 630,
        alt: 'Spicy Square Catering - Authentic Indian Food Delivery in Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Spicy Square Catering | Indian Food Delivery & Monthly Mess in Dubai',
    description:
      'Authentic Indian cuisine delivered fresh daily in Dubai. Monthly mess packages with Kerala-style breakfast, lunch & dinner. Affordable pricing, home delivery. Order now!',
    images: [`${SITE_URL}/images/Spicy-catering-twitter.jpg`],
  },
  icons: [
    { rel: 'icon', url: '/images/logo.webp' },
    { rel: 'apple-touch-icon', url: '/images/logo.webp' },
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    'contact:phone_number': '+971507440148',
    'contact:email': 'spicysquarecatering@gmail.com',
    'business:contact_data:street_address':
      'Warehouse 130-103, King Key Stores, Dubai Investment Park 2',
    'business:contact_data:locality': 'Dubai',
    'business:contact_data:region': 'Dubai',
    'business:contact_data:postal_code': '',
    'business:contact_data:country_name': 'United Arab Emirates',
  },
};

// Restaurant structured data
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Spicy Square Catering',
  image: `${SITE_URL}/images/Spicy-catering-logo.jpg`,
  '@id': SITE_URL,
  url: SITE_URL,
  telephone: '+971507440148',
  email: 'spicysquarecatering@gmail.com',
  priceRange: '180 AED - 370 AED',
  address: {
    '@type': 'PostalAddress',
    streetAddress:
      'Warehouse 130-103, King Key Stores for Warehouse Management',
    addressLocality: 'Dubai Investment Park 2',
    addressRegion: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.04,
    longitude: 55.17,
  },
  servesCuisine: ['Indian', 'Kerala', 'South Indian'],
  menu: `${SITE_URL}/menu`,
  acceptsReservations: 'True',
  currenciesAccepted: 'AED',
  paymentAccepted: 'Cash, Bank Transfer',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '500',
  },
  sameAs: [
    'https://www.instagram.com/Spicycatering',
    'https://www.facebook.com/Spicycatering',
    'https://wa.me/971507440148',
  ],
};

// Food establishment structured data
export const foodEstablishmentData = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Spicy Square Catering',
  description:
    'Authentic Indian catering service offering monthly mess packages with traditional Kerala cuisine. Fresh daily preparation and home delivery in Dubai.',
  image: `${SITE_URL}/images/Spicy-catering-hero.jpg`,
  servesCuisine: 'Indian',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Warehouse 130-103, Dubai Investment Park 2',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  telephone: '+971507440148',
  email: 'spicysquarecatering@gmail.com',
  priceRange: 'AED 180-370',
  hasMenu: {
    '@type': 'Menu',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'Monthly Mess Packages',
        hasMenuItem: [
          {
            '@type': 'MenuItem',
            name: '1 Time Food Package',
            description: 'Lunch only - Fresh daily preparation',
            offers: {
              '@type': 'Offer',
              price: '180',
              priceCurrency: 'AED',
            },
          },
          {
            '@type': 'MenuItem',
            name: '2 Times Food Package',
            description: 'Lunch + Dinner - Most popular package',
            offers: {
              '@type': 'Offer',
              price: '320',
              priceCurrency: 'AED',
            },
          },
          {
            '@type': 'MenuItem',
            name: '3 Times Food Package',
            description: 'Breakfast + Lunch + Dinner - Complete meal solution',
            offers: {
              '@type': 'Offer',
              price: '370',
              priceCurrency: 'AED',
            },
          },
        ],
      },
    ],
  },
};

// Service structured data
export const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Food Catering Service',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Spicy Square Catering',
    telephone: '+971507440148',
    email: 'spicysquarecatering@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Warehouse 130-103, Dubai Investment Park 2',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Monthly Mess Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Monthly Lunch Package',
          description: 'Fresh Indian lunch delivered daily',
        },
        price: '180',
        priceCurrency: 'AED',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Monthly Lunch & Dinner Package',
          description: 'Fresh Indian lunch and dinner delivered daily',
        },
        price: '320',
        priceCurrency: 'AED',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Monthly Full Day Package',
          description:
            'Fresh Indian breakfast, lunch, and dinner delivered daily',
        },
        price: '370',
        priceCurrency: 'AED',
      },
    ],
  },
};

// Organization structured data
export const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Spicy Square Catering',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.webp`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971507440148',
    contactType: 'Customer Service',
    email: 'spicysquarecatering@gmail.com',
    areaServed: 'AE',
    availableLanguage: ['English', 'Hindi', 'Malayalam'],
  },
  sameAs: [
    'https://www.instagram.com/Spicycatering',
    'https://www.facebook.com/Spicycatering',
    'https://wa.me/971507440148',
  ],
};

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

const montserrat__alternates = Montserrat_Alternates({
  subsets: ['latin'],
  variable: '--font-montserrat__alternates',
  weight: ['400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const plafair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-plafair',
  weight: ['400', '500', '600', '700'],
});

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(foodEstablishmentData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
      </head>
      <body
        className={cn(
          'theme-custom flex min-h-screen antialiased',
          manrope.variable,
          poppins.variable,
          inter.variable,
          plafair.variable,
          barlow.variable,
          montserrat__alternates.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
