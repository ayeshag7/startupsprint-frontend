import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state

  useEffect(() => {
    // Fetch posts from an API or static data (simulated here)
    const fetchPosts = async () => {
      // Simulated API call (replace with actual fetch code)
      const data = [
        { id: 1, user: 'User 1', content: 'Post by User 1' },
        { id: 2, user: 'User 2', content: 'Post by User 2' },
        { id: 3, user: 'User 3', content: 'Post by User 3' },
        // Add more posts as needed
      ];

      // Simulate an API call delay
      setTimeout(() => {
        setPosts(data);
        setLoading(false);  // Set loading to false after posts are fetched
      }, 1000);  // 1 second delay
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-6">
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
              <div key={post.id} className="p-4 border rounded-lg shadow-sm">
                <h2 className="font-medium text-lg">{post.user}</h2>
                <p className="text-gray-700">{post.content}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
