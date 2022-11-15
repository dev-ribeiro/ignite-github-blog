import { useEffect, useState } from 'react'

interface ResponseGitHubApiDataType {
  avatar_url: string
  bio: string
  name: string
  html_url: string
  login: string
  company: string
  followers: string
}

export function useFetchUserData() {
  const [userData, setUserData] = useState<ResponseGitHubApiDataType>({
    avatar_url: '',
    bio: '',
    html_url: '',
    name: '',
    login: '',
    company: '',
    followers: '',
  })

  useEffect(() => {
    fetch('https://api.github.com/users/dev-ribeiro')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return {
    userData,
  }
}
