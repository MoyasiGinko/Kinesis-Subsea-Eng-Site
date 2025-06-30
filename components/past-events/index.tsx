export default function PastEvents() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Past Events</h1>
      <section className="space-y-6 text-lg leading-relaxed text-gray-800">
        <article className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold">Energy Summit 2023</h2>
          <p className="text-sm text-gray-600">November 12, 2023</p>
          <p>
            Highlights and outcomes from the Energy Summit held in 2023,
            focusing on sustainable energy solutions.
          </p>
        </article>
        <article className="border-b border-gray-300 pb-4">
          <h2 className="text-2xl font-semibold">Innovation Expo 2023</h2>
          <p className="text-sm text-gray-600">September 8, 2023</p>
          <p>
            A recap of the Innovation Expo showcasing the latest technologies
            and projects by Kinesis Subsea Engineering.
          </p>
        </article>
        <article>
          <h2 className="text-2xl font-semibold">Community Engagement Day</h2>
          <p className="text-sm text-gray-600">July 20, 2023</p>
          <p>
            Kinesis Subsea Engineering's community engagement initiatives and
            events held throughout 2023.
          </p>
        </article>
      </section>
    </main>
  );
}
