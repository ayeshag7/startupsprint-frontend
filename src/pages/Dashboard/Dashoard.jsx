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
          setPosts(response.data); // Assign the data array from response
        } else {
          console.error("Error fetching posts:", response.message);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Ensure loading is false after the attempt
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-200px)]">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

      {/* Loading State */}
      {loading ? (
        <p className="text-gray-500">Loading posts...</p>
      ) : (
        <div className="space-y-4">
          {posts.length === 0 ? (
            <p className="text-gray-500">No posts available.</p>
          ) : (
            posts.map((post) => (
              <PostCard
                key={post._id} // Unique post ID
                userName={post.user.name} // User's name
                userPhoto={post.user.profilephoto} // User's profile photo
                postPhoto={post.postphoto} // Post photo
                postText={post.posttext} // Post text (caption)
                initialLikeCount={post.likecount} // Number of likes
                liked={post.liked} // Whether the post is liked by the user
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
