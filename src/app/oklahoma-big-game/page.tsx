import Image from 'next/image';
import Link from 'next/link';
import PriceList from '@/components/PriceList';

const oklahomaBigGamePrices = [
  {
    title: 'Elk',
    entries: [
      { name: 'Up to 300"', price: '$9,000' },
      { name: '301"–320"', price: '$11,000' },
      { name: '321"–349"', price: '$12,000' },
      { name: '350"–375"', price: '$15,000' },
      { name: '375"+', price: 'Price on request' },
    ],
  },
  {
    title: 'Whitetail & Mule Deer',
    entries: [
      {
        name: 'Free-range deer',
        price: '$5,500',
        note: 'Choose whitetail or mule deer. Both average 130"–150", but we hunt the biggest deer we can find.',
      },
      {
        name: 'High-fence, pasture-born whitetail',
        price: '$5,500',
        note: 'Typically around 140".',
      },
    ],
  },
  {
    title: 'High-Fence Whitetail',
    entries: [
      { name: '180"–200"', price: '$8,500' },
      { name: '201"–249"', price: '$10,500' },
      { name: '250"+', price: '$12,000' },
      { name: '300"+', price: '$15,000' },
    ],
  },
  {
    title: 'Exotics & Other Big Game',
    entries: [
      { name: 'Scimitar', price: '$5,500' },
      { name: 'Arabian', price: '$8,500' },
      { name: 'Gemsbok', price: '$8,500' },
      { name: 'Addax', price: '$8,500' },
      { name: 'Buffalo Bull', price: '$6,500' },
      { name: 'Buffalo Cow', price: '$4,500' },
      { name: 'Axis Buck', price: '$5,500' },
      { name: 'Red Stag', price: '$8,500–$12,500' },
      { name: 'Aoudad', price: '$3,750' },
      { name: 'Fallow', price: '$5,500–$7,500' },
      { name: 'Ram', price: '$2,500' },
      { name: 'Blackbuck', price: '$4,500' },
      { name: 'Water Buffalo', price: '$4,500' },
      { name: 'Red Lechwe', price: '$7,500' },
      { name: 'Barasingha', price: '$7,500' },
    ],
  },
];

export default function OklahomaBigGame() {
  return (
    <>
      <section className="relative flex h-[60vh] items-center justify-center">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/assets/free_range_big_game_lf/free_hunt1.JPEG"
            alt="Oklahoma big game hunting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.2em]">
            Free Range Big Game
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Oklahoma Big Game
          </h1>
          <p className="mx-auto max-w-3xl text-xl">
            All-inclusive guided hunts at our Woodward, Oklahoma ranch
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#2c1810]">
              The Woodward Ranch
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-[#2c1810]">
              Our Woodward, Oklahoma ranch includes more than 2,000 high-fenced
              acres and more than 6,000 low-fence acres, plus a five-star lodge
              that accommodates up to 10 hunters.
            </p>
            <p className="text-lg font-semibold leading-relaxed text-[#2c1810]">
              Every hunt is a three-day, two-night, all-inclusive package with
              meals, lodging, and a guide.
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
          <PriceList sections={oklahomaBigGamePrices} />
        </div>
      </section>

      <section className="bg-[#2e5d32] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Hunt Oklahoma Big Game?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl">
            Contact Honest Outfitters to check availability and plan your
            all-inclusive Woodward ranch hunt.
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
