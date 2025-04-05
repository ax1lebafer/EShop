import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/ui/Modal/Modal.tsx';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail.tsx';
import styles from './DetailProductPage.module.scss';

export const DetailProductPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Modal isOpen={true} onClose={handleClose} className={styles.modal}>
      <ProductDetail />
    </Modal>
  );
};
