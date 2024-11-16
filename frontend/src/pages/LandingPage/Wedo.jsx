import React from 'react';
const Wedo = () => {
    return (
        <div className='container mx-auto mt-10'>
            
            <section id="about" className="bg-white p-6 rounded-lg shadow-lg mb-10">
            <div className="rounded-lg overflow-hidden mt-10 relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-emerald-600 before:opacity-80">
                <img src="https://loremflickr.com/320/240?random=1" className="absolute z-10 object-cover h-80 w-full" alt="" />
                <a href="" className="absolute z-20  top-1/2  right-20 text-white -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-20 h-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                </a>
                <div className="relative z-20 p-10 h-full w-1/2">
                    <h2 className="text-white text-3xl font-semibold">WHAT DO WE DO?</h2>
                    <div className="flex gap-4 items-center pt-4 border-t border-slate-300 text-slate-300 mt-6">
                    <span className="flex gap-1 items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        99
                    </span>
                    <span className="flex gap-1 items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="text-sky-400 w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                        99
                    </span>
                    <span className="flex gap-1 items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-4 h-4 text-lime-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                        99
                    </span>
                    </div>
                </div>
            </div>
            </section>

            <section id="Services" className="bg-black p-6 rounded-lg shadow-lg mb-10">
            <h2 class="text-3xl font-bold mb-4">Servicios</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <img src="https://i.pinimg.com/564x/da/40/4b/da404bf7bd4398c9f256c65507d3c860.jpg" alt="Project 1" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Mantenimientos de paginas WEB</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        El mantenimiento de páginas web es esencial para asegurar su correcto funcionamiento y seguridad.
                        Incluye la actualización regular del software, la implementación de medidas de seguridad como copias de seguridad y protección contra malware,
                        la corrección de errores técnicos, la optimización del rendimiento para mejorar la velocidad de carga y la experiencia del usuario,
                        y la actualización constante del contenido para mantenerlo relevante y atractivo.
                    </p>
                    <a href="#" className="text-primary hover:underline">Ver más</a>
                  </div>
                </div>
          
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <img src="https://i.pinimg.com/564x/9a/35/75/9a357546f6c363584b3ddf3b35cd7ae4.jpg" alt="Project 2" class="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Desarrollo de Aplicaciones WEB/Moviles</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        El desarrollo de aplicaciones web y móviles implica la creación de software para navegadores y dispositivos móviles, abarcando desde la planificación y
                        diseño de la interfaz de usuario hasta la programación en lenguajes como JavaScript, HTML5, Swift y Kotlin. Este proceso incluye pruebas exhaustivas para
                        asegurar la funcionalidad en diversos dispositivos,
                        el despliegue en tiendas de aplicaciones o servidores web, y el mantenimiento continuo para corregir errores y añadir nuevas funcionalidades.
                    </p>
                    <a href="#" className="text-primary hover:underline">Ver más</a>
                  </div>
                </div>
          
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <img src="https://i.pinimg.com/564x/92/27/17/9227171b56b670c54943c958676744e8.jpg" alt="Project 3" className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Analista de datos</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        Un analista de datos es un profesional encargado de recopilar, filtrar e interpretar grandes volúmenes de datos para ayudar a las
                        empresas a tomar decisiones informadas. Utilizan diversas herramientas y técnicas para transformar datos en información útil, identificar patrones y tendencias,
                        y presentar sus hallazgos de manera clara y comprensible. Su trabajo es crucial para mejorar la eficiencia, identificar oportunidades y mitigar riesgos en las organizaciones
                    </p>
                    <a href="#" className="text-primary hover:underline">Ver más</a>
                  </div>
                </div>
              </div>
        </section>
        </div>
    )
}

export default Wedo;