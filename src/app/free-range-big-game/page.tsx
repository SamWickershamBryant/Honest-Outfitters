import Image from 'next/image';
import Link from 'next/link';

export default function FreeRangeBigGame() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/free_range_big_game_lf/free_hunt1.JPEG"
            alt="Free Range Big Game Hunting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Free Range Big Game Hunting</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience the thrill of the hunt in pristine wilderness with our expert guides
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2c1810] mb-8 text-center">The Ultimate Free Range Experience</h2>
            <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
              At Honest Outfitters, we specialize in providing authentic free-range big game hunting experiences across North America. Our hunts take place on vast, carefully selected territories where animals roam freely in their natural habitat, ensuring a challenging and rewarding adventure.
            </p>
            <p className="text-lg text-[#2c1810] leading-relaxed">
              With our expert guides who possess intimate knowledge of the land and animal behavior, you'll have the opportunity to pursue trophy-quality game while enjoying the beauty of unspoiled wilderness. Whether you're seeking your first big game harvest or looking to add a specific trophy to your collection, our free-range hunts offer the authentic challenge that serious hunters crave.
            </p>
          </div>
        </div>
      </section>

      {/* Game Species */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Available Game Species</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* North American Big Game */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/free_range_big_game_lf/free_hunt2.JPEG"
                  alt="North American Big Game"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">North American Big Game</h3>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                  <li>West Texas Elk</li>
                  <li>Sonoran Desert Mule Deer</li>
                  <li>North Carolina Black Bear</li>
                  <li>Alaskan Moose and Caribou</li>
                  <li>Rocky Mountain Bighorn Sheep</li>
                  <li>Desert Bighorn Sheep</li>
                  <li>Mountain Goat</li>
                  <li>Whitetail Deer</li>
                </ul>
                <p className="text-[#2c1810]">
                  Our North American hunts take place in prime territories known for producing quality trophies, from the rugged mountains of Alaska to the desert landscapes of the Southwest.
                </p>
              </div>
            </div>
            
            {/* International Big Game */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/free_range_big_game_lf/free_hunt3.JPEG"
                  alt="International Big Game"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">International Adventures</h3>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                  <li>New Zealand Red Stag and Tahr</li>
                  <li>African Plains Game</li>
                  <li>Spanish Ibex</li>
                  <li>Argentinian Red Stag</li>
                  <li>Canadian Moose</li>
                  <li>European Roe Deer</li>
                </ul>
                <p className="text-[#2c1810]">
                  Through our network of trusted international partners, we coordinate exceptional hunting experiences worldwide, ensuring the same level of quality and ethical standards that define our North American hunts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hunt Packages */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Our Hunt Packages</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Standard Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Standard Package</h3>
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
                    <span className="text-[#2c1810]">Comfortable camp accommodations</span>
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
                    <span className="text-[#2c1810]">Field dressing and trophy preparation</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $4,500</p>
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
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Premium Package</h3>
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
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $7,500</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#e67e22] hover:bg-[#d35400] text-white py-3 rounded-lg text-center transition-colors font-medium"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            {/* Elite Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Elite Package</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">10-day guided hunt</span>
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
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $12,000</p>
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
              * Prices vary based on species, location, and season. Contact us for a personalized quote.
            </p>
            <p className="text-[#2c1810] mb-8">
              All packages can be customized to meet your specific needs and preferences. We also offer group discounts for parties of 4 or more hunters.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Our Hunting Territories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Texas */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/assets/free_range_big_game_lf/free_hunt1.JPEG"
                  alt="Texas Hunting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-2">Texas</h3>
                <p className="text-[#2c1810] mb-4">
                  Prime hunting grounds for free-range elk, whitetail deer, and exotic species across West Texas and the Hill Country.
                </p>
                <p className="text-[#2c1810] font-medium">
                  Best Season: October - January
                </p>
              </div>
            </div>
            
            {/* Arizona */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/assets/free_range_big_game_lf/free_hunt2.JPEG"
                  alt="Arizona Hunting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-2">Arizona</h3>
                <p className="text-[#2c1810] mb-4">
                  Sonoran Desert territories offering exceptional mule deer, Coues deer, and javelina hunting experiences.
                </p>
                <p className="text-[#2c1810] font-medium">
                  Best Season: November - December
                </p>
              </div>
            </div>
            
            {/* Alaska */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/assets/free_range_big_game_lf/free_hunt3.JPEG"
                  alt="Alaska Hunting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-2">Alaska</h3>
                <p className="text-[#2c1810] mb-4">
                  Vast wilderness offering world-class moose, caribou, brown bear, and mountain goat hunting.
                </p>
                <p className="text-[#2c1810] font-medium">
                  Best Season: September - October
                </p>
              </div>
            </div>
            
            {/* Colorado */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/assets/free_range_big_game_lf/free_hunt1.JPEG"
                  alt="Colorado Hunting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-2">Colorado</h3>
                <p className="text-[#2c1810] mb-4">
                  Rocky Mountain terrain perfect for elk, mule deer, and bighorn sheep hunts at various elevations.
                </p>
                <p className="text-[#2c1810] font-medium">
                  Best Season: September - November
                </p>
              </div>
            </div>
            
            {/* North Carolina */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/assets/free_range_big_game_lf/free_hunt2.JPEG"
                  alt="North Carolina Hunting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-2">North Carolina</h3>
                <p className="text-[#2c1810] mb-4">
                  Appalachian Mountain regions offering excellent black bear and whitetail deer hunting.
                </p>
                <p className="text-[#2c1810] font-medium">
                  Best Season: October - December
                </p>
              </div>
            </div>
            
            {/* New Zealand */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/assets/free_range_big_game_lf/free_hunt3.JPEG"
                  alt="New Zealand Hunting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-2">New Zealand</h3>
                <p className="text-[#2c1810] mb-4">
                  Breathtaking alpine terrain for red stag, tahr, and chamois hunting adventures.
                </p>
                <p className="text-[#2c1810] font-medium">
                  Best Season: March - August
                </p>
              </div>
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
                  "The free-range elk hunt with Honest Outfitters was everything I hoped for and more. My guide knew exactly where to find the bulls, and his expertise helped me harvest a magnificent 6x6. The accommodations and food were top-notch too!"
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#2c1810] font-semibold">- Robert T.</p>
                <p className="text-[#2c1810] text-sm">West Texas Elk Hunt</p>
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
                  "As a first-time big game hunter, I was nervous about my Alaskan moose hunt. The team at Honest Outfitters made me feel comfortable and confident. Their patience and expertise helped me harvest a beautiful bull moose. An experience I'll never forget!"
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#2c1810] font-semibold">- Jennifer K.</p>
                <p className="text-[#2c1810] text-sm">Alaska Moose Hunt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2e5d32] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Free Range Adventure?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact us today to plan your custom free-range hunting experience with Honest Outfitters.
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