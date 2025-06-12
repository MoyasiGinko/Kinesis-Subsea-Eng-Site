export default function Events() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Events</h1>
      <section className="space-y-6 text-lg leading-relaxed text-gray-800">
        <article className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold">Upcoming Energy Conference 2024</h2>
          <p className="text-sm text-gray-600">April 20, 2024</p>
          <p>
            Join Kent at the upcoming Energy Conference to explore the latest trends and innovations in the energy sector.
          </p>
        </article>
        <article className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold">Sustainability Workshop</h2>
          <p className="text-sm text-gray-600">May 15, 2024</p>
          <p>
            Participate in our workshop focused on sustainable energy solutions and environmental responsibility.
          </p>
        </article>
        <article>
          <h2 className="text-2xl font-semibold">Annual Stakeholder Meeting</h2>
          <p className="text-sm text-gray-600">June 10, 2024</p>
          <p>
            Kent's annual meeting to discuss company performance, strategy, and future initiatives.
          </p>
        </article>
      </section>
    </main>
  );
}
