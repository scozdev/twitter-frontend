import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import { UserContext } from '../../context/UserContext'

import Header from '../../components/Header/Header'
import TextTitle from '../../components/Text/title'

function EditProfile() {

  const { user, setUser } = useContext(UserContext);

  const [state, setstate] = useState(null)




  return (
    <div>
      <Header border>
        <TextTitle xbold>Profile Edit</TextTitle>
      </Header>

      <TextTitle xbold>Yapım aşamasında :)</TextTitle>


    </div>
  )
}

export default EditProfile
