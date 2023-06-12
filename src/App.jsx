import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";

import axios from "axios";
import swal from "sweetalert";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import Footer from "./components/Footer";

const BASE_URL = "https://users-crud.academlo.tech";

const DEFAULT_VALUES={
  birthday:"",
  first_name:"",
  last_name:"",
  email:"",
  password:"",
  "image_url":"",
}

function App() {
  const [isUserToUpdate, setIsUserToUpdate] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([])

  const changeShowModal = () => setIsShowModal(!isShowModal);

  const getAllUsers = () => {
    const url = BASE_URL + "/users/";

    axios
      .get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (data,reset) => {
    const url = BASE_URL + "/users/";

    axios
      .post(url, data)
      .then(()=>{
        getAllUsers()
        resetModalForm(reset)
        changeShowModal()
        showAlertUserCreated()
      })
      .catch(() =>{
      }) ;
   
  };


    const resetModalForm = (reset) => {
      setIsShowModal(false);
      reset(DEFAULT_VALUES)
      setIsUserToUpdate(null)
    }

    const deleteUser=(id)=>{
      const url = BASE_URL + `/users/${id}/`;

      axios
      .delete(url)
      swal({
        title: 'Eliminar',
        text: "¿Estás seguro que deseas eliminar este usuario?",
        icon: "warning",
        buttons: ["No", "Sí"],
      }).then(res=>{
        if(res){
          getAllUsers()
          swal({
            text: "Usuario eliminado con éxito",
            icon: "success",
        
        })
        
        }else{
          swal({
            text: "Usuario no eliminado",
            icon: "error",
        
        })
        }
      })
      .catch((err) => console.log(err));
    }

    const updateUser = (data, reset) => {
      const url = BASE_URL + `/users/${isUserToUpdate.id}/`;

      axios.patch(url,data)
      .then(()=>{
        getAllUsers()
        resetModalForm(reset)
        showEditUserAlertSucces()
      })
      .catch((err) => console.log(err));
    }


    const showAlertUserCreated =()=>{
      swal({
        title: '¡Bien hecho! Has logrado crear tu usuario con éxito.',
        icon: "success",
        button: 'Ok',
        
       
      })
    }

    const showAlertCancel =()=>{
      swal({
        title: '¡Acción cancelada!',
        icon: "error",
        button: 'Ok',
        
       
      })
    }

    const showEditUserAlertSucces = () => {
      swal({
        title: 'Usuario editado con éxito',
        icon: "success",
        button: 'OK',
      })
    }




  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className='font-["Roboto"] '>
      <Header changeShowModal={changeShowModal} />
      <UserForm
        isShowModal={isShowModal}
        createUser={createUser}
        isUserToUpdate={isUserToUpdate}
        updateUser={updateUser}
        resetModalForm={ resetModalForm}
        showAlertCancel={showAlertCancel}
      />

      <UserList 
      users={users} 
      deleteUser={deleteUser} 
      changeShowModal={changeShowModal}
        setIsUserToUpdate={setIsUserToUpdate}
        
      />

      <Footer/>
    </main>
  );
}

export default App;
