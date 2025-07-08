import { useState } from 'react';

function CotizacionModal() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validar = () => {
    const nuevosErrores = {};
    if (!formData.nombre.trim()) nuevosErrores.nombre = 'Este campo es obligatorio';
    if (!formData.telefono.trim()) nuevosErrores.telefono = 'Este campo es obligatorio';
    if (!formData.mensaje.trim()) nuevosErrores.mensaje = 'Este campo es obligatorio';
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validar();
    if (Object.keys(errores).length > 0) {
      setErrors(errores);
      return;
    }

    console.log('Formulario enviado:', formData);
    setEnviado(true);
    setFormData({ nombre: '', empresa: '', telefono: '', mensaje: '' });

    setTimeout(() => {
      setEnviado(false);
      const modal = bootstrap.Modal.getInstance(document.getElementById('cotizarModal'));
      modal.hide();
    }, 2500);
  };

  return (
    <div className="modal fade" id="cotizarModal" tabIndex="-1" aria-labelledby="cotizarModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title" id="cotizarModalLabel">Solicitud de Cotización</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">

              {enviado && (
                <div className="alert alert-success text-center">
                  ¡Cotización enviada con éxito!
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                  value={formData.nombre}
                  onChange={handleChange}
                />
                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Empresa</label>
                <input
                  type="text"
                  name="empresa"
                  className="form-control"
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                  value={formData.telefono}
                  onChange={handleChange}
                />
                {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Mensaje *</label>
                <textarea
                  name="mensaje"
                  className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                  rows="3"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
                {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="submit" className="btn" style={{ backgroundColor: 'rgb(201, 66, 23)', color: '#fff' }}>
                Solicitar cotización
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CotizacionModal;
