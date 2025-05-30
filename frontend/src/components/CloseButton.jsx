
import "../pages/styles/CloseButton.css"

export default function CloseButton({ onClose, ariaLabel = "Fechar modal" }) {
  return (
    <button
      className="close-button"
      onClick={onClose}
      aria-label={ariaLabel}
      type="button"
    >
      ×
    </button>
  );
}
