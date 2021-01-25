import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Input, Button } from 'components/UI';
import { useTranslation } from 'react-i18next';
import { contactDataValidationSchema } from './validations';

type FormData = {
  name: string;
  street: string;
  index: string;
  country: string;
  email: string;
};
type Props = {
  onSubmit: (data: FormData) => void;
};

export const ContactDataForm = ({ onSubmit }: Props): Node => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(contactDataValidationSchema),
    mode: 'all',
  });

  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>{t('contactDataForm.title')}:</h4>

      <Input
        ref={register}
        placeholder={t('contactDataForm.name')}
        name="name"
        error={errors.name?.message}
      />

      <Input
        ref={register}
        placeholder={t('contactDataForm.street')}
        name="street"
        error={errors.street?.message}
      />

      <Input
        ref={register}
        placeholder={t('contactDataForm.index')}
        name="index"
        error={errors.index?.message}
      />

      <Input
        ref={register}
        placeholder={t('contactDataForm.coutnry')}
        name="country"
        error={errors.country?.message}
      />

      <Input
        ref={register}
        placeholder={t('contactDataForm.email')}
        name="email"
        error={errors.email?.message}
      />

      <Button btnType="success">{t('contactDataForm.order')}</Button>
    </form>
  );
};
