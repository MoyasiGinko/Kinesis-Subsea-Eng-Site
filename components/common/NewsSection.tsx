export default function NewsSection() {
  const newsItems = [
    {
      title:
        "Kinesis Subsea Engineering Awarded Major Contract for Carbon Capture Project",
      date: "March 15, 2024",
      category: "Press Release",
      image:
        "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Sustainability Report 2023: Progress Towards Net Zero",
      date: "March 10, 2024",
      category: "Sustainability",
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title:
        "Kinesis Subsea Engineering Opens New Innovation Center in Singapore",
      date: "March 5, 2024",
      category: "Company News",
      image:
        "https://images.pexels.com/photos/1537008/pexels-photo-1537008.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest News & Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments, industry insights, and
            company news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="text-sm font-medium text-blue-600">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
