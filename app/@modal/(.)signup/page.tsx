'use client';

import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/navigation';

export default function SignupModalPage() {
  const router = useRouter();

  const handleClose = () => {
    if (window.history.length > 1) router.back();
    else router.push('/');
  };

  return (
    <Modal onClose={handleClose}>
      <h2>Sign Up</h2>
      <p>Signup form goes here.</p>
    </Modal>
  );
}
