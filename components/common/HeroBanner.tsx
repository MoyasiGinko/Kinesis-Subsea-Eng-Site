export default function HeroBanner() {
  return (
    <section className="relative h-[80vh] bg-black text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2581940/pexels-photo-2581940.jpeg?auto=compress&cs=tinysrgb&w=1920')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Global Leader in Integrated Energy Services
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Delivering sustainable solutions for a net zero future
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
          Learn More
        </button>
      </div>
    </section>
  );
}
