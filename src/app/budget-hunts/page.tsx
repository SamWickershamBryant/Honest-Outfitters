import Image from 'next/image';
import Link from 'next/link';

export default function BudgetHunts() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/meat_budget_friendly/budget1.JPEG"
            alt="Budget Friendly Hunting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Budget Friendly Hunts</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Quality hunting experiences that won&apos;t break the bank
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2c1810] mb-8 text-center">Affordable Hunting Adventures</h2>
            <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
              At Honest Outfitters, we believe that exceptional hunting experiences should be accessible to everyone. Our budget-friendly hunts provide the perfect opportunity to enjoy the thrill of the hunt without the premium price tag, while still maintaining our high standards for quality and service.
            </p>
            <p className="text-lg text-[#2c1810] leading-relaxed">
              Whether you&apos;re looking for meat for your freezer, introducing a new hunter to the sport, or simply want to enjoy more time in the field without breaking the bank, our budget-friendly options deliver memorable experiences at affordable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Hunt Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Budget Hunt Options</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Meat Hunts */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/meat_budget_friendly/budget2.JPEG"
                  alt="Meat Hunts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Meat Hunts</h3>
                <p className="text-[#2c1810] mb-6">
                  Our meat hunts focus on filling your freezer with high-quality, organic game meat at an affordable price. Perfect for those who value the nutritional benefits and taste of wild game.
                </p>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                  <li>Whitetail Doe Hunts</li>
                  <li>Hog Hunts</li>
                  <li>Axis Doe Hunts</li>
                  <li>Management Buck Hunts</li>
                  <li>Processing services available</li>
                </ul>
                <p className="text-[#2c1810]">
                  These hunts are ideal for families looking to stock up on healthy, organic meat or for introducing new hunters to the sport.
                </p>
              </div>
            </div>
            
            {/* Management Hunts */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/meat_budget_friendly/budget3.JPEG"
                  alt="Management Hunts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Management Hunts</h3>
                <p className="text-[#2c1810] mb-6">
                  Our management hunts offer the opportunity to harvest mature animals that don&apos;t meet our trophy criteria but still provide an exciting hunting experience and quality meat.
                </p>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                  <li>Management Whitetail Bucks</li>
                  <li>Management Exotic Males</li>
                  <li>Cull Hunts</li>
                  <li>Guided experience</li>
                  <li>Trophy preparation included</li>
                </ul>
                <p className="text-[#2c1810]">
                  These hunts play an important role in our wildlife management program while offering hunters a more affordable option to harvest mature animals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hunt Packages */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Budget Hunt Packages</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Basic Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Basic Package</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">1-day guided hunt</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Field dressing assistance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Experienced guide</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Harvest 1 animal</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $350</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#2c1810] hover:bg-[#3d241a] text-white py-3 rounded-lg text-center transition-colors font-medium"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            {/* Weekend Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform scale-105 z-10 border-2 border-[#e67e22]">
              <div className="bg-[#e67e22] py-2 text-center">
                <span className="text-white font-semibold">MOST POPULAR</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Weekend Package</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">2-day guided hunt</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Basic cabin accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Meals included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Harvest up to 2 animals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Field dressing and basic processing</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $750</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#e67e22] hover:bg-[#d35400] text-white py-3 rounded-lg text-center transition-colors font-medium"
                >
                  Book Now
                </Link>
              </div>
            </div>
            
            {/* Family Package */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Family Package</h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">3-day guided hunt for up to 4 people</span>
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
                    <span className="text-[#2c1810]">Harvest up to 4 animals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Complete processing services</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Youth hunter discounts</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $1,800</p>
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
              * Additional animals can be added to any package for an extra fee. Processing services available at additional cost for Basic Package.
            </p>
            <p className="text-[#2c1810] mb-8">
              All packages can be customized to meet your specific needs. We offer special discounts for youth hunters, veterans, and first-time hunters.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Why Choose Our Budget Hunts</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/assets/meat_budget_friendly/budget4.JPEG"
                  alt="Quality Experience"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Quality Without the Premium Price</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                Our budget hunts may be more affordable, but we never compromise on the quality of the experience. You&apos;ll still receive expert guidance, access to well-managed hunting grounds, and the same level of service that defines all Honest Outfitters experiences.
              </p>
              <ul className="list-disc pl-6 text-[#2c1810] space-y-2">
                <li>Experienced, knowledgeable guides</li>
                <li>Well-maintained hunting areas</li>
                <li>High success rates</li>
                <li>Ethical hunting practices</li>
                <li>Quality equipment and facilities</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/assets/meat_budget_friendly/budget5.JPEG"
                  alt="Family Friendly"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Perfect for Families & New Hunters</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                Our budget-friendly hunts are ideal for introducing new hunters to the sport or for families looking to share the hunting tradition together without a significant financial investment.
              </p>
              <ul className="list-disc pl-6 text-[#2c1810] space-y-2">
                <li>Patient guides experienced with new hunters</li>
                <li>Family-friendly accommodations</li>
                <li>Educational opportunities about wildlife and conservation</li>
                <li>Focus on safety and ethical hunting practices</li>
                <li>Memories that will last a lifetime</li>
              </ul>
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
                  &quot;I brought my son on his first hunt with Honest Outfitters&apos; Family Package. The guides were patient and educational, making it a perfect learning experience. We filled our freezer with quality meat and made memories that will last a lifetime.&quot;
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#2c1810] font-semibold">- Robert J.</p>
                <p className="text-[#2c1810] text-sm">Family Hunt</p>
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
                  &quot;The Weekend Package was perfect for what I needed. I harvested two does and a management buck, and the processing service made it so convenient. Quality experience without breaking the bank - I&apos;ll definitely be back next season!&quot;
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#2c1810] font-semibold">- Sarah K.</p>
                <p className="text-[#2c1810] text-sm">Weekend Meat Hunt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2e5d32] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Budget-Friendly Hunt?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact us today to plan your affordable hunting adventure with Honest Outfitters.
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