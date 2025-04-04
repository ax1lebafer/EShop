import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../../components/ui/Modal/Modal.tsx';

export const DetailProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Modal isOpen={true} onClose={handleClose}>
      123
    </Modal>
  );
};
