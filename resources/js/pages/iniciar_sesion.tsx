import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function IniciarSesion() {
  const [form, setForm] = useState<{ email: string; password: string }>({ email: '', password: '' });

  const handleInputChange = (field: 'email' | 'password', value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validación simple
    // Si ambos campos están vacíos, mostrar mensaje genérico
    if (!form.email.trim() && !form.password) {
      toast.error('Debes llenar todos los campos');
      return;
    }
    if (!form.email.trim()) {
      toast.error('Completa el correo electrónico');
      return;
    }
    // Validar formato básico de correo: debe incluir '@'
    if (!form.email.includes('@')) {
      toast.error('El correo debe contener @');
      return;
    }
    if (!form.password) {
      toast.error('Completa la contraseña');
      return;
    }
    // Simular éxito
    toast.success('Inicio de sesión exitoso');
    // Aquí podrías enviar al servidor
  };

  return (
    <div className='crear-cuenta-pagina'>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        :root{ --bg: #f6f8fb; --card-bg: #ffffff; --muted: #000000ff; --primary: #060357; --input-bg: #f3f6f9; --border: #e6e9ef; }
        body{ background:var(--bg); font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111827; }
  /* Usar la misma estructura y medidas que la página Crear Cuenta */
  .crear-cuenta-pagina{ display:flex; min-height:100vh; align-items:stretch; }
  .contenedor-centrado{ flex:1 1 auto; display:flex; align-items:center; justify-content:center; padding:48px 24px; }
  .caja-formulario{ width:460px; background:var(--card-bg); border-radius:10px; padding:36px 40px; box-shadow:0 8px 30px rgba(15,23,42,0.06); border:1px solid rgba(15,23,42,0.03); }
  /* Aumentar especificidad para forzar coincidencia exacta con CrearCuenta */
  .crear-cuenta-pagina .caja-formulario{ width:460px !important; max-width:460px !important }
  .crear-cuenta-pagina .caja-formulario .campo-texto,
  .crear-cuenta-pagina .caja-formulario input{ height:40px !important; padding:8px 12px !important; border-radius:6px !important; font-size:14px !important }
        .titulo-principal, .formulario-login h2 { margin:0 0 18px 0; font-size:28px; text-align:center; font-weight:600 }
        .formulario-registro, .formulario-login{ display:flex; flex-direction:column; gap:12px; margin-top:10px }
        .grupo-campo, .campo{ display:flex; flex-direction:column; gap:6px }
        .etiqueta, .campo label{ font-size:13px; color:var(--muted) }
  /* Usar exactamente las mismas reglas de 'Crear Cuenta' para que coincidan */
  .campo-texto{ height:40px; padding:8px 12px; border-radius:6px; border:1px solid var(--border); background:var(--input-bg); outline:none; transition:box-shadow .12s ease, border-color .12s ease; box-sizing:border-box }
  .campo-texto:focus{ box-shadow:0 0 0 4px rgba(6,3,87,0.06); border-color:rgba(6,3,87,0.24) }
  /* Estado cuando el campo tiene contenido: más sutil que #D9D9D9 */
  .campo-lleno{ background-color: #F3F4F6 !important; border-color: #D1D5DB !important; box-shadow: inset 0 1px 0 rgba(0,0,0,0.02); transition: background-color .12s linear, border-color .12s linear; }
  /* Asegurar que el texto dentro del input sea negro (solo el texto) */
  .caja-formulario .campo-texto,
  .caja-formulario input { color: #000000 !important; }

  /* Forzar estilo cuando el navegador aplica autofill (Chrome/Edge) */
  input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #F3F4F6 inset !important;
    box-shadow: 0 0 0px 1000px #F3F4F6 inset !important;
    -webkit-text-fill-color: #000000 !important;
    color: #000000 !important;
  }
  .campo-texto::placeholder { color: #9CA3AF }
  /* Mantener también inputs dentro de .campo con las mismas reglas */
  .campo input{ height:40px; padding:8px 12px; border-radius:6px; border:1px solid var(--border); background:var(--input-bg); box-sizing:border-box }
        .boton-crear-cuenta, .btn-login{ display:inline-block; width:100%; text-align:center; background:var(--primary); color:#fff; padding:10px 14px; border-radius:8px; border:none; cursor:pointer; font-weight:600 }
        .btn-google{ display:flex; align-items:center; gap:10px; justify-content:center; background:#fff; color:#111827; border-radius:8px; padding:10px 14px; border:1px solid var(--border); cursor:pointer; box-shadow:0 1px 0 rgba(0,0,0,0.02); position:relative; transition:background .12s ease; width:100%; height:40px; font-weight:600 }
        .btn-google:hover{ background:#f0f0f0 }
        .btn-google svg{ width:20px; height:20px; display:block }
        .btn-google[data-tooltip]::after{ content: attr(data-tooltip); position: absolute; left: 50%; transform: translateX(-50%); bottom: calc(100% + 10px); background: rgba(15,23,42,0.92); color: #fff; padding:6px 8px; font-size:12px; border-radius:6px; white-space:nowrap; opacity:0; pointer-events:none; transition:opacity .12s ease, transform .12s ease; }
        .btn-google[data-tooltip]:hover::after, .btn-google[data-tooltip]:focus::after{ opacity:1; transform: translateX(-50%) translateY(-4px); }
        .separador{ text-align:center; margin:14px 0; font-size:14px; color:var(--muted); font-weight:600 }
        .pie-formulario{ text-align:center; margin-top:12px }
        .texto-pie{ margin:0; text-align:center; color:var(--muted); font-size:13px }
        .enlace-login{ color:var(--primary); text-decoration:none; font-weight:600 }
        .error-message { color:#dc2626; margin-left:8px }
        .input-error { border-color: #dc2626 !important }
        .input-container { display:flex; align-items:center; gap:10px }
  @media (max-width:800px){ .caja-formulario{ width:100%; padding:28px; border-radius:8px } }
      `}</style>

      {/* Toaster en la parte superior, centrado horizontalmente y sin tapar el formulario */}
      <Toaster
        toastOptions={{ duration: 4000 }}
        containerStyle={{
          position: 'fixed',
          top: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          pointerEvents: 'none',
          width: 'auto',
          maxWidth: '560px',
        }}
      />

      <div className="contenedor-centrado">
        <div className="caja-formulario" style={{ width: '460px', boxSizing: 'border-box' }}>
          <h2 className="titulo-principal">Iniciar sesión</h2>

          <form className="formulario-registro formulario-login" onSubmit={handleSubmit} noValidate>
              <div className="campo">
                <label htmlFor="correo">Correo Electrónico</label>
                <div className="input-container">
                  <input
                    id="correo"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Ingresa tu Correo Electrónico"
                    className={`campo-texto ${form.email ? 'campo-lleno' : ''}`}
                    style={{
                      width: '100%',
                      height: '40px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>

            <div className="campo">
              <label htmlFor="password">Contraseña</label>
              <div className="input-container">
                <input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Ingresa tu Contraseña"
                  className={`campo-texto ${form.password ? 'campo-lleno' : ''}`}
                  style={{
                    width: '100%',
                    height: '40px',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div style={{ marginTop: 8 }}>
              <button type="submit" className="boton-crear-cuenta">Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IniciarSesion;
