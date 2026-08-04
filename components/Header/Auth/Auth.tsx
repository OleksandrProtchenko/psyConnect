import { AppButton } from '@/components/ui/Button/Button';

export default function Auth() {
  return (
    <div className="auth">
      <AppButton>Log In</AppButton>
      <AppButton variant="secondary">Sign Up</AppButton>
    </div>
  );
}
