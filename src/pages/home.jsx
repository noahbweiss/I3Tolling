import { NavLink } from "react-router";
export default function Home() {
  return (
    <div className="text-[#333] bg-[#f9f9f9]">
      {/* Header */}
      <header className="bg-[#004080] text-white py-10 px-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">I3 Tolling</h1>
      </header>

      {/* Services */}
      <section id="services" className="max-w-[1000px] mx-auto px-5 py-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Services
        </h2>

        <p className="text-lg leading-7 pb-6">
          I3 Tolling provides practical consulting and technical support for tolling and related
          activities such as congestion pricing, road usage charging (RUC), and parking. We stay
          current with technology and best practices and rely on human intelligence with over 40
          years in the industry to provide precisely the right depth of requirements for each task.
          I3 Tolling covers virtually every aspect of tolling from pavement to payment including
          support functions like security, architecture, testing, and training.
        </p>

        {/*<div className="bg-white shadow rounded-lg p-8">*/}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            We will ensure that:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Specifications are <span className="font-semibold">Reasonable</span></li>
            <li>Requirements are <span className="font-semibold">Achievable</span></li>
            <li>Testing is <span className="font-semibold">Practical</span></li>
            <li>Performance is <span className="font-semibold">Measurable</span></li>
          </ul>
        {/*</div>*/}
      </section>

      {/* Agencies Served */}
      <section id="agencies" className="max-w-5xl mx-auto px-6 py-5">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
          Agencies Served
        </h2>

        <div className="bg-white shadow rounded-lg p-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-gray-700 text-md list-disc list-inside">
            <li>Bay Area Transportation Authority (BATA)</li>
            <li>Cape May County Bridge Commission (CMCBC)</li>
            <li>Delaware Department of Transportation (DELDOT)</li>
            <li>Golden Gate Bridge (GGBHTD)</li>
            <li>Maine Turnpike Authority (MTA)</li>
            <li>Massachusetts Department of Transportation (MassDOT)</li>
            <li>Miami-Dade DOT (DTPW)</li>
            <li>New Jersey Turnpike Authority (NJTA)</li>
            <li>New York State Bridge Authority (NYSBA)</li>
            <li>New York State Thruway Authority (NYSTA)</li>
            <li>North Carolina Turnpike Authority (NCTA)</li>
            <li>North Texas Turnpike Authority (NTTA)</li>
            <li>Oklahoma Turnpike Authority (OTA)</li>
            <li>Port Authority of New York and New Jersey (PANYNJ)</li>
            <li>Rhode Island Turnpike and Bridge Authority (RITBA)</li>
            <li>South Jersey Transportation Authority (SJTA)</li>
            <li>State Road and Tollway Authority (SRTA)</li>
            <li>Tampa Hillsborough Expressway Authority (THEA)</li>
            <li>Thousand Island Bridge Authority (TIBT)</li>
            <li>Transportation Corridor Agencies (TCA)</li>
            <li>Valley Transportation Authority (VTA)</li>
            <li>Virginia Department of Transportation (VDOT)</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
