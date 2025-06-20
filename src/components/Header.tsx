const Header = () => {
  return (
    <header className="bg-gradient-to-b from-azul-pastel to-blanco-suave text-azul-oscuro relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('/images/espacio_terapia_luminoso.jpg')"}}></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Terapia Psicológica Online</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Dr. [Nombre] - Especialista en Ansiedad</h2>
            <p className="text-xl md:text-2xl mb-10">Atención especializada en ansiedad, depresión y bienestar emocional desde cualquier lugar. Terapia Cognitivo-Conductual efectiva y accesible.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-turquesa hover:bg-turquesa/90 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Agenda tu primera sesión online
              </button>
              <button className="bg-transparent border-2 border-turquesa text-turquesa hover:bg-turquesa/10 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Consulta gratuita de 15 minutos
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="/images/terapia_online_sesion.jpg" 
              alt="Psicólogo especialista realizando una sesión de terapia online con un paciente" 
              className="rounded-lg shadow-xl max-w-full md:max-w-md h-auto"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
