import { textos } from '../textos';

const SobreMi = () => {
  return (
    <section id="sobre-mi" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Psicólogo Clínico Especializado en Terapia Online</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1 rounded-full shadow-xl">
                <div className="bg-white p-1 rounded-full">
                  {/* Placeholder para la imagen del psicólogo */}
                  <div className="bg-gray-300 w-full aspect-square rounded-full flex items-center justify-center">
                    <span className="text-4xl text-gray-600">Dr.P</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Soy un psicólogo clínico con más de 10 años de experiencia, especializado en <strong>Terapia Cognitivo-Conductual</strong> y en el tratamiento de <strong>trastornos de ansiedad y estrés</strong>. Mi enfoque combina técnicas terapéuticas tradicionales con innovaciones como la <strong>realidad virtual</strong>, siempre adaptando el tratamiento a las necesidades específicas de cada paciente. Como docente universitario, me mantengo constantemente actualizado en las últimas investigaciones y avances en psicología clínica, lo que me permite ofrecer intervenciones basadas en la evidencia científica más reciente.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-3 text-blue-700">Formación Académica y Certificaciones</h3>
                <ul className="space-y-2">
                  {textos.sobreMi.formacion.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
