import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { 
  ElegguaSymbol, 
  YemayaSymbol, 
  ChangoSymbol, 
  OshunSymbol, 
  PaloMayombeSymbol, 
  PaloCross, 
  PaloCaldron, 
  VuduVeve, 
  ProtectionSymbol 
} from "../components/AfrocubanSymbols";

export default component$(() => {
  const services = [
    {
      title: "Amarres de Amor",
      description: "Trabajos especializados para unir corazones y recuperar el amor perdido. Santería cubana auténtica.",
      icon: "❤️",
      price: "Consulta Gratis"
    },
    {
      title: "Limpiezas Espirituales",
      description: "Eliminamos energías negativas y malas vibras que bloquean tu camino hacia la felicidad.",
      icon: "🕯️",
      price: "Gratis"
    },
    {
      title: "Trabajos de Vudú",
      description: "Rituales poderosos con la tradición haitiana para casos difíciles y situaciones complejas.",
      icon: "🔮",
      price: "Gratis"
    },
    {
      title: "Protección Espiritual",
      description: "Escudos energéticos contra enemigos, envidias y trabajos de magia negra.",
      icon: "🛡️",
      price: "Gratis"
    },
    {
      title: "Rituales de Prosperidad",
      description: "Abre los caminos del dinero y la abundancia con rituales del Palo Mayombe.",
      icon: "💰",
      price: "Gratis"
    },
    {
      title: "Lectura de Cartas",
      description: "Consultas con baraja española y tarot para conocer tu futuro en el amor y el dinero.",
      icon: "🃏",
      price: "Gratis"
    }
  ];

  const testimonials = [
    {
      name: "Carmen L.",
      location: "Miami, FL",
      text: "Florentino me ayudó a recuperar a mi esposo después de 6 meses separados. Su trabajo es real y efectivo. ¡Mil gracias!",
      rating: 5
    },
    {
      name: "Roberto M.",
      location: "La Habana, Cuba",
      text: "Los trabajos de prosperidad que me hizo cambiaron mi vida completamente. Ahora tengo mi propio negocio y todo va bien.",
      rating: 5
    },
    {
      name: "Yolanda S.",
      location: "Caracas, Venezuela",
      text: "La limpieza espiritual que me realizó eliminó todas las malas energías. Me siento renovada y con mucha paz.",
      rating: 5
    },
    {
      name: "María G.",
      location: "Houston, Texas",
      text: "Los trabajos de Florentino son increíbles. Mi negocio despegó después de los rituales de prosperidad. ¡Totalmente recomendado!",
      rating: 5
    },
    {
      name: "José R.",
      location: "Los Angeles, California",
      text: "Después de años de mala suerte, Florentino cambió mi destino. Sus amarres funcionan de verdad. Gracias por todo.",
      rating: 5
    },
    {
      name: "Ana M.",
      location: "Nueva York, NY",
      text: "La protección espiritual que me hizo me salvó de muchos problemas. Es un verdadero maestro de la santería.",
      rating: 5
    }
  ];

  const healers = [
    {
      name: "Florentino El Brujo Del Amor",
      specialty: "Santero Cubano Florentino del Amor",
      experience: "Más de 30 años",
      description: "Iniciado en el Palo Mayombe, Santería Cubana y Vudú Haitiano. Reconocido santero con más de 320 amarres exitosos al año.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23800020'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23D4AF37'/%3E%3Crect x='70' y='120' width='60' height='40' fill='%238B4513'/%3E%3Ctext x='100' y='180' text-anchor='middle' fill='white' font-size='12'%3EFlorentino%3C/text%3E%3C/svg%3E"
    }
  ];

  return (
    <div class="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-red-900 to-black">
        <div class="absolute inset-0 bg-black bg-opacity-60"></div>
        <div class="absolute inset-0 opacity-10">
          <svg width="1920" height="1080" viewBox="0 0 1920 1080" class="w-full h-full object-cover">
              <defs>
                <radialGradient id="bg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#2D1B69"/>
                  <stop offset="100%" stop-color="#0F0F23"/>
                </radialGradient>
              </defs>
              <rect width="1920" height="1080" fill="url(#bg)"/>
              <circle cx="400" cy="300" r="8" fill="#FFD700" opacity="0.8"/>
              <circle cx="800" cy="200" r="6" fill="#FF4500" opacity="0.9"/>
              <circle cx="1200" cy="400" r="10" fill="#DC143C" opacity="0.7"/>
              <circle cx="1600" cy="600" r="7" fill="#FFD700" opacity="0.8"/>
            </svg>
        </div>
        {/* Imágenes religiosas flotantes */}
        <div class="absolute top-20 left-20 w-24 h-24 opacity-30">
          <svg width="96" height="96" viewBox="0 0 96 96" class="w-full h-full object-cover rounded-full border-2 border-red-400">
              <circle cx="48" cy="48" r="46" fill="#8B0000"/>
              <path d="M48 20 C40 12, 28 12, 28 28 C28 44, 48 64, 48 64 S68 44, 68 28 C68 12, 56 12, 48 20 Z" fill="#FF6B6B"/>
              <ellipse cx="48" cy="75" rx="8" ry="15" fill="#FFD700" opacity="0.8"/>
            </svg>
        </div>
        <div class="absolute top-32 right-16 w-20 h-20 opacity-25">
          <img src="/images/elekes-santeria.jpg" alt="Collares de santería" class="w-full h-full object-cover rounded-full" loading="lazy" width="80" height="80" />
        </div>
        <div class="absolute bottom-24 left-16 w-28 h-28 opacity-20">
          <img src="/images/caracolas.jpg" alt="Caracolas" class="w-full h-full object-cover rounded-lg" loading="lazy" width="112" height="112" />
        </div>
        {/* Símbolos Afrocubanos distribuidos */}
        <div class="absolute top-8 left-8 z-5">
          <ElegguaSymbol />
        </div>
        <div class="absolute top-8 right-8 z-5">
          <ChangoSymbol />
        </div>
        <div class="absolute bottom-8 left-8 z-5">
          <YemayaSymbol />
        </div>
        <div class="absolute bottom-8 right-8 z-5">
          <OshunSymbol />
        </div>
        <div class="absolute top-1/4 left-16 z-5">
          <PaloMayombeSymbol />
        </div>
        <div class="absolute top-1/4 right-16 z-5">
          <PaloCross />
        </div>
        <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div class="mb-12">
            <h1 class="text-5xl md:text-7xl font-light mb-8 text-white leading-tight">
              FLORENTINO
              <span class="block text-red-400 text-4xl md:text-6xl mt-2">EL BRUJO DEL AMOR</span>
            </h1>
            <h2 class="text-2xl md:text-3xl mb-8 text-yellow-300 font-light max-w-4xl mx-auto leading-relaxed">
              VUDÚ Y SANTERÍA • SANTERO CUBANO FLORENTINO DEL AMOR
            </h2>
            
            {/* Templo Espiritual con Amuletos y Hechizos */}
            <div class="mb-12 flex justify-center">
              <div class="relative w-96 h-80 rounded-lg overflow-hidden border-4 border-yellow-400 shadow-2xl">
                <img 
                  src="/images/altar-espiritual.jpg" 
                  alt="Templo Espiritual - Amuletos y Hechizos" 
                  class="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width="384"
                  height="320"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                {/* Texto superpuesto */}
                <div class="absolute bottom-4 left-4 right-4 text-center">
                  <h3 class="text-yellow-300 text-lg font-bold mb-1">TEMPLO ESPIRITUAL</h3>
                  <h4 class="text-white text-base font-bold mb-1">AMULETOS Y HECHIZOS</h4>
                  <p class="text-red-400 text-sm font-bold">CONSULTA GRATIS PARA AYUDARTE</p>
                </div>
              </div>
            </div>
            <h3 class="text-xl md:text-2xl mb-8 text-white font-light">
              RELIGIÓN AFROCUBANA INICIADO EN EL PALO MAYOMBE
            </h3>
            
            {/* Estatua de Oshun con veladoras amarillas */}
            <div class="mb-12 flex justify-center">
              <div class="relative">
                <img 
                  src="/images/oshun-estatua.jpg" 
                  alt="Estatua de Oshun con veladoras amarillas" 
                  class="w-80 h-96 object-cover rounded-lg border-4 border-yellow-400 shadow-2xl"
                  loading="lazy"
                  width="320"
                  height="384"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                {/* Veladoras amarillas alrededor */}
                <div class="absolute -bottom-4 -left-4 w-12 h-16">
                  <img src="/images/veladora-amarilla.jpg" alt="Veladora amarilla" class="w-full h-full object-cover" loading="lazy" width="48" height="64" />
                </div>
                <div class="absolute -bottom-4 -right-4 w-12 h-16">
                    <img src="/images/veladora-amarilla.jpg" alt="Veladora amarilla" class="w-full h-full object-cover" loading="lazy" width="48" height="64" />
                </div>
                <div class="absolute -top-2 -left-6 w-10 h-14">
                  <img src="/images/veladora-amarilla.jpg" alt="Veladora amarilla" class="w-full h-full object-cover" loading="lazy" width="40" height="56" />
                </div>
                <div class="absolute -top-2 -right-6 w-10 h-14">
                    <img src="/images/veladora-amarilla.jpg" alt="Veladora amarilla" class="w-full h-full object-cover" loading="lazy" width="40" height="56" />
                </div>
              </div>
            </div>
            <h4 class="text-3xl md:text-4xl mb-12 text-yellow-400 font-light">
              HACEMOS LOS MEJORES AMARRES
            </h4>
          </div>
          
          <a href="https://wa.me/15708923111" class="bg-green-600 hover:bg-green-700 inline-flex items-center px-8 py-4 rounded-lg mb-12 text-white font-bold text-xl transition-all duration-300">
            <svg class="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            WhatsApp
          </a>
          
          <p class="text-xl md:text-2xl mb-8 text-white leading-relaxed max-w-4xl mx-auto font-bold">
            Mi conocimiento y aprendizaje con santeros y paleros en Cuba, me otorgaron el grado de Santero. 
            Soy un reconocido Santero Cubano. Realizo más de 320 amarres al año.
          </p>
          
          <p class="text-lg md:text-xl mb-16 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Con mi conocimiento podría ayudarte para hacer trabajos de magia negra y realizar pactos con espíritus. 
            Cuento con un gran número de iniciados y seguidores en todas partes del mundo, que me dan un reconocimiento. 
            Absoluta reserva y discreción para quien me pide un trabajo.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a href="https://wa.me/15708923111" class="bg-green-600 hover:bg-green-700 px-12 py-6 rounded-lg text-xl font-bold transition-all duration-300 text-white flex items-center">
              <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              +1 570-892-3111
            </a>
            <a href="tel:+12148845031" class="bg-red-700 hover:bg-red-800 px-12 py-6 rounded-lg text-xl font-bold text-white transition-all duration-300">
              LLAMAR AHORA
            </a>
          </div>
          
          <div class="bg-red-800 border-2 border-yellow-400 p-8 rounded-lg mb-12">
            <h3 class="text-2xl md:text-3xl font-light text-yellow-300 mb-4">
              ATENDEMOS DE DOMINGO-DOMINGO
            </h3>
            <p class="text-xl text-white font-bold">
              TU SUERTE PUEDE CAMBIAR
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div class="border-l-4 border-yellow-400 pl-6">
              <div class="text-4xl font-bold text-yellow-300 mb-2">320+</div>
              <div class="text-white font-bold">Amarres Exitosos</div>
            </div>
            <div class="border-l-4 border-yellow-400 pl-6">
              <div class="text-4xl font-bold text-yellow-300 mb-2">30+</div>
              <div class="text-white font-bold">Años de Experiencia</div>
            </div>
            <div class="border-l-4 border-yellow-400 pl-6">
              <div class="text-4xl font-bold text-yellow-300 mb-2">100%</div>
              <div class="text-white font-bold">Efectividad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Study Section */}
      <section class="py-16 px-4 bg-red-900">
        <div class="max-w-4xl mx-auto text-center">
          <div class="border-4 border-yellow-400 p-8 bg-black bg-opacity-80">
            <h2 class="text-4xl md:text-5xl font-light text-red-400 mb-6">
              ¡LLAMA YA! EL ESTUDIO DE TU CASO ES GRATIS
            </h2>
            <div class="flex justify-center mb-6">
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
              <div class="w-4 h-4 bg-red-500 transform rotate-45 mx-2"></div>
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
            </div>
            <div class="mb-8 relative">
              <img src="/images/altar-espiritual.jpg" alt="Altar Espiritual" width="256" height="256" class="w-64 h-64 mx-auto rounded-lg border-2 border-yellow-400" loading="lazy" />
              {/* Imágenes adicionales alrededor */}
              <div class="absolute -top-4 -left-4 w-16 h-16 opacity-40">
                <img src="/images/velas-blancas.jpg" alt="Velas blancas" class="w-full h-full object-cover rounded-full" loading="lazy" width="64" height="64" />
              </div>
              <div class="absolute -top-4 -right-4 w-16 h-16 opacity-40">
                <img src="/images/caldero-hierro.jpg" alt="Caldero de hierro" class="w-full h-full object-cover rounded-full" loading="lazy" width="64" height="64" />
              </div>
            </div>
            <h3 class="text-3xl md:text-4xl font-light text-red-400 mb-4">
              ESTAMOS PARA DARLE UN GIRO A TU VIDA
            </h3>
            <div class="flex justify-center">
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
              <div class="w-4 h-4 bg-red-500 transform rotate-45 mx-2"></div>
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="py-24 px-4 bg-black relative">
        <div class="absolute inset-0 opacity-8">
          <svg width="1920" height="1080" viewBox="0 0 1920 1080" class="w-full h-full object-cover">
              <rect width="1920" height="1080" fill="#1a1a2e"/>
              <circle cx="300" cy="400" r="12" fill="#dc2626" opacity="0.8"/>
              <circle cx="600" cy="300" r="10" fill="#fbbf24" opacity="0.9"/>
              <circle cx="900" cy="500" r="14" fill="#f3f4f6" opacity="0.7"/>
              <circle cx="1200" cy="350" r="11" fill="#dc2626" opacity="0.8"/>
              <circle cx="1500" cy="450" r="13" fill="#fbbf24" opacity="0.9"/>
            </svg>
        </div>
        {/* Imágenes religiosas en servicios - Optimizadas */}
        <div class="absolute top-16 left-1/4 w-32 h-32 opacity-25">
          <img src="/images/hierbas-sagradas.jpg" alt="Hierbas sagradas" class="w-full h-full object-cover rounded-lg border border-yellow-400" width="128" height="128" />
        </div>
        {/* Símbolos Afrocubanos en servicios */}
        <div class="absolute top-12 left-12 z-5">
          <VuduVeve />
        </div>
        <div class="absolute top-12 right-12 z-5">
          <ProtectionSymbol />
        </div>
        <div class="absolute bottom-12 left-1/4 z-5">
          <PaloCaldron />
        </div>
        <div class="absolute bottom-12 right-1/4 z-5">
          <ElegguaSymbol />
        </div>
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl font-light mb-8 text-red-400">
              NUESTROS TRABAJOS ESPIRITUALES
            </h2>
            <p class="text-xl text-yellow-300 max-w-3xl mx-auto font-bold leading-relaxed">
              Santería Cubana Auténtica • Vudú Haitiano • Palo Mayombe
            </p>
            
            {/* Estatua de Santa Muerte Roja con veladoras rojas */}
            <div class="mb-12 flex justify-center">
              <div class="relative">
                <img 
                  src="/images/santa-muerte-roja.jpg" 
                  alt="Estatua de Santa Muerte Roja con veladoras rojas" 
                  class="w-80 h-96 object-cover rounded-lg border-4 border-red-600 shadow-2xl"
                  width="320" height="384"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                {/* Veladoras rojas alrededor - Optimizadas */}
                <div class="absolute -bottom-4 -left-4 w-12 h-16">
                  <img src="/images/veladora-roja.jpg" alt="Veladora roja" class="w-full h-full object-cover" width="48" height="64" />
                </div>
                <div class="absolute -bottom-4 -right-4 w-12 h-16">
                  <img src="/images/veladora-roja.jpg" alt="Veladora roja" class="w-full h-full object-cover" width="48" height="64" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} class="group border-2 border-red-600 p-8 hover:border-yellow-400 transition-all duration-300 bg-gradient-to-b from-red-900 to-black">
                <div class="text-4xl mb-6 text-center">{service.icon}</div>
                <h3 class="text-2xl font-light mb-4 text-yellow-300 text-center">{service.title}</h3>
                <p class="text-white mb-8 leading-relaxed font-bold text-center">{service.description}</p>
                <div class="flex justify-between items-center">
                  <span class="text-xl font-bold text-yellow-400">{service.price}</span>
                  <a href="https://wa.me/15708923111" class="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 text-white">
                WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Santero Profile Section */}
      <section class="py-24 px-4 bg-gradient-to-b from-black to-red-900 border-t-4 border-yellow-400 relative">
        <div class="absolute inset-0 opacity-12">
          <img src="/images/altar-velas-multiples.jpg" alt="" class="w-full h-full object-cover" width="1920" height="1080" />
        </div>
        {/* Imágenes religiosas en perfil - Reutilizadas */}
        <div class="absolute top-24 left-12 w-36 h-36 opacity-20">
          <img src="/images/flores-frescas.jpg" alt="Flores frescas" class="w-full h-full object-cover rounded-lg border border-blue-400" width="144" height="144" />
        </div>
        {/* Símbolos Afrocubanos en perfil */}
        <div class="absolute top-16 left-8 z-5">
          <ChangoSymbol />
        </div>
        <div class="absolute top-16 right-8 z-5">
          <YemayaSymbol />
        </div>
        <div class="absolute bottom-16 left-1/3 z-5">
          <PaloMayombeSymbol />
        </div>
        <div class="absolute bottom-16 right-1/3 z-5">
          <OshunSymbol />
        </div>
        <div class="max-w-6xl mx-auto relative z-10">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl font-light mb-8 text-yellow-300">
              BIENVENIDOS
            </h2>
            <div class="flex justify-center mb-8">
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
              <div class="w-4 h-4 bg-red-500 transform rotate-45 mx-2"></div>
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-center">
              <div class="w-80 h-80 mx-auto mb-8 overflow-hidden border-4 border-yellow-400 rounded-lg">
                <img src={healers[0].image} alt={healers[0].name} width="320" height="320" class="w-full h-full object-cover" />
              </div>
              <div class="bg-red-800 border-2 border-yellow-400 p-6 rounded-lg">
                <h3 class="text-3xl font-light mb-2 text-yellow-300">{healers[0].name}</h3>
                <p class="text-xl text-white mb-4 font-bold">{healers[0].specialty}</p>
                <p class="text-lg text-yellow-400 font-bold">{healers[0].experience} de experiencia</p>
              </div>
            </div>
            
            <div class="bg-black border-2 border-red-600 p-8 rounded-lg">
              <p class="text-xl text-white mb-8 leading-relaxed font-bold">
                {healers[0].description}
              </p>
              
              <div class="mb-8">
                <h4 class="text-2xl font-light text-yellow-300 mb-4">Especialidades:</h4>
                <ul class="text-white space-y-2 font-bold">
                  <li>• Santería Cubana tradicional</li>
                  <li>• Vudú Haitiano auténtico</li>
                  <li>• Palo Mayombe iniciado</li>
                  <li>• Amarres de amor efectivos</li>
                  <li>• Trabajos de magia negra</li>
                </ul>
              </div>
              
              <div class="text-center">
                <a href="https://wa.me/15708923111" class="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 text-white inline-flex items-center">
                  <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Consulta Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section class="py-24 px-4 bg-gradient-to-b from-red-900 to-black border-t-4 border-yellow-400 relative">
        {/* Símbolos Afrocubanos en testimonios */}
        <div class="absolute top-20 left-10 z-5">
          <ProtectionSymbol />
        </div>
        <div class="absolute top-20 right-10 z-5">
          <VuduVeve />
        </div>
        <div class="absolute bottom-20 left-1/4 z-5">
          <PaloCross />
        </div>
        <div class="absolute bottom-20 right-1/4 z-5">
          <PaloCaldron />
        </div>
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-5xl font-light mb-8 text-yellow-300">
              TESTIMONIOS REALES
            </h2>
            <div class="flex justify-center mb-8">
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
              <div class="w-4 h-4 bg-red-500 transform rotate-45 mx-2"></div>
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
            </div>
            <p class="text-xl text-red-400 max-w-3xl mx-auto font-bold leading-relaxed">
              Casos Exitosos de Nuestros Trabajos Espirituales
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} class="border-2 border-yellow-400 p-8 hover:border-red-400 transition-all duration-300 bg-black bg-opacity-80">
                <div class="flex mb-6 justify-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} class="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p class="text-white mb-8 leading-relaxed font-bold italic text-lg text-center">"{testimonial.text}"</p>
                <div class="border-t-2 border-red-600 pt-6 text-center">
                  <p class="font-bold text-yellow-300 text-lg">{testimonial.name}</p>
                  <p class="text-red-400 text-sm font-bold">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-24 px-4 bg-red-900 border-t-4 border-yellow-400 relative">
        {/* Símbolos Afrocubanos en CTA */}
        <div class="absolute top-12 left-6 z-5">
          <ElegguaSymbol />
        </div>
        <div class="absolute top-12 right-6 z-5">
          <ChangoSymbol />
        </div>
        <div class="absolute bottom-12 left-8 z-5">
          <YemayaSymbol />
        </div>
        <div class="absolute bottom-12 right-8 z-5">
          <OshunSymbol />
        </div>
        <div class="max-w-6xl mx-auto text-center relative z-10">
          <div class="bg-black border-4 border-yellow-400 p-12 rounded-lg">
            <h2 class="text-4xl md:text-6xl font-light mb-8 text-red-400">
              ¡NO ESPERES MÁS!
            </h2>
            <div class="flex justify-center mb-8">
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
              <div class="w-4 h-4 bg-red-500 transform rotate-45 mx-2"></div>
              <div class="w-2 h-2 bg-red-500 rounded-full mx-1"></div>
            </div>
            <p class="text-2xl text-yellow-300 mb-12 max-w-4xl mx-auto font-bold leading-relaxed">
              TU VIDA PUEDE CAMBIAR HOY MISMO • RESULTADOS GARANTIZADOS • TRABAJOS EFECTIVOS
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div class="bg-red-800 border-2 border-yellow-400 p-6 rounded-lg">
                <h3 class="text-2xl font-light text-yellow-300 mb-4">LLAMA AHORA</h3>
                <p class="text-3xl font-bold text-white mb-4">+1 570-892-3111</p>
                <p class="text-lg text-red-400 font-bold">Atención 24/7</p>
              </div>
              
              <div class="bg-green-800 border-2 border-yellow-400 p-6 rounded-lg">
                <h3 class="text-2xl font-light text-yellow-300 mb-4">WHATSAPP</h3>
                <a href="https://wa.me/15708923111" class="text-3xl font-bold text-white mb-4 block hover:text-green-300">+1 570-892-3111</a>
                <p class="text-lg text-green-400 font-bold">Respuesta Inmediata</p>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+15708923111" class="bg-red-600 hover:bg-red-700 px-12 py-6 rounded-lg text-2xl font-bold transition-all duration-300 text-white">
                📞 LLAMAR AHORA
              </a>
              <a href="https://wa.me/15708923111" class="bg-green-600 hover:bg-green-700 px-12 py-6 rounded-lg text-2xl font-bold transition-all duration-300 text-white">
                💬 WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-16 px-4 bg-black border-t-4 border-yellow-400 relative">
        {/* Símbolos Afrocubanos en footer */}
        <div class="absolute top-8 left-4 z-5">
          <PaloMayombeSymbol />
        </div>
        <div class="absolute top-8 right-4 z-5">
          <PaloCross />
        </div>
        <div class="absolute bottom-8 left-1/4 z-5">
          <VuduVeve />
        </div>
        <div class="absolute bottom-8 right-1/4 z-5">
          <ProtectionSymbol />
        </div>
        <div class="absolute top-1/2 left-4 z-5">
          <PaloCaldron />
        </div>
        <div class="absolute top-1/2 right-4 z-5">
          <ElegguaSymbol />
        </div>
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div class="col-span-1 md:col-span-2">
              <h3 class="text-3xl font-light mb-6 text-red-400">
                FLORENTINO EL BRUJO DEL AMOR
              </h3>
              <p class="text-yellow-300 mb-6 leading-relaxed font-bold text-lg">
                Santero Cubano Auténtico • Trabajos Espirituales Efectivos • Resultados Garantizados
              </p>
              <div class="bg-red-800 border-2 border-yellow-400 p-4 rounded-lg mb-6">
                <p class="text-white font-bold text-center">"TU FELICIDAD ES MI COMPROMISO"</p>
              </div>
              <div class="flex space-x-6">
                <a href="https://wa.me/15708923111" class="text-green-400 hover:text-green-300 transition-colors duration-300">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a href="tel:+15708923111" class="text-red-400 hover:text-red-300 transition-colors duration-300">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 class="text-xl font-light mb-6 text-yellow-300">TRABAJOS ESPIRITUALES</h4>
              <ul class="space-y-3">
                <li><a href="#" class="text-white hover:text-red-400 transition-colors duration-300 font-bold">• Amarres de Amor</a></li>
                <li><a href="#" class="text-white hover:text-red-400 transition-colors duration-300 font-bold">• Limpiezas Espirituales</a></li>
                <li><a href="#" class="text-white hover:text-red-400 transition-colors duration-300 font-bold">• Trabajos de Vudú</a></li>
                <li><a href="#" class="text-white hover:text-red-400 transition-colors duration-300 font-bold">• Protección Espiritual</a></li>
                <li><a href="#" class="text-white hover:text-red-400 transition-colors duration-300 font-bold">• Rituales de Prosperidad</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-xl font-light mb-6 text-yellow-300">CONTACTO DIRECTO</h4>
              <div class="space-y-4">
                <div class="bg-green-800 border border-yellow-400 p-3 rounded">
                  <p class="text-white font-bold text-center">📱 WhatsApp</p>
                  <p class="text-yellow-300 font-bold text-center">+1 570-892-3111</p>
                </div>
                <div class="bg-red-800 border border-yellow-400 p-3 rounded">
                  <p class="text-white font-bold text-center">📞 Llamadas</p>
                  <p class="text-yellow-300 font-bold text-center">+1 570-892-3111</p>
                </div>
                <p class="text-yellow-400 font-bold text-center">🕒 ATENCIÓN 24/7</p>
                <p class="text-red-400 font-bold text-center">📍 ESTADOS UNIDOS</p>
              </div>
            </div>
          </div>
          
          <div class="border-t-2 border-red-600 mt-12 pt-8 text-center">
            <div class="bg-red-900 border border-yellow-400 p-4 rounded-lg mb-4">
              <p class="text-yellow-300 font-bold text-lg">
                "RESULTADOS GARANTIZADOS O DEVOLVEMOS TU DINERO"
              </p>
            </div>
            <p class="text-gray-400 font-bold">
              &copy; 2024 Florentino El Brujo Del Amor. Santería Cubana Auténtica.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Botón fijo flotante de llamada */}
      <div class="fixed bottom-6 right-6 z-50">
        <a 
          href="tel:+12148845031" 
          class="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          title="Llamar ahora: +1 214-884-5031"
        >
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          <span class="ml-2 font-bold text-sm hidden group-hover:block transition-all duration-300">LLAMAR</span>
        </a>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Florentino El Brujo Del Amor - Santero Cubano Auténtico | Amarres de Amor Efectivos",
  meta: [
    {
      name: "description",
      content: "Santero Cubano Florentino del Amor. Más de 30 años de experiencia en Santería, Vudú Haitiano y Palo Mayombe. Amarres de amor efectivos, limpiezas espirituales y trabajos garantizados. Consulta gratis 24/7.",
    },
    {
      name: "keywords",
      content: "santero cubano, florentino del amor, amarres de amor, santería cubana, vudú haitiano, palo mayombe, trabajos espirituales, limpiezas espirituales, brujo cubano, magia negra, rituales efectivos",
    },
    {
      name: "author",
      content: "Florentino El Brujo Del Amor",
    },
    {
      name: "language",
      content: "es",
    },
    {
      name: "geo.region",
      content: "US",
    },
    {
      name: "geo.country",
      content: "United States",
    },
    {
      property: "og:title",
      content: "Florentino El Brujo Del Amor - Santero Cubano Auténtico",
    },
    {
      property: "og:description",
      content: "Santero Cubano con más de 30 años de experiencia. Amarres de amor efectivos, trabajos de Santería, Vudú y Palo Mayombe. Resultados garantizados.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:locale",
      content: "es_ES",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Florentino El Brujo Del Amor - Santero Cubano",
    },
    {
      name: "twitter:description",
      content: "Amarres de amor efectivos con Santería Cubana auténtica. Más de 320 trabajos exitosos al año.",
    },
    {
      property: "og:title",
      content: "Portal Místico - Amarres de Amor y Brujería",
    },
    {
      property: "og:description",
      content: "Tu santuario espiritual para el amor, la prosperidad y la protección. Curanderos expertos con 25+ años de experiencia.",
    },
  ],
};
