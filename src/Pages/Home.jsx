import React, { useEffect, useState } from "react";
import appwriteService from "../Appwrite/config";
import { Container, PostCard } from "../Components";
import NoSignal from "../assets/NoSignal.svg";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts().then((res) => {
      if (res) setPosts(res.documents);
      setLoading(false);
    });
  }, []);

  // SkeletonCard - exact layout like PostCard
  const SkeletonCard = () => (
    <div className="bg-gray-300 animate-pulse rounded-xl overflow-hidden w-full max-w-[310px] shadow-lg h-[310px]">
      {/* Top bar */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-gray-400" />
          <div className="w-20 h-3 rounded bg-gray-400" />
        </div>
        <div className="w-6 h-6 rounded bg-gray-400" />
      </div>
      {/* Image */}
      <div className="w-full h-59 bg-gray-400" />
      {/* Title */}
      <div className="p-1">
  
        <div className="w-1/4 h-3 bg-gray-400 rounded" />
      </div>
    </div>
  );

  return (
    <div className="w-full py-8">
      <Container>
        {loading ? (
          // Skeletons - grid with exact spacing
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-10">
            <img
              src={NoSignal}
              alt="No posts yet"
              className="w-80 mx-auto object-contain"
            />
          </div>
        ) : (
          // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 justify-items-center [@media(min-width:2000px)]:[grid-template-columns:repeat(9,minmax(0,1fr))] gap-6">

            {posts.map((post) => (
              <PostCard key={post.$id} {...post} parentUsers={post.users} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;


