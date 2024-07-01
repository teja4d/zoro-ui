import { useFormStatus } from 'react-dom';
import Button from '../elements/button/button';

type Props = {};

function SignUpButton({}: Props) {
  const { pending } = useFormStatus();
  return <Button label="Signup" type="submit" isLoading={pending} />;
}

export default SignUpButton;
