// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./Store/store.js";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { AuthLayout, AuthPage } from "./Components/index.js";
// import AddPost from "./Pages/AddPost.jsx";
// import EditPost from "./Pages/EditPost.jsx";
// import Post from "./Pages/Posts.jsx";
// import AllPosts from "./Pages/AllPosts.jsx";
// import Home from "./Pages/Home.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <AuthLayout authentication={false}>
//         {" "}
//         <AuthPage />{" "}
//       </AuthLayout>
//     ),
//   },
//   {
//     path: "/app",
//     element: <App />,
//     children: [
//       {
//         path: "home",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <Home />{" "}
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "all-posts",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <AllPosts />{" "}
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "add-post",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <AddPost />{" "}
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "edit-post/:slug",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <EditPost />{" "}
//           </AuthLayout>
//         ),
//       },
//       { path: "post/:slug", element: <Post /> },
//     ],
//   },
// ]);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {" "}
//     <Provider store={store}>
//       {" "}
//       <RouterProvider router={router} />{" "}
//     </Provider>{" "}
//   </React.StrictMode>
// );









import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, AuthPage } from "./Components/index.js";
import AddPost from "./Pages/AddPost.jsx";
import EditPost from "./Pages/EditPost.jsx";
import Post from "./Pages/Posts.jsx";
import AllPosts from "./Pages/AllPosts.jsx";
import Home from "./Pages/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/", 
    element: (
      <AuthLayout authentication={false}>
        <AuthPage />   {/* Ye default landing page hoga */}
      </AuthLayout>
    ),
  },
  {
    path: "/", 
    element: <App />,   // Ye tumhara main layout hai
    children: [
      {
        path: "/home",
        element: (
          <AuthLayout authentication>
            <Home/>
          </AuthLayout>

        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "post/:slug",
        element: <Post />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);