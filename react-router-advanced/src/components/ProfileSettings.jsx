import React from 'react'
import { useParams } from 'react-router-dom'

const ProfileSettings = () => {

    const { userId } = useParams()

  return (
    <div>
      settings {userId}
    </div>
  )
}

export default ProfileSettings
