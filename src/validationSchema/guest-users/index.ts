import * as yup from 'yup';

export const guestUserValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
