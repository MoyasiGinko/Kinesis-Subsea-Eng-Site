export default function MeetOurTeam() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>
      <section className="space-y-6 text-lg leading-relaxed text-gray-800">
        <p>
          Our team is composed of industry experts, engineers, and professionals dedicated to delivering innovative energy solutions. We foster a culture of collaboration, diversity, and continuous learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt="Jane Doe"
              className="w-32 h-32 rounded-full mx-auto mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-gray-600">Chief Executive Officer</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt="John Smith"
              className="w-32 h-32 rounded-full mx-auto mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-600">Chief Technology Officer</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Emily Johnson"
              className="w-32 h-32 rounded-full mx-auto mb-4"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">Emily Johnson</h3>
            <p className="text-gray-600">Head of Sustainability</p>
          </div>
        </div>
      </section>
    </main>
  );
}
