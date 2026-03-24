"use client";

import { useState } from "react";
import { Send, MapPin, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    indicativo: "+57",
    servicio: "Fotografía de Eventos",
    mensaje: "",
  });
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const countryCodes = [
    { code: "+1", country: "US" },
    { code: "+34", country: "ES" },
    { code: "+51", country: "PE" },
    { code: "+52", country: "MX" },
    { code: "+54", country: "AR" },
    { code: "+56", country: "CL" },
    { code: "+57", country: "CO" },
    { code: "+58", country: "VE" },
    { code: "+593", country: "EC" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === "nombre") {
      // Permitir solo letras, espacios y caracteres con tildes comunes, rechazando números y símbolos
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(value)) return;
      // Validar longitud mínima
      setNameError(value.trim().length > 0 && value.trim().length < 3);
    }

    if (name === "telefono") {
      // Solo permitir números
      if (!/^\d*$/.test(value)) return;
      // Validar longitud mínima
      setPhoneError(value.length > 0 && value.length < 7);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar en caso de que HTML5 validation falle (fallback)
    if (!formData.nombre.trim() || !formData.telefono || !formData.mensaje.trim()) return;

    if (formData.telefono.length < 7 || formData.nombre.trim().length < 3) {
      setPhoneError(formData.telefono.length < 7);
      setNameError(formData.nombre.trim().length < 3);
      return;
    }

    const phoneNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
    
    const text = `Hola, soy ${formData.nombre}.
Servicio de interés: ${formData.servicio}.
Teléfono: ${formData.indicativo} ${formData.telefono}.

Mensaje:
${formData.mensaje}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-cb-white dark:bg-cb-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info de contacto */}
          <div>
            <span className="text-cb-purple font-semibold tracking-wider uppercase text-sm">
              Contáctanos
            </span>
            <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-dark dark:text-cb-white mt-4 mb-6">
              ¿Listo para crear algo increíble?
            </h2>
            <p className="text-lg text-cb-dark dark:text-cb-white/80 mb-10">
              Escríbenos para agendar una sesión, pedir una cotización o simplemente saludar. Estamos aquí para darle vida a tus ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cb-lavender-light/50 dark:bg-cb-white/5 rounded-full flex items-center justify-center text-cb-purple">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cb-dark/60 dark:text-cb-white/60">WhatsApp</p>
                  <p className="font-medium text-cb-dark dark:text-cb-white">+{process.env.NEXT_PUBLIC_WA_NUMBER}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cb-lavender-light/50 dark:bg-cb-white/5 rounded-full flex items-center justify-center text-cb-purple">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cb-dark/60 dark:text-cb-white/60">Email</p>
                  <p className="font-medium text-cb-dark dark:text-cb-white">creatibros.co@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cb-lavender-light/50 dark:bg-cb-white/5 rounded-full flex items-center justify-center text-cb-purple">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cb-dark/60 dark:text-cb-white/60">Ubicación</p>
                  <p className="font-medium text-cb-dark dark:text-cb-white">Colombia / Disponible para viajes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white/60 dark:bg-cb-white/5 p-8 rounded-2xl border border-cb-lavender-light/30 dark:border-cb-white/10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-cb-dark dark:text-cb-white mb-2">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition-all bg-cb-white dark:bg-cb-dark dark:text-cb-white ${
                    nameError 
                      ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                      : "border-cb-lavender-light dark:border-cb-white/20 focus:border-cb-purple focus:ring-2 focus:ring-cb-purple/20"
                  }`}
                  placeholder="Tu nombre"
                />
                {nameError && (
                  <p className="text-xs text-red-500 mt-1">
                    Ingresa un nombre válido (solo letras, min. 3 caracteres)
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-cb-dark dark:text-cb-white mb-2">Teléfono *</label>
                  <div className="flex gap-2 relative">
                    <select
                      name="indicativo"
                      value={formData.indicativo}
                      onChange={handleChange}
                      className="w-[100px] px-2 py-3 rounded-lg border border-cb-lavender-light dark:border-cb-white/20 focus:border-cb-purple focus:ring-2 focus:ring-cb-purple/20 outline-none transition-all bg-cb-white dark:bg-cb-dark dark:text-cb-white text-sm cursor-pointer"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.country} ({c.code})
                        </option>
                      ))}
                    </select>
                    <div className="flex-1">
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border outline-none transition-all bg-cb-white dark:bg-cb-dark dark:text-cb-white ${
                          phoneError 
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20" 
                            : "border-cb-lavender-light dark:border-cb-white/20 focus:border-cb-purple focus:ring-2 focus:ring-cb-purple/20"
                        }`}
                        placeholder="3001234567"
                      />
                    </div>
                  </div>
                  {phoneError && (
                    <p className="text-xs text-red-500 mt-1">
                      Ingresa un número válido (min. 7 dígitos)
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-cb-dark dark:text-cb-white mb-2">Servicio de interés</label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cb-lavender-light dark:border-cb-white/20 focus:border-cb-purple focus:ring-2 focus:ring-cb-purple/20 outline-none transition-all bg-cb-white dark:bg-cb-dark dark:text-cb-white"
                  >
                    <option value="Fotografía de Eventos">Fotografía de Eventos</option>
                    <option value="Producción de Video">Producción de Video</option>
                    <option value="Retrato Corporativo">Retrato Corporativo</option>
                    <option value="Fotografía Comercial">Fotografía Comercial</option>
                    <option value="Otro">Otro proyecto</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-cb-dark dark:text-cb-white mb-2">Mensaje *</label>
                <div className="relative">
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    maxLength={300}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cb-lavender-light dark:border-cb-white/20 focus:border-cb-purple focus:ring-2 focus:ring-cb-purple/20 outline-none transition-all resize-none bg-cb-white dark:bg-cb-dark dark:text-cb-white"
                    placeholder="Cuéntanos un poco sobre lo que necesitas..."
                  ></textarea>
                  <p className={`text-xs mt-1 text-right ${formData.mensaje.length >= 300 ? 'text-red-500 font-medium' : 'text-cb-dark/60 dark:text-cb-white/50'}`}>
                    {formData.mensaje.length}/300
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 bg-cb-purple hover:bg-cb-navy text-cb-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Enviar por WhatsApp
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
