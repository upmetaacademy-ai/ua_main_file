import BrochurePDF from './assets/pdfs/UPMETA_TRI_FOLD_BROCHURE.pdf';
import './Brochure.css'; // Import CSS file (optional)

function Brochue() {
  return (
    <>
      <a
        href={BrochurePDF}
        target="_blank"
        rel="noopener noreferrer"
        className="brochure-button"
      >
        View Brochure
      </a>
    </>
  );
}

export default Brochue;
