import React from 'react';

const Footer = () => (
  <footer id="contact" className="container-footer">
    <div className="text-center">
      <p className="text-lg">¿Listo para tu casa propia?</p>
      <p className="mt-4">
        <a href="tel:08005558558" className="text-yellow-400">
          0800-555-8558
        </a>
      </p>
      <p className="mt-2">
        Email:{' '}
        <a
          href="mailto:info@viviendastecnohouse.com.ar"
          className="text-yellow-400"
        >
          info@viviendastecnohouse.com.ar
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
