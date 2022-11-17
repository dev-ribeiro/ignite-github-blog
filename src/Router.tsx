import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { PostPageLayout } from './layouts/PostPageLayout'
import { Home } from './pages/Home'
import { PostPage } from './pages/PostPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/" element={<PostPageLayout />}>
        <Route path="/posts/:id" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
