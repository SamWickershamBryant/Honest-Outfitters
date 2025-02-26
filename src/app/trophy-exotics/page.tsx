import Image from 'next/image';

export default function TrophyExotics() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#2c1810] text-center mb-8">
          Super/Trophy Exotics
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] mb-8">
            <Image
              src="/assets/5_start_trophy_exotics/trophy_animals1.jpg"
              alt="Trophy Exotic Hunting"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-[#2c1810] mb-6">
              Experience the thrill of hunting exotic game in Texas. Our 5-star trophy exotic hunts 
              offer unique opportunities to pursue some of the world&apos;s most magnificent species in 
              carefully managed environments that gurantee the harvest of a trophy animal.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#2c1810] mb-4">Available Species:</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
              <ul className="list-disc pl-6 text-[#2c1810] space-y-2">
                <li>Axis Deer</li>
                <li>Blackbuck Antelope</li>
                <li>Aoudad Sheep</li>
                <li>Fallow Deer</li>
              </ul>
              <ul className="list-disc pl-6 text-[#2c1810] space-y-2">
                <li>Red Stag</li>
                <li>Scimitar/Arabian Oryx</li>
                <li>Nilgai Antelope</li>
                <li>And more...</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Image
                src="/assets/5_start_trophy_exotics/trophy_animals2.jpg"
                alt="Exotic Species"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/assets/5_start_trophy_exotics/trophy_animals3.jpg"
                alt="Exotic Trophy"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="bg-[#f5f5dc] p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#2c1810] mb-4">
                Premium Trophy Hunting Experience
              </h3>
              <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                <li>Expert guides with extensive exotic game knowledge</li>
                <li>High-quality hunting equipment available</li>
                <li>Luxury accommodations</li>
                <li>Trophy preparation and shipping assistance</li>
                <li>Photography service included</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+15128101310"
                  className="bg-[#2c1810] text-white px-6 py-3 rounded-lg text-center hover:bg-[#2c1810]/90 transition-colors"
                >
                  Call to Book
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