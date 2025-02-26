import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/assets/west_texas_sunset2.jpg"
          alt="West Texas Sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <Image
              src="/assets/logo_white.PNG"
              alt="Honest Outfitters Logo"
              width={400}
              height={120}
              className="mx-auto mb-8"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2c1810] mb-6">Our Mission</h2>
            <p className="text-lg text-[#2c1810] leading-relaxed">
              Honest Outfitters LLC is your premier destination for guided hunting adventures, 
              specializing in free-range big game. With expert guides, ethical practices, and 
              a commitment to conservation, we create personalized, unforgettable hunting experiences!
            </p>
          </div>
        </div>
      </section>

      {/* Main Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2c1810] text-center mb-12">
              Premium Free Range Big Game Hunting
            </h2>
            
            {/* North American Hunting */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-[#2c1810] mb-8">North American Adventures</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <Image
                    src="/assets/free_range_big_game_lf/free_hunt1.JPEG"
                    alt="Free Range Big Game Hunting"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-[#2c1810]">
                    Experience the thrill of hunting free-range big game in their natural habitat across 
                    North America. Our expert guides specialize in tracking and pursuing:
                  </p>
                  <ul className="list-disc pl-6 text-[#2c1810] space-y-2">
                    <li>West Texas Elk</li>
                    <li>Sonoran Desert Mule Deer</li>
                    <li>North Carolina Black Bear</li>
                    <li>Alaskan Moose and Caribou</li>
                    <li>New Zealand Stag and Tahr</li>
                    <li>And many more species</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* International Hunting */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-[#2c1810] mb-8">International Expeditions</h3>
              <div className="bg-[#f5f5dc] p-8 rounded-lg">
                <p className="text-lg text-[#2c1810] mb-6">
                  Looking for the ultimate international hunting adventure? We coordinate exceptional 
                  hunting experiences worldwide with trusted partners and experienced local guides. 
                  Contact us to discuss custom international packages tailored to your dream hunt!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+15128101310"
                    className="bg-[#2c1810] text-white px-6 py-3 rounded-lg text-center hover:bg-[#2c1810]/90 transition-colors"
                  >
                    Call to Inquire
                  </a>
                  <a 
                    href="mailto:honestoutfittersllc@gmail.com"
                    className="border-2 border-[#2c1810] text-[#2c1810] px-6 py-3 rounded-lg text-center hover:bg-[#2c1810] hover:text-white transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-semibold text-[#2c1810] mb-8">The Honest Outfitters Experience</h3>
              <div className="grid md:grid-cols-3 gap-6">
                
                <div className="p-6 bg-[#f5f5dc] rounded-lg">
                  <h4 className="text-xl font-semibold text-[#2c1810] mb-4">Prime Locations</h4>
                  <p className="text-[#2c1810]">
                    Access to diverse hunting territories across North America, carefully selected 
                    for optimal game populations.
                  </p>
                </div>
                <div className="p-6 bg-[#f5f5dc] rounded-lg">
                  <h4 className="text-xl font-semibold text-[#2c1810] mb-4">Premium Accommodations</h4>
                  <p className="text-[#2c1810]">
                    Enjoy luxury lodging and gourmet camp cuisine prepared by our skilled chef, 
                    ensuring comfort and satisfaction after your day&apos;s adventure.
                  </p>
                </div>
                <div className="p-6 bg-[#f5f5dc] rounded-lg">
                  <h4 className="text-xl font-semibold text-[#2c1810] mb-4">Custom Packages</h4>
                  <p className="text-[#2c1810]">
                    Flexible hunting packages designed to match your specific goals, timeline, 
                    and preferred game species.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 