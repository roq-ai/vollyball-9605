import * as yup from 'yup';

export const playerValidationSchema = yup.object().shape({
  profile_info: yup.string(),
  user_id: yup.string().nullable(),
});
