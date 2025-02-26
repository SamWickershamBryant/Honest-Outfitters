import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/west_texas_sunset2.jpg"
            alt="West Texas Sunset"
            fill
            className="object-cover"
            style={{ transform: 'translateZ(0)' }}
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <Image
            src="/assets/logo_white.PNG"
            alt="Honest Outfitters Logo"
            width={400}
            height={120}
            className="mx-auto mb-8"
            priority
          />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Your premier destination for guided hunting adventures, specializing in free-range big game and luxury experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-[#e67e22] hover:bg-[#d35400] text-white px-6 py-3 rounded-lg text-center transition-colors font-medium"
            >
              Book Your Adventure
            </Link>
            <a 
              href="#about"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-center hover:bg-white/20 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white block">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2c1810] text-center mb-16">About Us</h2>
          
          {/* About Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">The Honest Experience</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                At our core, we believe in doing things the right way - with integrity, transparency, and a commitment to quality. That&apos;s why we take the time to build real, personal connections with the ranchers who provide our animals. By working directly with trusted partners who share our values, we cut out the middlemen and pass the savings on to you.
              </p>
              <p className="text-lg text-[#2c1810] leading-relaxed">
                No inflated prices. No hidden fees. Just honest, fair pricing for the highest quality animals.
                When you hunt with us, you&apos;re not just buying an experience – you&apos;re becoming part of a family that values authenticity, respect, and fairness. That&apos;s The Honest Experience.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <Image
                src="/assets/free_range_big_game_lf/free_hunt3.JPEG"
                alt="Honest Outfitters Heritage"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
          
          {/* About Section 2 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <Image
                src="/assets/free_range_big_game_lf/free_guide_crop.jpg"
                alt="Expert Guides"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Expert Guides</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                Our team consists of experienced guides who know the terrain, understand animal behavior, and are committed to your success. With decades of combined experience, our guides ensure that every hunt is both productive and memorable.
              </p>
              <p className="text-lg text-[#2c1810] leading-relaxed">
                Whether you&apos;re a seasoned hunter or embarking on your first adventure, our guides provide personalized attention and expert knowledge to enhance your experience.
              </p>
            </div>
          </div>
          
          {/* About Section 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Conservation Commitment</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                At Honest Outfitters, we&apos;re dedicated to sustainable hunting practices that preserve wildlife populations and habitats for future generations. We work closely with wildlife management experts to ensure our hunts contribute positively to conservation efforts.
              </p>
              <p className="text-lg text-[#2c1810] leading-relaxed">
                By choosing Honest Outfitters, you&apos;re supporting responsible wildlife management and habitat preservation across our hunting territories.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <Image
                src="/assets/5_start_trophy_exotics/exotic1.JPEG"
                alt="Conservation Efforts"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hunting Options Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2c1810] text-center mb-16">Hunting Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Free Range Big Game */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/assets/free_range_big_game_lf/free_hunt1.JPEG"
                  alt="Free Range Big Game"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Free Range Big Game</h3>
                <p className="text-[#2c1810] mb-4">
                  Experience the thrill of hunting free-range big game in their natural habitat with our expert guides.
                </p>
                <Link 
                  href="/free-range-big-game"
                  className="text-[#e67e22] font-medium hover:text-[#d35400] inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Corporate Hunts */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/assets/5_star_corporate_hunts/cor_hunt4.JPEG"
                  alt="Corporate Hunts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Corporate Hunts</h3>
                <p className="text-[#2c1810] mb-4">
                  Build team relationships and reward top performers with our exclusive corporate hunting packages.
                </p>
                <Link 
                  href="/corporate-hunts"
                  className="text-[#e67e22] font-medium hover:text-[#d35400] inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Trophy Exotics */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/assets/5_star_corporate_hunts/cor_hunt.JPEG"
                  alt="Trophy Exotics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Trophy Exotics</h3>
                <p className="text-[#2c1810] mb-4">
                  Pursue magnificent exotic game species in our premium hunting grounds with luxury accommodations.
                </p>
                <Link 
                  href="/trophy-exotics"
                  className="text-[#e67e22] font-medium hover:text-[#d35400] inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Budget Friendly Hunts */}
            <div className="bg-[#f5f5dc] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/assets/meat_budget_friendly/budget_hunt13.JPEG"
                  alt="Budget Friendly Hunts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Budget Friendly Hunts</h3>
                <p className="text-[#2c1810] mb-4">
                  Quality hunting experiences that won&apos;t break the bank, perfect for filling your freezer.
                </p>
                <Link 
                  href="/budget-hunts"
                  className="text-[#e67e22] font-medium hover:text-[#d35400] inline-flex items-center"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/contact"
              className="bg-[#2c1810] hover:bg-[#3d241a] text-white px-8 py-4 rounded-lg text-center transition-colors font-medium inline-block"
            >
              Book Your Custom Hunt
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury Accommodations Section */}
      <section className="py-20 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2c1810] text-center mb-16">Luxury Accommodations & Dining</h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/assets/5_star_corporate_hunts/cor_lodging1.JPG"
                  alt="Luxury Lodge"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Premium Lodging</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                After an exhilarating day of hunting, retreat to our luxurious accommodations designed for ultimate comfort and relaxation. Our lodges feature spacious rooms, premium bedding, and all the amenities you need to recharge.
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
                  src="/assets/5_star_corporate_hunts/cor_food4.JPG"
                  alt="Gourmet Dining"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-semibold text-[#2c1810] mb-4">Gourmet Dining Experience</h3>
              <p className="text-lg text-[#2c1810] leading-relaxed mb-6">
                Our skilled chefs prepare exquisite meals using fresh, local ingredients, including game harvested during your hunt. Enjoy hearty breakfasts, packed field lunches, and gourmet dinners paired with fine wines and spirits.
              </p>
              <p className="text-lg text-[#2c1810] leading-relaxed">
                We pride ourselves on creating a dining experience that celebrates the bounty of the land while satisfying the appetites worked up during a day of hunting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#2c1810] text-center mb-16">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#f5f5dc] p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/assets/kodyk.jpg"
                    alt="Kody K."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#2c1810]">Kody K.</h4>
                  <p className="text-[#2c1810]/80">Texas</p>
                </div>
              </div>
              <p className="text-[#2c1810] italic">
                &quot;Brendan was absolutely fantastic. Very patient with my 6 year old son and daughter along with making the hunt for my 17 and 13 year old boys extremely memorable. Put my dad on a great little first ever exotic animal and I polished off the trio with a very cool Scimbok. I highly recommend giving Honest Outfitters a shot. Thanks for a great time and amazing experience! I hope to see you again soon and happy hunting to all!&quot;
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-[#f5f5dc] p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/assets/johnm.JPG"
                    alt="John M."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#2c1810]">John M.</h4>
                  <p className="text-[#2c1810]/80">Texas</p>
                </div>
              </div>
              <p className="text-[#2c1810] italic">
                &quot;I had an excellent hunt with Brendan and Hunner. We harvested a beautiful Axis Buck the other day. Both of them are excellent guides, very hospitable, and great to hang out with. They will take excellent care of you from harvest, through processing, and taxidermy! They are my &quot;go to&quot; guides from here on.&quot;
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-[#f5f5dc] p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/assets/meat_budget_friendly/budget2.JPEG"
                    alt="Sarah L."
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#2c1810]">Sarah L.</h4>
                  <p className="text-[#2c1810]/80">Colorado</p>
                </div>
              </div>
              <p className="text-[#2c1810] italic">
                &quot;As a first-time hunter, I was nervous, but the team at Honest Outfitters made me feel comfortable and confident. Their patience and expertise helped me harvest my first deer, and the chef prepared it beautifully. An unforgettable experience!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2e5d32] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact us today to plan your custom hunting experience with Honest Outfitters.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 