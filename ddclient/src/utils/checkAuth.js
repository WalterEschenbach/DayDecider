import axios from 'axios'
import Settings from '../config/settings'

export default async function checkAuth(){
    let authStatus = false;
    const transport = axios.create({withCredentials: true});
    const tLink = `${Settings.domain.server}/auth/verify`;

    await transport.get(tLink)
          .then((res) => {
              console.log("Auth Response:", res.data);
              if(res.data == 'authenticated'){
                  authStatus = true
              }else{
                  authStatus = false                    
              } 
          })
          .catch(err => {
            console.log(err)
          });

    return authStatus
}