"use client";

import { useSearchParams } from "next/navigation";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Search Results</h1>
      <p className="text-lg mb-6">
        Showing results for: <span className="font-semibold">{query}</span>
      </p>
      <section className="space-y-6">
        {/* Sample search results */}
        <article className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold hover:text-gray-600">
            <a href="/sustainability/planet">Sustainability - Planet</a>
          </h2>
          <p className="text-gray-600 mt-2">
            Learn about our commitment to environmental sustainability and how we're working towards a net-zero future.
          </p>
        </article>
        <article className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold hover:text-gray-600">
            <a href="/what-we-deliver/our-services">Sustainable Energy Services</a>
          </h2>
          <p className="text-gray-600 mt-2">
            Discover our range of sustainable energy solutions and services.
          </p>
        </article>
        <article className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold hover:text-gray-600">
            <a href="/news-insights">Latest Sustainability News</a>
          </h2>
          <p className="text-gray-600 mt-2">
            Stay updated with our latest sustainability initiatives and achievements.
          </p>
        </article>
      </section>
    </main>
  );
}
