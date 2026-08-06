'use client';

import Modal from '@/components/ui/Modal/Modal';

type Props = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <h2>Log In</h2>
      <p>Login form goes here.</p>
    </Modal>
  );
}
