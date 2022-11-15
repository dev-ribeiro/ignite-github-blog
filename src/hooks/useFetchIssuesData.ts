import { useEffect, useState } from 'react'

interface ResponseIssuesGithubApi {
  title: string
  body: string
  created_at: string
  author_association: string
}

export function useFetchIssuesData() {
  const [postsData, setPostsData] = useState<ResponseIssuesGithubApi[]>([])

  useEffect(() => {
    fetch('https://api.github.com/repos/dev-ribeiro/ignite-github-blog/issues')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPostsData(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return {
    postsData,
  }
}
