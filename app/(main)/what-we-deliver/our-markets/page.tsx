export default function OurMarkets() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Our Markets</h1>
      <section className="space-y-6 text-lg leading-relaxed text-gray-800">
        <p>
          Kent serves a diverse range of markets including oil and gas, renewables, power generation, and infrastructure.
        </p>
        <p>
          Our expertise spans upstream, midstream, and downstream sectors, delivering tailored solutions to meet market-specific challenges.
        </p>
        <img
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
          alt="Energy markets"
          className="w-full rounded-lg shadow-lg"
          loading="lazy"
        />
        <p>
          We are committed to supporting the energy transition by enabling sustainable growth across all markets we serve.
        </p>
      </section>
    </main>
  );
}
