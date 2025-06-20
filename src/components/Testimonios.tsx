import { useState, useEffect } from 'react';
import { textos } from '../textos';

// Definición del tipo para las reseñas
interface Reseña {
  id: string;
  nombre: string;
  edad: number;
  texto: string;
  fecha: string;
  valoracion: number;
}

const Testimonios = () => {
  // Estado para las reseñas (combinando las predefinidas con las del localStorage)
  const [reseñas, setReseñas] = useState<Reseña[]>([]);
  
  // Estados para el formulario
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [texto, setTexto] = useState('');
  const [valoracion, setValoracion] = useState(5);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');

  // Cargar reseñas al iniciar
  useEffect(() => {
    // Convertir testimonios predefinidos al formato de reseñas
    const reseñasPredefinidas = textos.testimonios.map((testimonio, index) => ({
      id: `predefined-${index}`,
      nombre: testimonio.nombre,
      edad: testimonio.edad,
      texto: testimonio.texto,
      fecha: '',
      valoracion: 5
    }));
    
    // Obtener reseñas guardadas en localStorage
    const reseñasGuardadas = localStorage.getItem('reseñasPsicologo');
    const reseñasParseadas = reseñasGuardadas ? JSON.parse(reseñasGuardadas) : [];
    
    // Combinar ambas fuentes de reseñas
    setReseñas([...reseñasPredefinidas, ...reseñasParseadas]);
  }, []);

  // Manejar envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!nombre || !texto || !edad) {
      return;
    }
    
    // Crear nueva reseña
    const nuevaReseña: Reseña = {
      id: `reseña-${Date.now()}`,
      nombre,
      edad: parseInt(edad),
      texto,
      fecha: new Date().toLocaleDateString(),
      valoracion
    };
    
    // Obtener reseñas existentes del localStorage
    const reseñasGuardadas = localStorage.getItem('reseñasPsicologo');
    const reseñasParseadas = reseñasGuardadas ? JSON.parse(reseñasGuardadas) : [];
    
    // Añadir la nueva reseña
    const reseñasActualizadas = [...reseñasParseadas, nuevaReseña];
    
    // Guardar en localStorage
    localStorage.setItem('reseñasPsicologo', JSON.stringify(reseñasActualizadas));
    
    // Actualizar estado
    setReseñas(prevReseñas => [...prevReseñas, nuevaReseña]);
    
    // Resetear formulario
    setNombre('');
    setEdad('');
    setTexto('');
    setValoracion(5);
    setMostrarFormulario(false);
    
    // Mostrar mensaje de éxito
    setMensajeExito('¡Gracias por compartir tu experiencia!');
    setTimeout(() => setMensajeExito(''), 3000);
  };

  return (
    <section id="testimonios" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonios</h2>
        <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
          Descubre las experiencias de pacientes que han mejorado su bienestar emocional a través de la terapia online.
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {reseñas.map((reseña) => (
              <div key={reseña.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xl font-bold">{reseña.nombre.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{reseña.nombre}</h3>
                    <p className="text-sm text-blue-100">{reseña.edad} años</p>
                  </div>
                </div>
                <div className="mb-3">
                  {Array.from({ length: reseña.valoracion || 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-300">★</span>
                  ))}
                </div>
                <p className="italic text-blue-50">"{reseña.texto}"</p>
                {reseña.fecha && (
                  <p className="text-xs text-blue-200 mt-3 text-right">{reseña.fecha}</p>
                )}
              </div>
            ))}
          </div>
          
          {mensajeExito && (
            <div className="mt-8 bg-green-500/20 border border-green-300 text-white p-4 rounded-lg text-center">
              {mensajeExito}
            </div>
          )}
          
          {!mostrarFormulario ? (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setMostrarFormulario(true)}
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
              >
                Compartir mi experiencia
              </button>
            </div>
          ) : (
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Comparte tu experiencia</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium mb-1">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className="w-full px-4 py-2 bg-white/20 border border-blue-300/30 rounded-md focus:ring-2 focus:ring-white focus:border-white text-white"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="edad" className="block text-sm font-medium mb-1">Edad</label>
                    <input
                      type="number"
                      id="edad"
                      value={edad}
                      onChange={(e) => setEdad(e.target.value)}
                      className="w-full px-4 py-2 bg-white/20 border border-blue-300/30 rounded-md focus:ring-2 focus:ring-white focus:border-white text-white"
                      placeholder="Tu edad"
                      min="18"
                      max="99"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="valoracion" className="block text-sm font-medium mb-1">Valoración</label>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((estrella) => (
                      <button
                        key={estrella}
                        type="button"
                        onClick={() => setValoracion(estrella)}
                        className="text-2xl focus:outline-none"
                      >
                        <span className={estrella <= valoracion ? "text-yellow-300" : "text-gray-400"}>
                          ★
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="texto" className="block text-sm font-medium mb-1">Tu experiencia</label>
                  <textarea
                    id="texto"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/20 border border-blue-300/30 rounded-md focus:ring-2 focus:ring-white focus:border-white text-white"
                    placeholder="Comparte tu experiencia con la terapia online..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setMostrarFormulario(false)}
                    className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-2 px-6 rounded-md shadow-md transition duration-300"
                  >
                    Enviar reseña
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
