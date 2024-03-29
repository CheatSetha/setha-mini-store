import React from "react";
import {MdAlternateEmail} from "react-icons/md"
import {FaUserAlt} from "react-icons/fa"

const UserCard = ({name, role,avatar,email,id}) => {
  return (
    <div className="card w-full md:w-[310px] dark:text-slate-300 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img 
            alt={name?name:"setha"}
            src={avatar?avatar :"https://www.looper.com/img/gallery/just-how-powerful-is-demon-slayers-nezuko/intro-1665597253.jpg" }/>
          </div>
        </div>

        <h2 className="card-title flex justify-center">{name? name : "setha"}</h2>
        <p><MdAlternateEmail className="inline"/> {email?email: "setha@gmail.com"}</p>
        <p><FaUserAlt className="inline" /> {role?role:" admin"}</p>

      </div>
    </div>
  );
};

export default UserCard;
