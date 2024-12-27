import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StartupCard from '../../components/Startup/StartupCard';
import startupMiddleware from '../../redux/middleware/startupMiddleware';

function Startups() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Added navigate
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const response = await dispatch(startupMiddleware.GetAllStartups());
        if (response.success) {
          setStartups(response.data);
        } else {
          console.error("Error fetching startups:", response.message);
        }
      } catch (error) {
        console.error("Error fetching startups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStartups();
  }, [dispatch]);

  const handleCardClick = (startup) => {    
    navigate(`/startups/startupprofile/${startup._id}`, { state: { startup } });
  };
  
  
  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-100px)] overflow-auto rounded-lg border bg-blue-50">
      {loading ? (
        <p className="text-gray-500">Loading startups...</p>
      ) : (
        <div className="space-y-4 mt-2 mb-4">
          {startups.length === 0 ? (
            <p className="text-gray-500">No startups available.</p>
          ) : (
            startups.map((startup) => (
              <StartupCard
                key={startup._id}
                image={startup.profilephoto || 'placeholderimg'}
                name={startup.name}
                description={startup.description}
                members={12}
                valuation={startup.evaluation}
                investments={startup.funds}
                location={startup.address?.country || 'Unknown'}
                startdt={String(startup.createdAt)}
                onClick={() => handleCardClick(startup)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Startups;
