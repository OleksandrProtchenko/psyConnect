'use client';

import Modal from '@/components/ui/Modal/Modal';
import AuthForm from '../../AuthForm/AuthForm';
import css from './SignUpModal.module.css';

import Link from 'next/link';

type Props = {
  onClose: () => void;
};

export default function SignUpModal({ onClose }: Props) {
  return (
    <Modal onClose={onClose}>
      <h2 className={`modalTitle ${css.signUpTitle}`}>Create an Account</h2>
      <p className={`modalDescription ${css.signUpDescription}`}>
        Join PsyConnect to save your favorite specialists and book sessions.
      </p>
      <AuthForm mode="signup" onSuccess={onClose} />
      <p className="redirectContent">
        Already have an account?{' '}
        <Link className="redirectLink" href="/?auth=login">
          Log In
        </Link>
      </p>
    </Modal>
  );
}
