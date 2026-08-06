'use client';

import Modal from '@/components/ui/Modal/Modal';
import AuthForm from '../../AuthForm/AuthForm';

type Props = {
  onClose: () => void;
};

export default function SignupModal({ onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <h2>Sign Up</h2>
      <AuthForm mode="signup" onSuccess={onClose} />
    </Modal>
  );
}
