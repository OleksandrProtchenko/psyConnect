import { AppButton } from '@/components/ui/Button/Button';
import css from './Auth.module.css';

export default function Auth() {
  return (
    <div className={css.auth}>
      <AppButton>Log In</AppButton>
      <AppButton variant="secondary">Sign Up</AppButton>
    </div>
  );
}
