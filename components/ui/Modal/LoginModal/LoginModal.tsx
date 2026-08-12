'use client';

import Modal from '@/components/ui/Modal/Modal';
import AuthForm from '../../AuthForm/AuthForm';
import css from './LoginModal.module.css';
import Link from 'next/link';
type Props = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <h2 className="modalTitle">Welcome Back</h2>
      <p className="modalDescription">
        Log in to access your favorites and bookings.
      </p>
      <AuthForm mode="login" onSuccess={onClose} />
      <p className="redirectContent">
        Don&apos;t have an account?{' '}
        <Link className="redirectLink" href="/?auth=signup">
          Sign Up
        </Link>
      </p>
    </Modal>
  );
}
