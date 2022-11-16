import { Outlet } from 'react-router-dom'
import { PostInfo } from '../../components/PostInfo'

export function PostPageLayout() {
  return (
    <div>
      <PostInfo />
      <Outlet />
    </div>
  )
}
