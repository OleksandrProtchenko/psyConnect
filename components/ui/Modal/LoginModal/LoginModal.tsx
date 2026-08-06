'use client';

import Modal from '@/components/ui/Modal/Modal';
import AuthForm from '../../AuthForm/AuthForm';

type Props = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <h2>Log In</h2>
      <AuthForm mode="login" onSuccess={onClose} />
    </Modal>
  );
}
