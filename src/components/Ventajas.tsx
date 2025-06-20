import { textos } from '../textos';

const Ventajas = () => {
  return (
    <section id="ventajas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Beneficios de la Terapia Psicológica Online</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          La terapia online ofrece numerosas ventajas frente a la terapia tradicional, manteniendo la misma calidad y eficacia terapéutica.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {textos.ventajas.lista.map((ventaja, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{ventaja.titulo}</h3>
              <p className="text-gray-600">{ventaja.descripcion}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Estudios científicos demuestran que la <strong>terapia psicológica online</strong> tiene una eficacia comparable a la terapia presencial para la mayoría de los trastornos, incluyendo <strong>ansiedad</strong>, <strong>depresión</strong> y <strong>problemas de sueño</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ventajas;
