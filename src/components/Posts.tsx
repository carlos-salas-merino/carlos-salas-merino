import { textos } from '../textos';

const Posts = () => {
  return (
    <section id="posts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Artículos sobre Psicología y Bienestar Emocional</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Información útil y consejos prácticos sobre terapia online, ansiedad, depresión y otros temas relacionados con la salud mental.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {textos.posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Imagen del post (placeholder) */}
              <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="w-12 h-12 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">{post.titulo}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.contenido}</p>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                  Leer más sobre {post.titulo.toLowerCase().replace(/^(terapia|ansiedad|depresión|problemas|innovación) - /i, '')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
