import { axiosInstance } from '@/plugins/axios';
import { getToken } from '@/utils/utils';

axiosInstance.defaults.headers.common['x-token'] = getToken()

export async function lister(__, parm) {
  

    const skip= (parm-1)*25
    //console.log("lister else", skip)
    const res = await axiosInstance.get(`/${skip}`);
    return res.data;
    //console.log("jhbjhljhu", res)
}
export async function leng(__, ) {
  const res = await axiosInstance.get(`/`);
  //console.log("leng f", res.data[0].len)
   return res.data;
}
export async function Farm_id(__, parm) {
  const id= this.parm
  const res = await axiosInstance.get(`/id/${id}`);
  console.log("leng f", res.data[0].len)
   return res.data;
}
export async function update_farm(__, parm) {
  //console.log("jhbjhljhu", parm)
  const res = await axiosInstance.put(`/user/${parm.uid}`, {
    role: parm.role,
    name: parm.name,
  });
  return res.data;
}
export async function remove_farm(__, parm) {
  //console.log("remve", parm)
  const res = await axiosInstance.delete(`/user/${parm.uid}`);
  return res.data;
}

export async function add_farm(__, {parm,psw}) {
  //console.log("jhbjhljhu", parm,psw)
  const res = await axiosInstance.post(`/user/`, {
    role: parm.role,
    name: parm.name,
    email: parm.email,
    password: psw
  });
  return res.data;
}
