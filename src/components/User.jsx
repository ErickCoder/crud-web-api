import React from "react";

const User = ({ user, deleteUser, changeShowModal, setIsUserToUpdate }) => {
  const handleClickDelete = () => {
    deleteUser(user.id);
  };

  const handleClickUpdate = () => {
    changeShowModal();
    setIsUserToUpdate(user);
  };

  return (
    <section className="border-2 border-[#E5E5E5] p-6">
      <article>
        <p className="text-black font-medium text-2xl pb-2">
          {user.first_name} {user.last_name}
       </p>
       <hr className="pb-2"/>
        <div>
          <p className="text-[#D3D3D3]">CORREO</p>
          <span>{user.email}</span>
        </div>
        <div>
          <p className="text-[#D3D3D3] pt-2">CUMPLEAÑOS</p>
          <span>
            <i className="bx bxs-gift mr-2"></i>
            {user.birthday || "No fecha"}
          </span>
        </div>

         <div className=" pb-4">
         <p className="text-[#D3D3D3] pt-2"> FOTO</p>
  <img className="h-20 w-30" src={user.image_url || "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"} alt="" />
</div> 
<hr className="pb-3 pt-2" />
        <section className="flex justify-end pb-0">
         
         <div>

          
         </div>
         
          <div className="bg-secundary text-white p-2 text-lg rounded pl-3 pr-3 mr-3">
        
            <button onClick={handleClickDelete}>
              <i className="bx bxs-trash"></i>
            </button>
          </div>

          <div className="bg-[#F6F6F6] border-2 border-[#BDBDBD] text-[#BDBDBD] p-2 rounded  pl-3 pr-3">
            <button onClick={handleClickUpdate}>
              <i className="bx bxs-pencil"></i>
            </button>
          </div>
        </section>
      </article>
    </section>
  );
};

export default User;
