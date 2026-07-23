type PriceEntry = {
  name: string;
  price?: string;
  note?: string;
};

type PriceSection = {
  title: string;
  entries: PriceEntry[];
};

type PriceListProps = {
  sections: PriceSection[];
};

export default function PriceList({ sections }: PriceListProps) {
  return (
    <div className={sections.length === 1 ? 'grid gap-8' : 'grid gap-8 md:grid-cols-2'}>
      {sections.map((section) => (
        <div
          key={section.title}
          className="overflow-hidden rounded-lg bg-white shadow-lg"
        >
          <h3 className="bg-[#2c1810] px-6 py-4 text-2xl font-semibold text-white">
            {section.title}
          </h3>
          <div className="divide-y divide-[#2c1810]/10">
            {section.entries.map((entry) => (
              <div
                key={`${section.title}-${entry.name}`}
                className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <div>
                  <p className="font-medium text-[#2c1810]">{entry.name}</p>
                  {entry.note && (
                    <p className="mt-1 text-sm leading-relaxed text-[#2c1810]/75">
                      {entry.note}
                    </p>
                  )}
                </div>
                {entry.price && (
                  <p className="shrink-0 font-semibold text-[#e67e22]">
                    {entry.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
