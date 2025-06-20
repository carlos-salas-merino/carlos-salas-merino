const AyudaTerapiaOnline = () => {
  return (
    <section id="ayuda-terapia" className="help-section py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-azul-oscuro">¿Cómo puede ayudarte la terapia online?</h2>
          <p className="text-center text-azul-oscuro/80 mb-12 max-w-2xl mx-auto">
            La terapia psicológica online ofrece apoyo profesional accesible desde cualquier lugar, adaptándose a tu ritmo de vida y necesidades específicas.
          </p>
          
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="/images/bienestar_emocional.jpg" 
                alt="Concepto de bienestar emocional y equilibrio mental representado con elementos naturales en tonos azul turquesa" 
                className="rounded-lg shadow-md max-w-full h-auto"
                width="600"
                height="400"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4 text-azul-oscuro">Recupera tu bienestar emocional</h3>
              <p className="text-azul-oscuro/80 mb-4">
                La terapia online te proporciona herramientas efectivas para gestionar el estrés, la ansiedad y mejorar tu calidad de vida, todo desde un entorno cómodo y familiar para ti.
              </p>
              <p className="text-azul-oscuro/80">
                Como psicólogo especializado en Terapia Cognitivo-Conductual, te acompaño en un proceso personalizado para desarrollar estrategias que te permitan afrontar los desafíos emocionales y recuperar el equilibrio.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="help-card">
              <div className="help-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-azul-oscuro">Supera la ansiedad y el estrés</h3>
              <p className="text-azul-oscuro/80">
                Aprende técnicas efectivas para gestionar la ansiedad, reducir el estrés y recuperar el control de tus emociones con el apoyo de un psicólogo especializado en terapia cognitivo-conductual.
              </p>
            </div>
            
            <div className="help-card">
              <div className="help-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-azul-oscuro">Mejora tu estado de ánimo</h3>
              <p className="text-azul-oscuro/80">
                La depresión y los problemas del estado de ánimo pueden tratarse eficazmente mediante terapia online. Desarrollaremos estrategias personalizadas para recuperar tu bienestar emocional y motivación.
              </p>
            </div>
            
            <div className="help-card">
              <div className="help-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-azul-oscuro">Resuelve problemas de sueño</h3>
              <p className="text-azul-oscuro/80">
                El insomnio y otros trastornos del sueño afectan significativamente tu calidad de vida. Mediante técnicas específicas, trabajaremos para restaurar tus patrones de sueño sin necesidad de medicación.
              </p>
            </div>
            
            <div className="help-card">
              <div className="help-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-azul-oscuro">Apoyo profesional accesible</h3>
              <p className="text-azul-oscuro/80">
                La terapia online elimina barreras geográficas y de tiempo, permitiéndote acceder a atención psicológica de calidad desde la comodidad de tu hogar, adaptándose a tu horario y necesidades.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contacto" className="inline-block bg-turquesa hover:bg-turquesa/90 text-white font-medium py-3 px-8 rounded-md shadow-md transition duration-300">
              Descubre cómo funciona la terapia online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyudaTerapiaOnline;
