import RootLayout from '../layout/RootLayout';
import Home from '../pages/Home';
import PostList from '../componnets/PostList';
import PostDetail from '../pages/PostDetail';
import PostCreate from '../pages/PostCreate';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/posts',
        element: <PostList />,
      },
      {
        path: '/posts/create',
        element: <PostCreate />,
      },
      {
        path: '/posts/:postId',
        element: <PostDetail />,
      },
    ],
  },
]);
