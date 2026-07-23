import Image from 'next/image';
import Link from 'next/link';
import PriceList from '@/components/PriceList';

const texasExoticPrices = [
  {
    title: 'Sheep & Rams',
    entries: [
      { name: 'Aoudad Ewe', price: '$1,500' },
      { name: 'Aoudad under 30"', price: '$4,000' },
      { name: 'Aoudad over 30"', price: '$4,750' },
      { name: 'Catalina Ram', price: '$2,000' },
      { name: "Jacob's Four-Horn Ram", price: '$2,750' },
      { name: 'Mouflon Ram', price: '$150 per inch' },
      { name: 'Red Sheep Ram', price: '$150 per inch' },
    ],
  },
  {
    title: 'Deer',
    entries: [
      { name: 'Axis Buck', price: '$4,500' },
      { name: 'Axis Doe', price: '$1,000' },
      { name: 'Dybowski Sika', price: '$6,000' },
      { name: 'Hybrid Ibex', price: '$5,500' },
      { name: 'Japanese Sika', price: '$5,000' },
    ],
  },
  {
    title: 'Elk',
    entries: [
      { name: '330"–370"', price: '$10,500' },
      { name: '371"–399"', price: '$12,500' },
      { name: '400"+', price: 'Price on request' },
    ],
  },
  {
    title: 'Stag',
    entries: [
      { name: '331"–360"', price: '$10,500' },
      { name: '361"–380"', price: '$12,500' },
      { name: '381"–400"', price: '$15,000' },
      { name: '401"–420"', price: '$18,000' },
      { name: '421"–500"', price: 'Price on request' },
    ],
  },
  {
    title: 'African Game',
    entries: [
      { name: 'Addax Bull', price: '$9,000' },
      { name: 'Bison Bull', price: '$6,500' },
      { name: 'Bison Cow', price: '$3,750' },
      { name: 'Blackbuck', price: '$4,000' },
      { name: 'Eland Bull', price: '$8,500' },
      { name: 'Gemsbok', price: '$8,500' },
      { name: 'Kudu Bull', price: 'Price on request' },
      { name: 'Nile Lechwe', price: '$13,000' },
      { name: 'Nilgai Bull', price: '$6,000' },
      { name: 'Nyala Bull', price: '$15,000' },
      { name: 'Sable Bull', price: 'Price on request' },
      { name: 'Scimbok', price: '$7,500' },
      { name: 'Scimitar Bull', price: '$5,500' },
      { name: 'Wildebeest Bull', price: '$8,500' },
      { name: 'Zebra', price: '$8,500' },
    ],
  },
];

export default function FourStarExotics() {
  return (
    <>
      <section className="relative flex h-[60vh] items-center justify-center">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/assets/meat_budget_friendly/budget_hunt10.JPEG"
            alt="Texas exotic hunting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.2em]">
            Budget Friendly
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            4-Star Exotics
          </h1>
          <p className="mx-auto max-w-3xl text-xl">
            Texas exotic hunts with straightforward, honest pricing
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#2c1810]">
              Texas 4-Star Exotic Ranch
            </h2>
            <p className="text-lg leading-relaxed text-[#2c1810]">
              Choose from sheep, rams, deer, elk, stag, and African game at our
              Texas ranch. Meals and lodging are available for $125 per person,
              per night.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2c1810]">
            Hunt Price List
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-[#2c1810]">
            Pricing is listed by animal and trophy class. Contact us for
            availability and current hunt dates.
          </p>
          <PriceList sections={texasExoticPrices} />

          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-[#f5f5dc] p-6 text-center shadow">
            <p className="text-lg font-semibold text-[#2c1810]">
              Meals and lodging: $125 per person, per night
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2e5d32] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Plan Your Texas Exotic Hunt?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl">
            Contact Honest Outfitters for availability and help choosing the
            right hunt.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+15128101310"
              className="rounded-lg bg-white px-6 py-3 text-center font-medium text-[#2c1810] transition-colors hover:bg-gray-100"
            >
              Call (512) 810-1310
            </a>
            <Link
              href="/contact"
              className="rounded-lg bg-[#e67e22] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[#d35400]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
