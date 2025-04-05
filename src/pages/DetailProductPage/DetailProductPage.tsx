import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/ui/Modal/Modal.tsx';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail.tsx';

export const DetailProductPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <ProductDetail />
    </Modal>
  );
};
