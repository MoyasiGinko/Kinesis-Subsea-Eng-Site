export default function OurServices() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <section className="space-y-6 text-lg leading-relaxed text-gray-800">
        <p>
          Kent offers a comprehensive range of integrated energy services designed to meet the evolving needs of the energy sector. Our services span consulting, engineering, project management, and operational excellence.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Strategic advisory and technical consulting</li>
          <li>Engineering and project delivery</li>
          <li>Asset optimization and operational excellence</li>
          <li>Innovative solutions for sustainable energy</li>
        </ul>
        <img
          src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg"
          alt="Energy services"
          className="w-full rounded-lg shadow-lg"
          loading="lazy"
        />
        <p>
          Our team works closely with clients to deliver tailored solutions that drive efficiency, safety, and sustainability across all phases of energy projects.
        </p>
      </section>
    </main>
  );
}
