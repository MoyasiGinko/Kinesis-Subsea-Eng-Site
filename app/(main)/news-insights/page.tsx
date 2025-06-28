export default function NewsInsights() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">News & Insights</h1>
      <section className="space-y-6 text-lg leading-relaxed text-gray-800">
        <article className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold">Kent Awarded Major Contract</h2>
          <p className="text-sm text-gray-600">March 15, 2024 | Press Release</p>
          <p>
            Kent has been awarded a major contract to deliver integrated energy services for a leading global client.
          </p>
        </article>
        <article className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold">Sustainability Report 2023 Published</h2>
          <p className="text-sm text-gray-600">March 10, 2024 | Sustainability</p>
          <p>
            Our latest sustainability report highlights our progress towards net zero and community engagement initiatives.
          </p>
        </article>
        <article>
          <h2 className="text-2xl font-semibold">Kent Opens New Regional Office</h2>
          <p className="text-sm text-gray-600">March 5, 2024 | Company News</p>
          <p>
            We are excited to announce the opening of a new regional office to better serve our clients in the Asia-Pacific region.
          </p>
        </article>
      </section>
    </main>
  );
}
