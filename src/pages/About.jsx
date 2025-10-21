import { NavLink } from "react-router";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10">
      <h2 className="text-gray-700 text-3xl font-bold mb-4 text-left">About I3Tolling</h2>
      <p className="text-gray-700 text-lg max-w-220 text-left pb-8">
          Tolling IS what we are about. Our familiarity with the technical and
          operational details of organizations such as the IAG, NIOP, and CTOC
          coupled with a deep understanding of tolling technology facilitates rapid
          adaptation to any task related to the tolling industry. We operate as an
          extension of staff, on shortterm contracts, and at reasonable rates. We are
          free to travel and charge only for transportation and lodging. If this sounds
          like a good deal, give us a call.
      </p>

      <section className="max-w-5xl w-full bg-white rounded-lg shadow p-8 
      flex flex-col md:flex-row items-center gap-8 mb-10">
        {/* Image */}
        <img
          src="/images/image001.png" // <-- replace with your actual image path
          alt="CEO and Founder"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow"
        />

        {/* Bio */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Stan Weiss
          </h3>
          <p className="text-gray-600 italic mb-4">CEO & Founder</p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Stan Weiss (P.E., BSEE, MBA)  has worked in the tolling industry for over 35 years. 
            The experience gained and contributions made over this time include hardware/software 
            design, back office and CSC specifications, system assessment, viability studies, 
            strategic planning, operations,  policy, system requirements, general specifications, 
            and project oversight.  As principal and founder of Traffic Technologies Inc. (TTI) 
            in 1996, Mr. Weiss guided the firm in all aspects of its work with State Agencies and 
            the development, implementation and operation of modern toll systems. In 2019 TTI was 
            acquired by Gannett Fleming Inc. to form their new tolling group.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Following the acquisition, Stan worked for Gannett Flemming as vice president of 
            tolling. After serving with Gannett for five years, Stan returned to private practice 
            as owner of  I3 Tolling and now provides consulting services in the automatic tolling, 
            parking, and related transportation space.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4">
            Stan can be contacted {" "}
            <NavLink to="/contact" className="text-blue-600 underline hover:text-blue-800">
              here
            </NavLink>
          </p>
        </div>
      </section>
    </main>
    
  );
}