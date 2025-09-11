export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Contact */}
      <section id="contact" className="max-w-[1000px] mx-auto px-5 py-10 text-gray-700 text-center">
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
    </main>
  );
}