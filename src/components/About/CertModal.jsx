import { Modal} from "react-bootstrap";

const CertModal = ({ photo, show, onHide }) => {
  return (
    <Modal centered show={show} onHide={onHide}>
      <div>
        <img className="w-100 rounded" src={photo} alt="certificate" />
      </div>
    </Modal>
  );
};

export default CertModal;
