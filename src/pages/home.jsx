export default function Home() {
  return (
    <div className="text-[#333] bg-[#f9f9f9]">
      {/* Header */}
      <header className="bg-[#004080] text-white py-10 px-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">I3 Tolling</h1>
        <ul className="flex justify-center gap-4 mt-4 space-y-1 text-base md:text-lg leading-relaxed">
          <li>Reasonable Specifications</li>
          <li>|</li>
          <li>Achievable Requirements</li>
          <li>|</li>
          <li>Measurable Criteria</li>
          <li>|</li>
          <li>Practical Testing</li>
        </ul>
      </header>

      {/* About */}
      <section id="about" className="max-w-[1000px] mx-auto px-5 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
        <p className="text-md leading-7">
          I3 Tolling provides practical consulting and technical support for tolling and
          related activities such as congestion pricing, road usage charging (RUC), and parking.
          We stay current with technology and best practices and rely on human intelligence with
          over 40 years in the industry to provide precisely the right depth of requirements for
          each task. I3 Tolling covers virtually every aspect of tolling from pavement to payment
          including support functions like security, architecture, testing, and training.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="max-w-[1000px] mx-auto px-5 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-5 rounded-lg shadow-lg shadow-grey-900">
            <h3 className="text-xl font-semibold mb-2">Business Strategy</h3>
            <p>
              We help businesses define goals, identify growth opportunities, and create actionable
              roadmaps for long-term success.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg shadow-grey-900">
            <h3 className="text-xl font-semibold mb-2">Process Improvement</h3>
            <p>
              Streamline your operations and increase efficiency with our process optimization services.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-lg shadow-grey-900">
            <h3 className="text-xl font-semibold mb-2">Change Management</h3>
            <p>
              We guide organizations through change with thoughtful planning, clear communication,
              and leadership coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-[1000px] mx-auto px-5 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          Interested in learning more about our services? Reach out to us!
        </p>
        <p>Email: <a href="mailto:stan@i3tolling.com" className="underline text-blue-700 hover:text-indigo-700">stan@i3tolling.com</a></p>
        <p>Phone: (914) 489-1244</p>
        <p>Location: <a href="https://www.google.com/maps/place/7200+Azure+Cir,+Orlando,+FL+32836/@28.4036729,-81.5032913,17z/data=!3m1!4b1!4m6!3m5!1s0x88dd80091343ed29:0xb4976fedbaca0dfb!8m2!3d28.4036682!4d-81.5007164!16s%2Fg%2F11v6wp8wtv?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D"
           className="underline text-blue-700 hover:text-indigo-700" target="_blank" rel="noopener noreferrer">
        7200 Azure Circle, Orlando, Florida</a></p>
      </section>
    </div>
  );
}
