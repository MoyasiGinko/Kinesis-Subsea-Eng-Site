export default function ContactUs() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <section className="space-y-6 text-lg leading-relaxed text-gray-800">
        <p>
          We welcome your inquiries and feedback. Please reach out to us through the following channels.
        </p>
        <form className="max-w-lg space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
