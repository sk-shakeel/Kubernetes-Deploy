import { User } from '@auth0/auth0-react';
import { UrlService } from '../api';
import { userDetails } from '../utils/constants';

interface UserPropsType {
  userId: string;
  username: string|undefined;
  email: string;
}

export const UserService = {
  getUsers: async () => {
    try {
      const usersData = await UrlService.get('/user/');
      return usersData.data;
    } catch (error) {
      console.log(error);
    }
  },
  getUserName: async (userName:string) => {
    try {
      const usersData = await UrlService.get(`/user/username/${userName}/`);
      return usersData.data;
    } catch (error) {
      console.log(error);
    }
  },
  postUser: async (user: UserPropsType) => {
    try {
      await UrlService.post('/user/', user);
    } catch (error) {
      console.log(error);
    }
  },
};
export let loggedUser=0;
export const Login = async(user:User|undefined) =>{
  const det = userDetails(user)
  try{
  const getUserDetails = await UserService.getUserName(det.name);
  if(getUserDetails===undefined){
    await UserService.postUser({userId:"0",username:user?.name,email:det.email})
    }
    const getUserId = await UserService.getUserName(det.name);
    loggedUser=getUserId.id;
  }
  catch (error) {
    console.log(error);
  }
}


export interface PatientProps {
  patientId: number;
  relation: string;
  name: string;
  age: number;
  gender: string;
  userId: number;
}

export const PatientService = {
  getPatients: async () => {
    try {
      const patientsData = await UrlService.get('/patients/');
      return patientsData.data;
    } catch (error) {
      console.log(error);
    }
  },
  postPatients: async (patient: PatientProps) => {
    try {
      await UrlService.post('/patients/', patient);
    } catch (error) {
      console.log(error);
    }
  },
};

export interface AppointmentProps {
  patientId: number;
  testLabId: number;
  addressId:number;
  month: string;
  day: string;
  date:string;
  time: string;
  userId:number;
}

export const AppointmentService = {
  getAppointment: async () => {
    try {
      const AppointmentData = await UrlService.get(`/appointments/user/${loggedUser}/`);
      return AppointmentData.data;
    } catch (error) {
      console.log(error);
    }
  },
  postAppointment: async (appointment: AppointmentProps) => {
    try {
      await UrlService.post('/appointments/', appointment);
    } catch (error) {}
  },
};

export interface AddressProps {
  id: number;
  userId: number;
  houseNo: string;
  area: string;
  zipcode: string;
  city: string;
}

export const AddressService = {
  getAddress: async () => {
    try {
      const AddressData = await UrlService.get('/address/');
      return AddressData.data;
    } catch (error) {}
  },
  getAddressById: async (id: number) => {
    try {
      const AddressData = await UrlService.get(`/address/${id}/`);
      return AddressData.data;
    } catch (error) {
      console.log(error);
    }
  },
  postAddress: async (address: AddressProps) => {
    try {
      await UrlService.post('/address/', address);
    } catch (error) {
      console.log(error);
    }
  },
};

export interface LabProps {
  labId:number;
  labName: string;
  rating: number;
  availableSlots:number;
}

export const LabService = {
  getLab: async () => {
    try {
      const LabData = await UrlService.get('/labs/');
      return LabData.data;
    } catch (error) {
      console.log(error);
    }
  },
};