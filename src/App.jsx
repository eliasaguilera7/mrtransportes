import React, { useState, useEffect } from 'react';
import {
  Truck, // restore this import
  ShieldCheck, MapPin, Phone, Mail, Clock, ChevronRight, Menu, X,
  Globe, Navigation, Monitor, Package, CheckCircle2, Anchor,
  FileText, Star, Users, Shield, ThermometerSnowflake,
  Droplets, AlertTriangle, Box, Eye, Radar, Map as MapIcon
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Colores corporativos extraídos del logo
  const colors = {
    orange: '#F47321', // Naranja Logo
    navy: '#1D1D5B',   // Azul Marino Logo
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set favicon, title and meta description
    const faviconHref = '/favicon.png';
    const title = 'Transporte terrestre nacional e internacional';
    const description = 'Servicio de transporte terrestre nacional e internacional con logística segura, puntual y profesional.';

    document.title = title;

    let link = document.querySelector("link[rel='icon']");
    let createdIcon = false;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      createdIcon = true;
      document.head.appendChild(link);
    }
    link.href = faviconHref;

    let meta = document.querySelector("meta[name='description']");
    let createdMeta = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      createdMeta = true;
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    return () => {
      if (createdIcon && link && link.parentNode) link.parentNode.removeChild(link);
      if (createdMeta && meta && meta.parentNode) meta.parentNode.removeChild(meta);
    };
  }, []);

  const countries = [
    { name: 'Paraguay', flag: '🇵🇾', desc: 'Sede Central y rutas nacionales' },
    { name: 'Argentina', flag: '🇦🇷', desc: 'Conexión diaria' },
    { name: 'Brasil', flag: '🇧🇷', desc: 'Rutas logísticas principales' },
    { name: 'Uruguay', flag: '🇺🇾', desc: 'Transporte internacional' },
    { name: 'Bolivia', flag: '🇧🇴', desc: 'Rutas andinas seguras' },
    { name: 'Perú', flag: '🇵🇪', desc: 'Llegada a costa y sierra' },
    { name: 'Chile', flag: '🇨🇱', desc: 'Nuevas rutas transandinas' },
  ];

  const services = [
    {
      title: 'Tanques Cisternas',
      desc: 'Unidades especializadas para el transporte de cargas líquidas y sustancias peligrosas.',
      icon: <img src="/images/tanquescisternas.png" alt="Tanques Cisternas" className="w-[80px] h-[80px] object-contain" />
    },
    {
      title: 'Semis Abiertas',
      desc: 'Ideales para cargas generales, maquinaria y productos de gran volumen.',
      icon: <img src="/images/semisabiertas.png" alt="Semis Abiertas" className="w-[100px] h-[100px] object-contain" />
    },
    {
      title: 'Cargas Refrigeradas',
      desc: 'Transporte con temperatura controlada para alimentos y medicamentos.',
      icon: <img src="/images/cargasrefrigeradas.png" alt="Cargas Refrigeradas" className="w-[80px] h-[80px] object-contain" />
    },
    {
      title: 'Cargas Especiales',
      desc: 'Logística para muebles, vehículos y mercaderías delicadas.',
      icon: <img src="/images/cargasespeciales.png" alt="Cargas Especiales" className="w-[80px] h-[80px] object-contain" />
    }
  ];

  const cargoTypes = [
    {
      title: 'CARGAS GENERALES',
      items: ['Muebles', 'Vehículos', 'Mercaderías'],
      icon: <Package className="w-12 h-12" />
    },
    {
      title: 'CARGAS REFRIGERADAS',
      items: ['Alimentos', 'Medicamentos', 'Lácteos'],
      icon: <ThermometerSnowflake className="w-12 h-12" />
    },
    {
      title: 'CARGAS LÍQUIDAS',
      items: ['Bebidas', 'Medicamentos etc.'],
      icon: <Droplets className="w-12 h-12" />
    },
    {
      title: 'SUSTANCIAS Y CARGAS PELIGROSAS',
      items: ['Insecticidas', 'Medicamentos etc.'],
      icon: <AlertTriangle className="w-12 h-12" />
    }
  ];

  const values = [
    { title: 'Responsabilidad', desc: 'Cumplimos cada compromiso asumido.', icon: <CheckCircle2 size={20}/> },
    { title: 'Transparencia', desc: 'Operamos con claridad y legalidad.', icon: <Monitor size={20}/> },
    { title: 'Compromiso', desc: 'Cuidamos la carga como propia.', icon: <Users size={20}/> },
    { title: 'Profesionalismo', desc: 'Bajo normas internacionales.', icon: <Star size={20}/> },
    { title: 'Seguridad', desc: 'Protección de carga y personas.', icon: <Shield size={20}/> },
    { title: 'Confianza', desc: 'Relaciones duraderas.', icon: <Users size={20}/> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-[#1D1D5B]/60 backdrop-blur-sm h-14">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/images/mrlogosvg.png" alt="MR Transportes Logo" className="h-[140px] w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-6">
            {['Inicio', 'Servicios', 'Rutas', 'Nosotros', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-bold transition-colors text-white hover:text-orange-300"
              >
                {item}
              </a>
            ))}
            <a href="#cotizar" className="bg-[#F47321] text-white px-6 py-2 rounded-xl font-black text-xs hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
              COTIZAR
            </a>
          </div>

          <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D5B] via-[#1D1D5B]/70 to-transparent z-10" />
          <img 
            src="/images/banner1.png" 
            alt="Flota MR" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-white">
          {/* Changed: moved logo to the right of the text (flex container) */}
          <div className="flex items-center justify-between gap-8 md:gap-12">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-6 tracking-tighter">
                SOLUCIONES <br />
                <span className="text-[#F47321]">LOGÍSTICAS</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 max-w-xl font-medium">
                Transporte terrestre nacional e internacional con más de 5 años de experiencia y flota propia monitoreada 24/7.
              </p>
              <a href="#cotizar" className="inline-flex items-center gap-3 bg-[#F47321] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/40">
                COTIZAR CARGA <ChevronRight size={24} />
              </a>
            </div>

            {/* Logo positioned on the right side */}
            <img
              src="/images/mrlogosvg.png"
              alt="MR Transportes"
              className="pointer-events-none opacity-40 w-[160px] md:w-[220px] lg:w-[980px] h-auto object-contain hidden md:block"
            />
          </div>
        </div>
      </section>

      {/* Sección 1: Servicios / Flota */}
      <section id="servicios" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-[#F47321] font-black uppercase tracking-widest text-sm mb-4">Nuestra Flota</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#1D1D5B] leading-none">Equipamiento de alta capacidad</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-28 h-28 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  {s.icon}
                </div>
                <h4 className="text-xl font-black mb-3 text-[#1D1D5B]">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nueva Sección: Nuestra Flota (Galería) */}
      <section id="nuestra-flota" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-[#F47321] font-black uppercase tracking-widest text-sm mb-4">Nuestra Flota</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#1D1D5B] leading-none">Conozca nuestros camiones</h3>
            <p className="mt-4 text-gray-600 font-medium">Fotografías reales de nuestra flota operativa.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <img src="/images/camiones1.png" alt="Camión MR Transportes 1" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <img src="/images/camiones2.png" alt="Camión MR Transportes 2" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <img src="/images/camiones3.png" alt="Camión MR Transportes 3" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Transportamos todo tipo de cargas */}
      <section id="cargas" className="relative py-24 overflow-hidden bg-[#1D1D5B]">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=80" 
            alt="Fondo Depósito" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter uppercase">
              TRANSPORTAMOS <span className="text-[#F47321]">TODO TIPO DE CARGAS....</span>
            </h2>
            <div className="h-1.5 w-32 bg-[#F47321] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cargoTypes.map((cargo, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-10 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:border-[#F47321] transition-all group">
                <div className="mb-6 text-[#F47321] group-hover:scale-110 transition-transform">
                  {cargo.icon}
                </div>
                <h4 className="text-xl font-black mb-8 tracking-tight min-h-[3rem] flex items-center">
                  {cargo.title}
                </h4>
                <ul className="space-y-3 text-gray-300 font-bold text-xs">
                  {cargo.items.map((item, i) => (
                    <li key={i} className="uppercase tracking-widest flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#F47321] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN NUEVA: Rutas Internacionales y Países (Mapa) */}
      <section id="rutas" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="mb-10">
                <h2 className="text-[#F47321] font-black uppercase tracking-widest text-sm mb-4">Alcance Regional</h2>
                <h3 className="text-4xl md:text-5xl font-black text-[#1D1D5B] leading-tight uppercase">
                  EXPERIENCIA EN <br />
                  <span className="text-[#F47321]">VARIOS PAÍSES</span>
                </h3>
                <p className="mt-6 text-gray-600 font-medium leading-relaxed">
                  Además de la alta experiencia en fletes nacionales para todas las regiones de Paraguay, MR Transportes cuenta con años de trabajo en el transporte internacional a los principales países de América Latina.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {countries.map((c, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3 hover:border-[#F47321] transition-all group">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{c.flag}</span>
                    <span className="font-bold text-[#1D1D5B] text-sm">{c.name}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-[#1D1D5B] rounded-3xl text-white">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-[#F47321] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapIcon size={24} />
                  </div>
                  <p className="text-sm font-medium">
                    Somos pioneros en la apertura de nuevas rutas de acceso, optimizando tiempos y costos para su mercadería.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              {/* Replaced SVG map and floating flags with static image */}
              <img
                src="/images/sudamerica.png"
                alt="Mapa de Sudamérica - Rutas MR Transportes"
                className="w-full max-w-2xl h-auto drop-shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección Seguridad */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="bg-[#1D1D5B] rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4 translate-x-1/4">
              <ShieldCheck size={600} />
            </div>
            
            <div className="relative z-10">
              <div className="mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                  NUESTRAS UNIDADES <span className="text-[#F47321]">CUENTAN CON:</span>
                </h2>
                <div className="h-1.5 w-24 bg-[#F47321] rounded-full"></div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12">
                {/* Rastreo Satelital */}
                <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-16 h-16 bg-[#F47321] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <Radar className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-[#F47321]">Rastreo Satelital</h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    A través del servicio de rastreo satelital garantizamos el conocimiento de la ubicación de su carga sin importar donde se encuentre.
                  </p>
                </div>

                {/* Monitoreo */}
                <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-16 h-16 bg-[#F47321] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <Monitor className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-[#F47321]">Monitoreo</h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    Además, con el servicio de monitoreo, usted podrá saber con precisión el recorrido realizado por la misma en el momento que lo precise.
                  </p>
                </div>

                {/* Resguardo y Custodia */}
                <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-16 h-16 bg-[#F47321] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-[#F47321]">Resguardo y Custodia</h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    También contamos con el servicio de resguardo y/o custodias de cargas especiales para garantizar su seguridad y brindarle tranquilidad.
                  </p>
                </div>
              </div>

              {/* Distintivos adicionales */}
              <div className="mt-16 flex flex-wrap gap-8 justify-center opacity-50 grayscale">
                <div className="flex items-center gap-2 font-black italic border-r border-white/20 pr-8 uppercase tracking-widest text-xs">Normativa IMO</div>
                <div className="flex items-center gap-2 font-black italic border-r border-white/20 pr-8 uppercase tracking-widest text-xs">Carga Segura</div>
                <div className="flex items-center gap-2 font-black italic uppercase tracking-widest text-xs">Trazabilidad Total</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Certificaciones y Permisos */}
      <section id="certificaciones" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-[#F47321] font-black uppercase tracking-widest text-sm mb-3">Certificaciones y Permisos</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#1D1D5B] leading-tight">Avales y habilitaciones</h3>
            <p className="mt-4 text-gray-600 font-medium">Cumplimos con normativas internacionales y nacionales para transporte seguro.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* IMO */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-50 flex items-center justify-center mb-6">
                <img src="/images/imo.png" alt="IMO" className="w-16 h-16 object-contain" />
              </div>
              <h4 className="font-black text-[#1D1D5B] mb-2">IMO</h4>
              <p className="text-sm text-gray-600 font-medium">
                Certificación para el transporte de productos peligrosos (IMO).
              </p>
            </div>

            {/* SENAVE */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-50 flex items-center justify-center mb-6">
                <img src="/images/senave.png" alt="SENAVE" className="w-16 h-16 object-contain" />
              </div>
              <h4 className="font-black text-[#1D1D5B] mb-2">SENAVE</h4>
              <p className="text-sm text-gray-600 font-medium">
                Certificación SENAVE para el transporte de agroquímicos.
              </p>
            </div>

            {/* SEDRONAR */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-50 flex items-center justify-center mb-6">
                <img src="/images/sedronar.png" alt="SEDRONAR" className="w-16 h-16 object-contain" />
              </div>
              <h4 className="font-black text-[#1D1D5B] mb-2">SEDRONAR</h4>
              <p className="text-sm text-gray-600 font-medium">
                Certificación de SEDRONAR (Argentina) para transporte de materiales químicos y peligrosos.
              </p>
            </div>

            {/* Permisos Internacionales */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-50 flex items-center justify-center mb-6">
                <img src="/images/permisos.png" alt="Permisos" className="w-16 h-16 object-contain" />
              </div>
              <h4 className="font-black text-[#1D1D5B] mb-2">Permisos</h4>
              <p className="text-sm text-gray-600 font-medium">
                Permisos Internacionales necesarios para transportar cargas en todos los países donde operamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-12 rounded-[3.5rem] shadow-sm border-l-8 border-[#F47321]">
              <h4 className="text-3xl font-black text-[#1D1D5B] mb-6 flex items-center gap-3">
                <Globe className="text-[#F47321]" /> Misión
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed font-medium italic">
                "Brindar servicios de transporte terrestre nacional e internacional de manera segura, eficiente y responsable, ofreciendo soluciones logísticas integrales que cumplan con las normativas vigentes y generen confianza a nuestros clientes, aliados y autoridades de control."
              </p>
            </div>
            <div className="bg-[#1D1D5B] p-12 rounded-[3.5rem] shadow-xl text-white border-l-8 border-[#F47321]">
              <h4 className="text-3xl font-black mb-6 flex items-center gap-3 text-[#F47321]">
                <Eye className="text-[#F47321]" /> Visión
              </h4>
              <p className="text-orange-50 text-lg leading-relaxed font-medium italic">
                "Consolidarnos como una empresa referente en transporte y gestión logística internacional dentro del Mercosur, reconocida por su seriedad, cumplimiento documental, calidad operativa y capacidad de adaptación a las necesidades del comercio exterior."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((v, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-[#F47321] flex justify-center mb-3">{v.icon}</div>
                <h5 className="font-black text-[#1D1D5B] text-[10px] uppercase tracking-tighter">{v.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Nueva Sección: Nuestras Instalaciones */}
      <section id="instalaciones" className="bg-[#1D1D5B]">
        {/* Video hero */}
        <div className="relative overflow-hidden">
          <video
            className="w-full h-[70vh] md:h-[80vh] object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/images/nuestrasinstalaciones.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>

          {/* Brand overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D5B]/85 via-[#1D1D5B]/55 to-transparent" />
          <div className="absolute inset-0 bg-[#F47321]/10 mix-blend-overlay" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <h2 className="text-[#F47321] font-black uppercase tracking-widest text-sm mb-4">
                Nuestras Instalaciones
              </h2>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-none">
                Infraestructura y ubicación
              </h3>
              <p className="mt-5 text-white/85 font-medium max-w-2xl">
                Conozca nuestras instalaciones y nuestra ubicación estratégica.
              </p>
              
              {/* Added address */}
              <div className="mt-6 flex items-center gap-3 text-white/90">
                <MapPin className="text-[#F47321]" />
                <span className="font-bold text-lg">Ruta PY 01 km 13.5, San Antonio, Paraguay.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white">
          <div className="container mx-auto px-6 py-12">
            <div className="rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                title="MR Transportes - Ubicación"
                className="w-full h-[360px] md:h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=HFJ6%2B78P%20San%20Antonio&z=17&output=embed"
              />
            </div>
          </div>
        </div>
      </section>

            {/* Cotizar */}
            <section id="cotizar" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[4rem] overflow-hidden shadow-3xl border border-gray-100 flex flex-col md:flex-row">
            <div className="bg-[#F47321] p-12 md:w-2/5 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-black mb-6 leading-tight">Solicite un Presupuesto</h3>
                <p className="font-bold opacity-90 italic text-lg">Su carga en manos de expertos.</p>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl mt-8 shadow-inner">
                <Phone size={24} />
                <span className="font-black text-xl">+595 987 457384</span>
              </div>
            </div>
            <form className="p-12 md:w-3/5 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" className="w-full bg-gray-50 rounded-2xl p-5 font-bold focus:ring-2 focus:ring-[#F47321] outline-none" placeholder="Nombre" />
                <input type="email" className="w-full bg-gray-50 rounded-2xl p-5 font-bold focus:ring-2 focus:ring-[#F47321] outline-none" placeholder="Email" />
              </div>
              <textarea rows="3" className="w-full bg-gray-50 rounded-2xl p-5 font-bold focus:ring-2 focus:ring-[#F47321] outline-none" placeholder="Detalle su carga y ruta..."></textarea>
              <a
                href="https://wa.me/595987457384"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#F47321] text-white font-black py-6 rounded-2xl hover:bg-orange-600 transition-all text-xl shadow-xl shadow-orange-500/30"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6 object-contain"
                />
                QUIERO UNA COTIZACIÓN
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-[#1D1D5B] text-white pt-24 pb-12 overflow-x-hidden">
        {/* Changed: reverted to standard container to use full width available, added padding */}
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* NEW: Centered independent logo at the top of footer */}
          <div className="flex justify-center mb-16">
            <img
              src="/images/mrlogosvg.png"
              alt="MR Transportes Logo"
              className="w-[200px] h-auto object-contain"
            />
          </div>

          {/* Changed: Grid used 50/50 split which looked narrow. Switched to Flex + Justify Between to push content to edges */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-20 border-b border-white/5 pb-16">
            <div className="lg:max-w-xl">
              {/* Just text and flags now, logo moved up */}
              <div>
                <p className="opacity-60 leading-relaxed mb-6 text-sm text-justify">
                  Conectando fronteras con agilidad, legalidad y seguridad. Líderes en transporte de malta y productos químicos en el Mercosur.
                </p>
                <div className="flex flex-wrap gap-4 text-2xl">
                  {countries.map((c, i) => (
                    <span key={i} title={c.name} className="transition-all cursor-default">
                      {c.flag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 min-w-max">
              <h5 className="text-[#F47321] font-black uppercase tracking-widest text-xs">Contacto Directo</h5>
              <div className="flex gap-4 font-bold text-sm italic"><MapPin className="text-[#F47321] shrink-0" size={18}/> <p>Ruta PY 01 km 13.5, San Antonio, Paraguay.</p></div>
              <div className="flex gap-4 font-bold text-sm"><Mail className="text-[#F47321] shrink-0" size={18}/> <p>admin@mrtransporteseas.com</p></div>
              <div className="flex gap-4 font-bold text-sm"><Phone className="text-[#F47321] shrink-0" size={18}/> <p>+595 987 457384</p></div>
            </div>
          </div>

          <div className="text-center text-[10px] uppercase font-black tracking-widest text-gray-500">
            © {new Date().getFullYear()} MR TRANSPORTES EAS. COMPROMISO EN CADA KILÓMETRO.
          </div>

          <div className="mt-3 text-center text-[10px] font-bold tracking-widest text-gray-500">
            Desarrollado por{' '}
            <a
              href="https://tuwebpy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F47321] hover:text-orange-300 transition-colors"
            >
              TuWebPy
            </a>
            .
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/595987457384"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 right-6 md:bottom-12 md:right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white w-12 h-12 rounded-full shadow-xl shadow-green-500/30 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6 object-contain"
        />
      </a>
    </div>
  );
};

export default App;
