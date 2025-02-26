import Image from 'next/image';

export default function BudgetHunts() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#2c1810] text-center mb-8">
          Budget Friendly Hunts
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] mb-8">
            <Image
              src="/assets/meat_budget_friendly/budget_hunt13.jpeg"
              alt="Budget Friendly Hunting"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-[#2c1810] mb-6">
              Quality hunting experiences shouldn&apos;t break the bank. Our budget-friendly hunts 
              provide excellent opportunities for both novice and experienced hunters to enjoy 
              the thrill of the hunt while keeping costs manageable.
            </p>
            
            <h2 className="text-2xl font-semibold text-[#2c1810] mb-4">What We Offer:</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Meat Hunts</h3>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2">
                  <li>Whitetail Deer</li>
                  <li>Wild Hog</li>
                  <li>Turkey</li>
                  <li>Small Game</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2c1810] mb-3">Package Features</h3>
                <ul className="list-disc pl-6 text-[#2c1810] space-y-2">
                  <li>Basic field dressing</li>
                  <li>Experienced guides</li>
                  <li>Essential equipment</li>
                  <li>Comfortable camping</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Image
                src="/assets/meat_budget_friendly/budget_hunt2.jpeg"
                alt="Camping Area"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="/assets/meat_budget_friendly/budget_hunt10.jpeg"
                alt="Hunting Field"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="bg-[#f5f5dc] p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#2c1810] mb-4">
                Affordable Adventure Awaits
              </h3>
              <p className="text-[#2c1810] mb-6">
                Our budget-friendly packages are perfect for:
              </p>
              <ul className="list-disc pl-6 text-[#2c1810] space-y-2 mb-6">
                <li>First-time hunters</li>
                <li>Families</li>
                <li>Meat hunters</li>
                <li>Group expeditions</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+15128101310"
                  className="bg-[#2c1810] text-white px-6 py-3 rounded-lg text-center hover:bg-[#2c1810]/90 transition-colors"
                >
                  Call for Rates
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