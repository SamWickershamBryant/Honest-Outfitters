import Image from 'next/image';
import Link from 'next/link';

export default function CorporateHunts() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/5_star_corporate_hunts/corporate1.JPEG"
            alt="Corporate Hunting Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Hunting Experiences</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Strengthen team bonds and reward excellence with our exclusive corporate hunting packages
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2c1810] mb-8 text-center">The Ultimate Corporate Retreat</h2>
            <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
              At Honest Outfitters, we understand that the strongest business relationships are often built outside the boardroom. Our corporate hunting packages provide the perfect blend of luxury, adventure, and camaraderie, creating an environment where meaningful connections flourish.
            </p>
            <p className="text-lg text-[#2c1810] leading-relaxed">
              Whether you&apos;re looking to reward top performers, strengthen team bonds, or entertain important clients, our customized corporate hunts deliver an unforgettable experience that achieves your business objectives while providing the thrill of the hunt.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Why Choose a Corporate Hunt</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/5_star_corporate_hunts/corporate2.JPEG"
                  alt="Team Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Team Building Benefits</h3>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                  <li>Strengthen relationships in a relaxed environment</li>
                  <li>Build trust through shared experiences</li>
                  <li>Improve communication and collaboration</li>
                  <li>Create lasting memories that translate to workplace camaraderie</li>
                  <li>Develop problem-solving skills in a natural setting</li>
                </ul>
                <p className="text-[#2c1810]">
                  Our guided hunts create natural opportunities for team members to connect, collaborate, and build relationships that enhance workplace dynamics.
                </p>
              </div>
            </div>
            
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src="/assets/5_star_corporate_hunts/corporate3.JPEG"
                  alt="Luxury Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Business Advantages</h3>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                  <li>Impress clients in a unique, memorable setting</li>
                  <li>Reward top performers with a prestigious experience</li>
                  <li>Create an environment for strategic discussions</li>
                  <li>Demonstrate company values through ethical hunting</li>
                  <li>Provide exclusive networking opportunities</li>
                </ul>
                <p className="text-[#2c1810]">
                  Our corporate hunts provide the perfect backdrop for meaningful business conversations and relationship building that can lead to new opportunities and partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Accommodations */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">5-Star Accommodations & Amenities</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/assets/5_star_corporate_hunts/corporate4.JPEG"
                  alt="Luxury Lodge"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Luxury Lodging</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                Our corporate groups enjoy exclusive access to premium lodges featuring spacious common areas, private rooms with en-suite bathrooms, and all the amenities needed for comfort and productivity.
              </p>
              <ul className="list-disc pl-6 text-[#2c1810] space-y-2">
                <li>Private meeting spaces for business discussions</li>
                <li>High-speed Wi-Fi throughout the property</li>
                <li>Comfortable lounge areas with fireplaces</li>
                <li>Outdoor patios and fire pits</li>
                <li>Premium bedding and linens</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/assets/5_star_corporate_hunts/corporate5.JPEG"
                  alt="Gourmet Dining"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Executive Dining Experience</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                Our private chefs create exceptional dining experiences featuring gourmet meals prepared with locally-sourced ingredients, including game harvested during your hunt.
              </p>
              <ul className="list-disc pl-6 text-[#2c1810] space-y-2">
                <li>Customized menus based on your preferences</li>
                <li>Premium wine and spirit selections</li>
                <li>Special dietary accommodations</li>
                <li>Elegant dining settings</li>
                <li>Field lunches during hunting excursions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Corporate Hunt Packages</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Executive Package */}
            <div className="bg-[#f5f5dc] rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Executive Package</h3>
                <p className="text-[#2c1810] mb-6">Perfect for smaller executive teams of 4-6 people</p>
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
                    <span className="text-[#2c1810]">Luxury lodge accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Gourmet meals and premium beverages</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Private meeting space</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Trophy preparation</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $3,500 per person</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#2c1810] hover:bg-[#3d241a] text-white py-3 rounded-lg text-center transition-colors font-medium"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            
            {/* Leadership Package */}
            <div className="bg-[#f5f5dc] rounded-lg shadow-lg overflow-hidden transform scale-105 z-10 border-2 border-[#e67e22]">
              <div className="bg-[#e67e22] py-2 text-center">
                <span className="text-white font-semibold">MOST POPULAR</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Leadership Package</h3>
                <p className="text-[#2c1810] mb-6">Ideal for teams of 8-12 people</p>
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
                    <span className="text-[#2c1810]">Exclusive lodge rental</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Private chef and customized menus</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Team building activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Trophy preparation and shipping</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Professional photography</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Starting at $3,200 per person</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#e67e22] hover:bg-[#d35400] text-white py-3 rounded-lg text-center transition-colors font-medium"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            
            {/* Enterprise Package */}
            <div className="bg-[#f5f5dc] rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c1810] mb-4">Enterprise Package</h3>
                <p className="text-[#2c1810] mb-6">Custom solution for large groups of 15+ people</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">7-day customized program</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Multiple luxury accommodations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Executive chef team</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Structured team building program</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Full-service concierge</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#2c1810]">Professional video production</span>
                  </li>
                </ul>
                <p className="text-[#2c1810] font-semibold mb-6">Custom pricing</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-[#2c1810] hover:bg-[#3d241a] text-white py-3 rounded-lg text-center transition-colors font-medium"
                >
                  Request Proposal
                </Link>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#2c1810] italic mb-8">
              * All packages can be customized to meet your specific business objectives and team needs.
            </p>
            <p className="text-[#2c1810] mb-8">
              We also offer non-hunting activities for team members who prefer alternative experiences, ensuring everyone in your group is engaged and enjoying their time.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2c1810] mb-12 text-center">Client Testimonials</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <svg className="h-10 w-10 text-[#e67e22]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-[#2c1810] italic">
                  &quot;Our sales team&apos;s retreat with Honest Outfitters was the perfect blend of luxury, adventure, and team building. The connections made during our hunt have translated to improved collaboration back at the office. Worth every penny!&quot;
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#2c1810] font-semibold">- James W.</p>
                <p className="text-[#2c1810] text-sm">VP of Sales, Tech Solutions Inc.</p>
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
                  &quot;We brought our top clients for a corporate hunt, and Honest Outfitters exceeded all expectations. The private lodge, gourmet meals, and exceptional hunting created the perfect environment for strengthening our business relationships.&quot;
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#2c1810] font-semibold">- Michael R.</p>
                <p className="text-[#2c1810] text-sm">CEO, Global Investments Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2e5d32] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Corporate Retreat?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact us today to discuss how we can create a customized corporate hunting experience that meets your business objectives.
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
              Request Proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 