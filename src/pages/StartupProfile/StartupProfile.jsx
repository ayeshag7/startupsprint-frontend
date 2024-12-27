import React, { useEffect, useState } from 'react';
import startupMiddleware from '../../redux/middleware/startupMiddleware';
import { useDispatch } from 'react-redux';
import { FaUsers, FaDollarSign, FaPiggyBank } from 'react-icons/fa';
import placeholderimg from "../../assets/placeholder-startup.jpg";
import { useDarkMode } from '../../context/DarkModeContext';
import StartupTimeline from '../../components/Startup/StartupTimeline';
import FundingTrendChart from '../../components/chart/FundingTrendChart';
import "./startupprofile.css"

function StartupProfile() {
  const dispatch = useDispatch();
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showChart, setShowChart] = useState(false); // Hover state for the chart

  const { isDarkMode } = useDarkMode();

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

  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-140px)] overflow-auto rounded-lg border bg-blue-50">
      {loading ? (
        <p className="text-gray-500">Loading startup profile...</p>
      ) : (
        <div className="mt-2 mb-4">
          <div className="flex flex-col bg-white dark:bg-gray-800 pt-12 pb-8 px-4 mx-4 rounded-lg mt-6">
            {/* First Container */}
            <div className="flex flex-row justify-between items-center">
              <div className="flex justify-start items-center gap-x-4 mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={placeholderimg}
                    alt="startup image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-y-4">
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                    EcoVerse
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    EcoVerse is a startup for creating sustainable solutions for the global waste management crisis.
                  </p>
                </div>
              </div>
              <div className="flex space-x-4 justify-end">
                <button
                  type="button"
                  className={`${
                    isDarkMode
                      ? 'text-black dark:bg-[#e7c94d] dark:hover:bg-white dark:hover:text-black bg-[#1836b2] hover:bg-[#e7c94d] hover:text-[#1836b2] hover:border-[#1836b2]'
                      : 'text-white bg-[#1836b2] hover:bg-[#e7c94d] hover:text-[#1836b2] hover:border-[#1836b2]'
                  } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center`}
                >
                  Join
                </button>
                <button
                  type="button"
                  className={`${
                    isDarkMode
                      ? 'text-black dark:bg-[#e7c94d] dark:hover:bg-white dark:hover:text-black bg-[#1836b2] hover:bg-[#e7c94d] hover:text-[#1836b2] hover:border-[#1836b2]'
                      : 'text-white bg-[#1836b2] hover:bg-[#e7c94d] hover:text-[#1836b2] hover:border-[#1836b2]'
                  } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center`}
                >
                  Invest
                </button>
              </div>
            </div>
            {/* Second Container */}
            <div className="mt-4 sm:mt-0 sm:ml-4 flex-1">
              <div className="mt-8 ml-4">
                <div className="flex items-center justify-start gap-x-16">
                  <div className="flex items-center text-sm">
                    <FaUsers className="mr-2 text-4xl text-[#1836b2] dark:text-[#e7c94d]" />
                    <span className="text-gray-800 dark:text-white font-bold">
                      12 Members
                    </span>
                  </div>
                  <div className="flex items-center">
                    <FaDollarSign className="mr-2 text-4xl text-[#1836b2] dark:text-[#e7c94d]" />
                    <span className="text-gray-800 dark:text-white">
                      Valuation: <span className="font-bold">$241M</span>
                    </span>
                  </div>
                  <div
                    className="relative flex items-center"
                    onMouseEnter={() => setShowChart(true)}
                    onMouseLeave={() => setShowChart(false)}
                  >
                    <FaPiggyBank className="mr-2 text-4xl text-[#1836b2] dark:text-[#e7c94d]" />
                    <span className="text-gray-800 dark:text-white">
                      Investments: <span className="font-bold">$8M</span>
                    </span>
                    {showChart && (
                      <div className="absolute top-[-225px] left-0 bg-white p-4 shadow-lg rounded-lg z-10">
                        <FundingTrendChart />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 mt-12">
                Timeline
              </h1>
              <StartupTimeline />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StartupProfile;
