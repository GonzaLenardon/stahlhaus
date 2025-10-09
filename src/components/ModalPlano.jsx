const ModalPlano = ({ src, alt, handleClose }) => {
  return (
    <div className="modal-overlay" onClick={() => handleClose(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="modal-img" />
        <button className="close-btn" onClick={() => handleClose(false)}>
          ✕
        </button>
      </div>
    </div>
  );
};
export default ModalPlano;
