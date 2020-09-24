import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { UserContext } from '../../context/UserContext'

import Header from '../../components/Header/Header'
import TextTitle from '../../components/Text/title'
import SearchBox from '../../components/SearchBox/SearchBox'
import ThemeButton from '../../components/ThemeButton/ThemeButton'
import { client } from '../../utils'

import './EditProfile.css'

function EditProfile() {
  const history = useHistory()
  const { user, setUser } = useContext(UserContext);

  const [fullname, setFullname] = useState(user.fullname)
  const [bio, setBio] = useState(user.bio)

  const handleEdit = (e) => {
    e.preventDefault();
    if (!fullname) {
      return toast.error("The name field should not be empty");
    }

    if (!bio) {
      return toast.error("The username field should not be empty");
    }

    const body = {
      fullname: fullname,
      bio: bio,
    };

    client("/users", { method: "PUT", body })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        history.push(`/${user.username}`)
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <Header border>
        <TextTitle xbold>Profile Edit</TextTitle>
      </Header>

      <div className="edit-profile__container">

        <SearchBox value={fullname} onChange={(e) => setFullname(e.target.value)} icon={false} text="Full Name" />

        <SearchBox value={bio} onChange={(e) => setBio(e.target.value)} icon={false} text="Biyografi" />


        <ThemeButton primary onClick={handleEdit}>Güncelle</ThemeButton>
      </div>

    </div>
  )
}

export default EditProfile
