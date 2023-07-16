import * as yup from 'yup';

export const supportStaffValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
