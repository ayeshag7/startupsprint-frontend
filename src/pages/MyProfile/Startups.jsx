import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StartupCard from '../../components/Startup/StartupCard';
import startupMiddleware from '../../redux/middleware/startupMiddleware';
import { useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import ButtonWithIcon from '../../elements/buttonWithIcon/ButtonWithIcon';

function MyStartups() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const UserID = user._id;        
        const response = await dispatch(startupMiddleware.GetStartupsByUserID(UserID));        
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

  const handleAddStartupClick = () => {
    navigate('/addstartup');
  };
  
  return (
    <>
    <div className="flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <ButtonWithIcon
            onClick={handleAddStartupClick}
            icon={
              <div className="flex justify-center items-center w-4 h-4 rounded-full">
                <FaPlus className="text-white text-xl" />
              </div>
            }
            text="Add Startup"
            className="bg-custom-blue text-white px-3 py-2 rounded-full"
          />
        </div>
      </div>
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
                location={startup.address.country}
                startdt={String(startup.createdAt)}
              />
            ))
          )}
        </div>
      )}
    </div>
    </>
  );
}

export default MyStartups;
