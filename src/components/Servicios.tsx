import { textos } from '../textos';

const Servicios = () => {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Servicios de Psicología Online</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ofrezco un acompañamiento psicológico integral, adaptado a tus necesidades específicas. Mi objetivo es proporcionarte herramientas efectivas para gestionar tus emociones y mejorar tu calidad de vida, todo ello en un entorno confidencial y profesional.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {textos.servicios.lista.map((servicio, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {/* Iconos según el tipo de servicio */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{servicio.titulo}</h3>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              La <strong>terapia online</strong> ofrece la misma calidad y eficacia que la terapia presencial, con la ventaja de eliminar barreras geográficas y temporales. Todas las sesiones se realizan a través de una plataforma segura que garantiza la confidencialidad.
            </p>
            <a href="#contacto" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300">
              Consulta sobre tus necesidades específicas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
