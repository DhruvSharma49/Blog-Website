// import { useEffect, useState } from "react";
// import appwriteService from "../Appwrite/config";
// import { Container, PostCard, PostForm } from "../Components";
// import { Link } from "react-router-dom";

// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     appwriteService.getPosts().then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//       }
//     });
//   }, []);

//   if (posts.length === 0) {
//     return (
//       <div className="w-full py-16 flex justify-center items-center">
//         <Container>
//           <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 animate-fadeIn">
//             {/* Optional SVG Icon */}
//             <svg
//               className="w-20 h-20 text-gray-400 mb-6"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//               aria-hidden="true"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 3v18h18V3H3z"
//               />
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3 9h18M9 21V9"
//               />
//             </svg>

//             <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 text-center">
//               No Posts Yet
//             </h1>
//             <p className="text-gray-500 dark:text-gray-400 text-center mb-4">
//               Looks like there’s nothing here yet. Create your first post and
//               get started!
//             </p>
//             {/* <Link to="/app/add-post">Create post</Link> */}
//             <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300">
//                         Create Post
//                     </button>
//           </div>
//         </Container>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full py-8">
//       <Container>
//         <div className="flex flex-wrap">
//           {posts.map((post) => (
//             <div key={post.$id} className="p-2 w-1/4">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;



import React, {useEffect, useState} from 'react'
import appwriteService from "../Appwrite/config";
import {Container, PostCard} from '../Components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                        No post yet
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home