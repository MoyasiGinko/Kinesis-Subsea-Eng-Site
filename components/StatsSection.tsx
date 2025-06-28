export default function StatsSection() {
  const stats = [
    {
      number: "50+",
      label: "Years of Experience"
    },
    {
      number: "12,000+",
      label: "Employees Worldwide"
    },
    {
      number: "45+",
      label: "Countries"
    },
    {
      number: "400+",
      label: "Active Projects"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
