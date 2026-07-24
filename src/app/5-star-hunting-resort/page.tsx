import Image from 'next/image';
import Link from 'next/link';
import PriceList from '@/components/PriceList';

const africanHuntPrices = [
  {
    title: 'A–B',
    entries: [
      { name: 'Addax', price: '$11,000+' },
      { name: 'Aoudad Ram (Trophy)', price: '$5,500+' },
      { name: 'Axis Buck — up to 31"', price: '$5,500' },
      { name: 'Axis Buck — 32"–35"', price: '$6,500+' },
      { name: 'Axis Buck — 36"+', price: 'Price on request' },
      { name: 'Bison', price: '$8,500–$10,500+' },
      { name: 'Black Hawaiian Ram — under 38"', price: '$4,600+' },
      { name: 'Black Hawaiian Ram — 38"+', price: '$5,600+' },
      { name: 'Black Wildebeest', price: '$24,000+' },
      { name: 'Blackbuck — up to 17"', price: '$5,500' },
      { name: 'Blackbuck — 18"–23"', price: '$6,500' },
      { name: 'Blackbuck — 24"+', price: 'Price on request' },
      { name: 'Blesbok', price: '$11,000+' },
      { name: 'Blue Sheep', price: '$24,000+' },
      { name: 'Blue Wildebeest', price: '$12,000+' },
      { name: 'Bongo', price: '$48,000+' },
    ],
  },
  {
    title: 'C–G',
    entries: [
      { name: 'Catalina Ram', price: '$1,500+' },
      { name: 'Corsican Sheep — under 38"', price: '$4,600' },
      { name: 'Corsican Sheep — 38"+', price: '$5,600+' },
      { name: 'Dama Gazelle', price: '$10,000+' },
      { name: 'Eland', price: '$12,000+' },
      { name: "Eld's Deer", price: '$12,000+' },
      { name: 'Elk — up to 319"', price: '$10,000' },
      { name: 'Elk — 320"–369"', price: '$15,000' },
      { name: 'Elk — 370"–399"', price: '$20,000' },
      { name: 'Elk — 400"–440"', price: '$25,000' },
      { name: 'Elk — 441"–460"', price: '$30,000' },
      { name: 'Elk — 461"–499"', price: '$35,000' },
      { name: 'Elk — 500"+', price: 'Price on request' },
      { name: 'Fallow Buck (Trophy)', price: '$8,500+' },
      { name: 'Four-Horned Ram', price: '$3,500–$4,500+' },
      { name: 'Gayal', price: '$16,000+' },
      { name: 'Gemsbok — 25"–35"', price: '$12,500' },
      { name: 'Gemsbok — 36"+', price: 'Price on request' },
      { name: 'Grant Gazelle', price: '$16,000+' },
    ],
  },
  {
    title: 'H–N',
    entries: [
      { name: 'Himalayan Tahr', price: '$9,000+' },
      { name: 'Hog Deer', price: '$6,000+' },
      { name: 'Ibex Hybrid (Trophy)', price: '$6,000+' },
      { name: 'Impala', price: '$10,000+' },
      { name: 'Kangaroo', price: '$6,000+' },
      { name: 'Kudu', price: '$28,000+' },
      { name: 'Markhor', price: '$600 per inch' },
      { name: 'Mouflon Ram (Trophy)', price: '$5,500+' },
      { name: 'Muntjac Deer', price: '$6,000+' },
      { name: 'Nile Lechwe', price: '$15,500+' },
      { name: 'Nilgai (Trophy Bull)', price: '$8,500+' },
      { name: 'Nubian Ibex — 25"–34"', price: '$12,500' },
      { name: 'Nubian Ibex — 35"–45"', price: '$16,500' },
      { name: 'Nubian Ibex — 46"+', price: '$19,000+' },
      { name: 'Nyala — up to 23"', price: '$19,500' },
      { name: 'Nyala — 24"–27"', price: '$23,500' },
      { name: 'Nyala — 27"–32"', price: '$27,500' },
      { name: 'Nyala — 32"+', price: 'Price on request' },
    ],
  },
  {
    title: 'O–R',
    entries: [
      { name: 'Ostrich', price: '$4,500+' },
      { name: 'Painted Desert Ram — under 38"', price: '$4,600' },
      { name: 'Painted Desert Ram — 38"+', price: '$5,600+' },
      { name: "Père David's Deer", price: '$9,500+' },
      { name: 'Red Sheep (Trophy)', price: '$6,500+' },
      { name: 'Red Stag — 280"–360"', price: '$11,000' },
      { name: 'Red Stag — 361"–399"', price: '$16,000' },
      { name: 'Red Stag — 400"–440"', price: '$22,000' },
      { name: 'Red Stag — 441"–460"', price: '$27,000' },
      { name: 'Red Stag — 461"–499"', price: '$33,000' },
      { name: 'Red Stag — 500"+', price: 'Price on request' },
      { name: 'Roan Antelope', price: '$24,000+' },
      { name: 'Rusa Deer', price: '$15,000+' },
    ],
  },
  {
    title: 'S–Z',
    entries: [
      { name: 'Sable (Trophy Bull)', price: '$24,000+' },
      { name: 'Scimitar-Horned Oryx (Trophy)', price: '$7,500+' },
      { name: 'Sika Deer', price: '$8,000+' },
      { name: 'Sitatunga', price: '$16,000+' },
      { name: 'Springbok', price: '$9,500+' },
      { name: 'Texas Dall Ram — under 38"', price: '$4,600' },
      { name: 'Texas Dall Ram — 38"+', price: '$5,600+' },
      { name: 'Thompson Gazelle', price: '$10,000+' },
      { name: 'Transcaspian Urial Sheep — 35"+', price: '$15,000+' },
      { name: 'Turkey', price: 'Price on request' },
      { name: 'Watusi', price: '$8,000+' },
      { name: 'Water Buffalo', price: '$8,500+' },
      { name: 'Waterbuck', price: '$11,000+' },
      { name: 'White Bison', price: '$17,500+' },
      { name: 'Zebra', price: '$11,000+' },
    ],
  },
];

export default function FiveStarHuntingResort() {
  return (
    <>
      <section className="relative flex h-[60vh] items-center justify-center">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/assets/4.png"
            alt="Five-star hunting resort experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="mb-3 text-lg font-semibold uppercase tracking-[0.2em]">
            Corporate
          </p>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            5-Star Hunting Resort
          </h1>
          <p className="mx-auto max-w-3xl text-xl">
            Premium guided hunts at our Gatesville, Texas ranch
          </p>
        </div>
      </section>

      <section className="bg-[#f5f5dc] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#2c1810]">
              The Gatesville Ranch
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-[#2c1810]">
              We are located in Gatesville, Texas, approximately two hours
              south of the Dallas–Fort Worth metropolitan area. The ranch
              offers 2,400 acres of hunting land with more than 37 species and
              a lodge that sleeps up to 14 guests.
            </p>
            <p className="text-lg font-semibold leading-relaxed text-[#2c1810]">
              Amenities include a full entertainment room, two large fishing
              ponds, a pool and hot tub, full bar, air-conditioned blinds and
              buggies, and much more.
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
          <PriceList sections={africanHuntPrices} />
        </div>
      </section>

      <section className="bg-[#2e5d32] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Plan Your Gatesville Hunt?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl">
            Contact Honest Outfitters for current availability and help
            choosing the right trophy hunt.
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
