import Image from 'next/image';
import Link from 'next/link';
import PriceList from '@/components/PriceList';

const whitetailPrices = [
  {
    title: 'Whitetail Deer',
    entries: [
      { name: '160"–169"', price: '$7,500' },
      { name: '170"–179"', price: '$9,000' },
      { name: '180"–189"', price: '$10,500' },
      { name: '190"–199"', price: '$11,500' },
      { name: '200"–219"', price: '$13,400' },
      { name: '220"–239"', price: '$15,400' },
      { name: '240"–279"', price: '$17,400' },
      { name: '280"–299"', price: '$20,500' },
      { name: '300"+', price: 'Price on request' },
    ],
  },
];

export default function FiveStarWhitetail() {
  return (
    <>
      <section className="relative flex h-[60vh] items-center justify-center">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/assets/5.png"
            alt="Five-star whitetail hunting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.2em]">
            Super Trophy
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            5-Star Whitetail
          </h1>
          <p className="mx-auto max-w-3xl text-xl">
            Trophy-class whitetail hunting with premium accommodations and
            personal service
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-[#2c1810]">
              The Super-Trophy Whitetail Experience
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-[#2c1810]">
              Pursue exceptional whitetail with experienced guides who
              understand the property, the deer, and the patience required for
              a true trophy hunt.
            </p>
            <p className="text-lg leading-relaxed text-[#2c1810]">
              Every detail is designed around a comfortable, high-end hunting
              experience—from time in the field to lodging, meals, and trophy
              care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-[#f5f5dc] shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/5_start_trophy_exotics/trophy_animals1.JPG"
                  alt="Trophy-class hunting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="mb-4 text-2xl font-semibold text-[#2c1810]">
                  Super-Trophy Focus
                </h2>
                <p className="leading-relaxed text-[#2c1810]">
                  We focus on finding the best available deer and giving each
                  hunter the guidance, time, and attention a trophy hunt
                  deserves.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-[#f5f5dc] shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/5_start_trophy_exotics/trophy_lodging1.JPG"
                  alt="Five-star hunting lodge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="mb-4 text-2xl font-semibold text-[#2c1810]">
                  Five-Star Comfort
                </h2>
                <p className="leading-relaxed text-[#2c1810]">
                  Relax after the hunt with premium lodging and hospitality
                  that make the entire trip feel like a first-class experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2c1810]">
            Whitetail Price List
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-[#2c1810]">
            Pricing is listed by trophy class. Contact us for availability and
            current hunt dates.
          </p>
          <PriceList sections={whitetailPrices} />
        </div>
      </section>

      <section className="bg-[#2e5d32] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Plan Your 5-Star Whitetail Hunt
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl">
            Contact Honest Outfitters for current availability and trophy
            options.
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
