import { useFormStatus } from 'react-dom';
import Button from '../elements/button/button';

type Props = {};

function LoginButton({}: Props) {
  const { pending } = useFormStatus();
  return <Button label="Login" type="submit" isLoading={pending} />;
}

export default LoginButton;
