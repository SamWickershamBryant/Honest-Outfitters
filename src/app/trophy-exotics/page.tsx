import Image from 'next/image';
import Link from 'next/link';

export default function TrophyExotics() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/5_start_trophy_exotics/exotic1.JPEG"
            alt="Trophy Exotic Hunting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Trophy Exotic Hunting</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience the thrill of pursuing magnificent exotic species in our premium hunting grounds
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2c1810] mb-8 text-center">The Ultimate Exotic Hunting Experience</h2>
            <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
              At Honest Outfitters, we offer unparalleled opportunities to pursue some of the world&apos;s most magnificent exotic species. Our carefully managed hunting grounds in Texas provide the perfect habitat for a diverse range of exotic game, ensuring successful hunts and impressive trophies.
            </p>
            <p className="text-lg text-[#2c1810] leading-relaxed">
              Whether you&apos;re an experienced hunter looking to add rare species to your collection or a newcomer to exotic game hunting, our expert guides will provide personalized attention and knowledge to enhance your experience. With luxury accommodations and gourmet dining, your exotic hunting adventure will be as comfortable as it is thrilling.
            </p>
          </div>
        </div>
      </section>

      {/* Exotic Species */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Available Exotic Species</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Premium Exotics */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/5_start_trophy_exotics/exotic2.JPEG"
                  alt="Premium Exotics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Premium Exotics</h3>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                  <li>Axis Deer</li>
                  <li>Fallow Deer</li>
                  <li>Blackbuck Antelope</li>
                  <li>Aoudad Sheep</li>
                  <li>Nilgai Antelope</li>
                  <li>Sika Deer</li>
                </ul>
                <p className="text-[#2c1810]">
                  Our premium exotics offer exceptional hunting opportunities with abundant populations and impressive trophy potential, all within carefully managed habitats.
                </p>
              </div>
            </div>
            
            {/* Super Exotics */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/5_start_trophy_exotics/exotic3.JPEG"
                  alt="Super Exotics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Super Exotics</h3>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                  <li>Red Stag</li>
                  <li>Scimitar Oryx</li>
                  <li>Arabian Oryx</li>
                  <li>Addax</li>
                  <li>Bongo</li>
                  <li>Water Buffalo</li>
                </ul>
                <p className="text-[#2c1810]">
                  Our super exotics collection features rare and magnificent species from around the world, offering truly unique hunting experiences and impressive trophy opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hunt Packages */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Exotic Hunt Packages</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Standard Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Standard Exotic Package</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">3-day guided hunt</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Comfortable lodge accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">All meals included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">1:1 guide ratio</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Trophy preparation</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $3,500</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#2c1810] hover:bg-[#3d241a] text-white py-3 rounded-lg text-center transition-colors font-medium"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 z-10 border-2 border-[#e67e22]">
              <div className="bg-[#e67e22] py-2 text-center">
                <span className="text-white font-semibold">MOST POPULAR</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Premium Exotic Package</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">5-day guided hunt</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Luxury lodge accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Gourmet meals prepared by our chef</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">1:1 guide ratio</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Trophy preparation and shipping assistance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Professional photography of your hunt</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $5,500</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#e67e22] hover:bg-[#d35400] text-white py-3 rounded-lg text-center transition-colors font-medium"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            {/* Super Exotic Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Super Exotic Package</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">7-day guided hunt</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Private luxury cabin</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Private chef and customized menu</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">2 guides per hunter</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Full taxidermy services included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Professional videography of your hunt</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $9,000</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#2c1810] hover:bg-[#3d241a] text-white py-3 rounded-lg text-center transition-colors font-medium"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#2c1810] italic mb-8">
              * Prices vary based on species, season, and trophy quality. Contact us for a personalized quote.
            </p>
            <p className="text-[#2c1810] mb-8">
              All packages can be customized to meet your specific needs and preferences. We also offer multi-species discounts for hunters interested in pursuing multiple exotic species.
            </p>
          </div>
        </div>
      </section>

      {/* Luxury Experience */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">The Luxury Exotic Hunting Experience</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/assets/5_start_trophy_exotics/exotic2.JPEG"
                  alt="Luxury Accommodations"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Premium Accommodations</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                Our exotic hunting experiences include stays at our luxury lodges and cabins, designed to provide the perfect blend of rustic charm and modern comfort. After an exciting day of hunting, relax in spacious rooms with premium bedding and all the amenities you need.
              </p>
              <p className="text-lg text-[#2c1810] leading-relaxed">
                From private cabins to elegant lodge rooms, we offer accommodations to suit every preference, ensuring your stay is as memorable as your hunt.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/assets/5_start_trophy_exotics/exotic3.JPEG"
                  alt="Expert Guides"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Expert Guides & Trophy Care</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                Our team of experienced guides specializes in exotic game hunting, with extensive knowledge of each species&apos; behavior and habitat. They&apos;ll ensure you have the best possible opportunity for a successful hunt and a trophy-quality harvest.
              </p>
              <p className="text-lg text-[#2c1810] leading-relaxed">
                After your successful hunt, we provide professional trophy care services, including field dressing, skinning, and preparation for taxidermy. We can also arrange shipping to your preferred taxidermist to ensure your trophy is preserved perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Hunter Testimonials</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg className="h-10 w-10 text-[#e67e22]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-[#2c1810] italic">
                  &quot;My Axis deer hunt with Honest Outfitters exceeded all expectations. The guides knew exactly where to find trophy-quality animals, and the accommodations were first-class. I&apos;m already planning my return trip for a Red Stag!&quot;
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#2c1810] font-semibold">- David M.</p>
                <p className="text-[#2c1810] text-sm">Axis Deer Hunt</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg className="h-10 w-10 text-[#e67e22]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-[#2c1810] italic">
                  &quot;The Super Exotic package was worth every penny. I harvested a magnificent Scimitar Oryx and enjoyed the luxury accommodations and gourmet meals. The attention to detail in the trophy preparation was impressive. A world-class experience!&quot;
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#2c1810] font-semibold">- Thomas R.</p>
                <p className="text-[#2c1810] text-sm">Super Exotic Hunt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2e5d32] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Exotic Hunting Adventure?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact us today to plan your custom exotic hunting experience with Honest Outfitters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+15128101310"
              className="bg-white text-[#2c1810] px-6 py-3 rounded-lg text-center hover:bg-gray-100 transition-colors font-medium"
            >
              Call (512) 810-1310
            </a>
            <Link 
              href="/contact"
              className="bg-[#e67e22] hover:bg-[#d35400] text-white px-6 py-3 rounded-lg text-center transition-colors font-medium"
            >
              Book Your Hunt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 