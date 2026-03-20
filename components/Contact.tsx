"use client";

import { useState } from "react";
import { Send, MapPin, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    servicio: "Fotografía de Eventos",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar en caso de que HTML5 validation falle (fallback)
    if (!formData.nombre || !formData.telefono || !formData.mensaje) return;

    const phoneNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
    
    const text = `Hola, soy ${formData.nombre}.
Servicio de interés: ${formData.servicio}.
Teléfono: ${formData.telefono}.

Mensaje:
${formData.mensaje}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-24 bg-cb-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info de contacto */}
          <div>
            <span className="text-cb-purple font-semibold tracking-wider uppercase text-sm">
              Contectemos
            </span>
            <h2 className="font-arsenica text-4xl md:text-5xl font-bold text-cb-navy mt-4 mb-6">
              ¿Listo para crear algo increíble?
            </h2>
            <p className="text-lg text-cb-dark/80 mb-10">
              Escríbenos para agendar una sesión, pedir una cotización o simplemente saludar. Estamos aquí para darle vida a tus ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cb-lavender-light/50 rounded-full flex items-center justify-center text-cb-purple">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cb-dark/60">WhatsApp</p>
                  <p className="font-medium text-cb-navy">+{process.env.NEXT_PUBLIC_WA_NUMBER}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cb-lavender-light/50 rounded-full flex items-center justify-center text-cb-purple">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cb-dark/60">Email</p>
                  <p className="font-medium text-cb-navy">hola@creatibros.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cb-lavender-light/50 rounded-full flex items-center justify-center text-cb-purple">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cb-dark/60">Ubicación</p>
                  <p className="font-medium text-cb-navy">Colombia / Disponible para viajes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-cb-lavender-light/10 p-8 rounded-2xl border border-cb-lavender-light/30 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-cb-dark mb-2">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-cb-lavender-light focus:border-cb-purple focus:ring-2 focus:ring-cb-purple/20 outline-none transition-all bg-cb-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-cb-dark mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cb-lavender-light focus:border-cb-purple focus:ring-2 focus:ring-cb-purple/20 outline-none transition-all bg-cb-white"
                    placeholder="+57..."
                  />
                </div>
                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium text-cb-dark mb-2">Servicio de interés</label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-cb-lavender-light focus:border-cb-purple focus:ring-2 focus:ring-cb-purple/20 outline-none transition-all bg-cb-white"
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
                <label htmlFor="mensaje" className="block text-sm font-medium text-cb-dark mb-2">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-cb-lavender-light focus:border-cb-purple focus:ring-2 focus:ring-cb-purple/20 outline-none transition-all resize-none bg-cb-white"
                  placeholder="Cuéntanos un poco sobre lo que necesitas..."
                ></textarea>
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
