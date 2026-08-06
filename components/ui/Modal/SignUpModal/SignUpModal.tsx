'use client';

import Modal from '@/components/ui/Modal/Modal';

type Props = {
  onClose: () => void;
};

export default function SignupModal({ onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <h2>Sign Up</h2>
      <p>Signup form goes here.</p>
    </Modal>
  );
}
