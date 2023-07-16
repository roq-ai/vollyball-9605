import axios from 'axios';
import queryString from 'query-string';
import { SupportStaffInterface, SupportStaffGetQueryInterface } from 'interfaces/support-staff';
import { GetQueryInterface } from '../../interfaces';

export const getSupportStaffs = async (query?: SupportStaffGetQueryInterface) => {
  const response = await axios.get(`/api/support-staffs${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createSupportStaff = async (supportStaff: SupportStaffInterface) => {
  const response = await axios.post('/api/support-staffs', supportStaff);
  return response.data;
};

export const updateSupportStaffById = async (id: string, supportStaff: SupportStaffInterface) => {
  const response = await axios.put(`/api/support-staffs/${id}`, supportStaff);
  return response.data;
};

export const getSupportStaffById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/support-staffs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSupportStaffById = async (id: string) => {
  const response = await axios.delete(`/api/support-staffs/${id}`);
  return response.data;
};
