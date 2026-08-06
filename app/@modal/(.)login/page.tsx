'use client';

import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/navigation';

export default function LoginModalPage() {
  const router = useRouter();

  const handleClose = () => {
    if (window.history.length > 1) router.back();
    else router.push('/');
  };

  return (
    <Modal onClose={handleClose}>
      <h2>Log In</h2>
      <p>Login form goes here.</p>
    </Modal>
  );
}
