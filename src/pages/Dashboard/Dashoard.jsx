import React, { useEffect, useState } from 'react';
import PostCard from '../../elements/postCard/PostCard';
import postMiddleware from '../../redux/middleware/postMiddleware';
import { useDispatch } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await dispatch(postMiddleware.GetAllPosts());
        if (response.success) {
          setPosts(response.data);
        } else {
          console.error("Error fetching posts:", response.message);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-100px)] overflow-auto rounded-lg border bg-blue-50 dark:bg-yellow-100">
      {loading ? (
        <p className="text-gray-500">Loading posts...</p>
      ) : (
        <div className="space-y-4 mx-4 my-8">
          {posts.length === 0 ? (
            <p className="text-gray-500">No posts available.</p>
          ) : (
            posts.map((post) => (
              <PostCard
                key={post._id}
                userName={post.user.name}
                userPhoto={post.user.profilephoto}
                postPhoto={post.postphoto}
                postText={post.posttext}
                initialLikeCount={post.likecount}
                liked={post.liked}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
