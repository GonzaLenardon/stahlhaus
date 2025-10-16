const Footer = () => (
  <footer>
    <div className="col-3">
      <div className="d-flex">
        <span className="logo-footer">SH</span>
        <div className="ms-3 d-flex flex-column justify-content-start">
          <h3 className="text-white fw-3 ">STAHLHAUS</h3>
          <span className="text-warning fw-1">Viviendas Seguras</span>
        </div>
      </div>
      <h5 className="fs-6 opacity-50">
        Proyecto, dirección y obra con foco en calidad y plazos. Atención
        personalizada de punta a punta.
      </h5>
    </div>

    <div className="col-2">
      <h2>SECCIONES</h2>

      <ul>
        <li>
          <a href="#quienessomos"> Quienes Somos</a>
        </li>
        <li>
          <a href="#comenzar">Comenzar</a>
        </li>
        <li>
          {' '}
          <a href="#modelos">Modelos</a>
        </li>
        <li>
          <a href="#preguntas">Preguntas</a>
        </li>

        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>

    <div className="col-2">
      <h2>CONTACTO</h2>
      <ul>
        <li>
          <a href="https://wa.me/5493435344028" target="_blank" rel="noopener">
            <i className="fa-brands fa-whatsapp me-2"></i>+54 9 343 534 4028
          </a>
        </li>
        <li>
          <a href="mailto:stahl.viviendas@gmail.com">
            <i className="fa-regular fa-envelope me-2"></i>
            stahl.viviendas@gmail.com
          </a>
        </li>
        <li>
          <a href="https://maps.google.com/" target="_blank" rel="noopener">
            <i className="fa-regular fa-map me-2"></i>Ver ubicación
          </a>
        </li>
      </ul>

      <div className="footer-sociales">
        <a className="footer-social" href="#" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="footer-social" href="#" aria-label="Facebook">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a className="footer-social" href="#" aria-label="YouTube">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>

    <div id="footer-atencion" className="col-2">
      <h2>ATENCIÓN</h2>
      <span>Lun a Vie 9:00–18:00</span>
      <br />
      <span>Sáb 9:00–13:00</span>
      <br />
      <span>Presupuestos sin cargo. Garantía por escrito.</span>
    </div>
  </footer>
);

export default Footer;
