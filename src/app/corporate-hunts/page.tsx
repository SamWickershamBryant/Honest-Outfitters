import Image from 'next/image';

export default function CorporateHunts() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#2c1810] text-center mb-8">
          5 Star Corporate Hunts
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] mb-8">
            <Image
              src="/assets/5_star_corporate_hunts/cor_hunt.jpeg"
              alt="Corporate Hunting Experience"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-[#2c1810] mb-6">
              Elevate your corporate team building with our exclusive 5-star hunting experiences. 
              Our corporate packages combine luxury accommodations with world-class hunting opportunities, 
              creating the perfect environment for building lasting business relationships.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#2c1810] mb-4">Package Includes:</h2>
            <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-8">
              <li>Luxury lodge accommodations</li>
              <li>Professional guides and equipment</li>
              <li>Gourmet meals and refreshments</li>
              <li>Trophy processing and packaging</li>
              <li>Transportation during the hunt</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Image
                src="/assets/5_star_corporate_hunts/cor_lodging1.jpg"
                alt="Luxury Lodge"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/assets/5_star_corporate_hunts/cor_food1.jpg"
                alt="Gourmet Dining"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="bg-[#f5f5dc] p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#2c1810] mb-4">
                Contact Us for Corporate Packages
              </h3>
              <p className="text-[#2c1810] mb-6">
                Let us create a customized corporate hunting experience that meets your team&apos;s objectives.
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
        </div>
      </div>
    </div>
  );
} 