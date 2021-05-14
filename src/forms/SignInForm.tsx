import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Input, Button } from '../components/UI';
import { authFormValidationSchema } from './validations';

type FormData = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

export const SignInForm = ({ onSubmit }: Props) => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(authFormValidationSchema),
    mode: 'all',
    defaultValues: {
      email: 'test@test.com', // TODO: намеренное временное решение
      password: 'test@test.com',
    },
  });

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        ref={register}
        type="text"
        placeholder="email@email.com"
        error={errors.email?.message}
      />
      <Input
        name="password"
        ref={register}
        type="password"
        placeholder="password"
        error={errors.password?.message}
      />

      <Button btnType="success" disabled={Object.keys(errors).length > 0}>
        {t('login')}
      </Button>
    </form>
  );
};
