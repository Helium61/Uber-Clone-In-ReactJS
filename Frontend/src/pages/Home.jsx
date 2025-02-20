import { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";
import ErrorBoundary from "../components/ErrorBoundary";

const LocationSearchPanel = ({ setVehiclePanel }) => {
  const locations = [
    "24B, Near Kapoor cafe, sheriyans coding school",
    "242B, Near Kapoor cafe, sheriyans coding school",
    "24B, Near Kapoor cafe, sheriyans coding schoolllll",
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div
          onClick={() => setVehiclePanel(true)}
          key={index}
          className="flex items-center justify-start mt-6 space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
        >
          <i className="ri-map-pin-line text-4xl text-blue-900"></i>
          <h4 className="font-medium text-lg">{location}</h4>
        </div>
      ))}
    </div>
  );
};

// Add PropTypes for LocationSearchPanel
import PropTypes from "prop-types";
LocationSearchPanel.propTypes = {
  setVehiclePanel: PropTypes.func.isRequired,
};

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false); // If unused, consider removing

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  // Rename ref for waiting-for-driver panel to all lowercase:
  const waitingForDriverRef = useRef(null);

  // GSAP for Vehicle Panel
  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [vehiclePanel]);

  // GSAP for Confirm Ride Panel (half screen)
  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        y: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [confirmRidePanel]);

  // GSAP for Looking For Driver Panel (half screen)
  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        y: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [vehicleFound]);

  // GSAP for Waiting For Driver Panel (half screen)
  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        y: "100%",
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [waitingForDriver]);

  const togglePanel = () => setPanelOpen(!panelOpen);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full h-screen relative bg-white shadow-lg overflow-hidden">
        {/* Map Section */}
        <div
          className="h-2/3 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif')",
          }}
        >
          <div className="absolute top-4 left-4 p-2">
            <img
              className="w-20"
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
              alt="Logo"
            />
          </div>
        </div>

        {/* Search Panel */}
        <div
          ref={panelRef}
          className="absolute left-0 right-0 bottom-0 bg-white rounded-t-3xl shadow-xl p-6 transition-all duration-500 ease-in-out"
          style={{ height: panelOpen ? "100vh" : "auto" }}
        >
          <div className="flex justify-center mb-4">
            <button
              onClick={togglePanel}
              className="cursor-pointer focus:outline-none"
            >
              <i
                className={`ri-arrow-down-s-line text-3xl ${
                  panelOpen ? "rotate-180" : ""
                }`}
              ></i>
            </button>
          </div>

          {/* Always visible form fields */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              {panelOpen ? "Select Location" : "Find a Trip"}
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Add a pick-up location"
                  className="w-full p-4 pl-12 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition duration-200"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="ri-map-pin-line text-xl"></i>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your destination"
                  className="w-full p-4 pl-12 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition duration-200"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="ri-flag-line text-xl"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Location list that appears when panel is open */}
          {panelOpen && (
            <div className="mt-6">
              <LocationSearchPanel setVehiclePanel={setVehiclePanel} />
            </div>
          )}
        </div>

        {/* Vehicle Panel */}
        <div
          ref={vehiclePanelRef}
          className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl p-6 transform translate-y-full z-50 h-[50vh]"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Choose Your Ride</h2>
            <button
              onClick={() => setVehiclePanel(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>

          <div className="space-y-6 overflow-y-auto h-full">
            <VehiclePanel
              setConfirmRidePanel={setConfirmRidePanel}
              setVehiclePanel={setVehiclePanel}
            />
          </div>
        </div>

        {/* Confirm Ride Panel */}
        <div
          ref={confirmRidePanelRef}
          className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl p-6 transform translate-y-full z-50 h-[50vh]"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Confirm Your Ride</h2>
            <button
              onClick={() => setConfirmRidePanel(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>
          <div className="space-y-6 overflow-y-auto h-full">
            <ConfirmRide
              setVehiclePanel={setVehiclePanel}
              setVehicleFound={setVehicleFound}
            />
          </div>
        </div>

        {/* Looking For Driver Panel */}
        <div
          ref={vehicleFoundRef}
          className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl p-6 transform translate-y-full z-50 h-[50vh]"
        >
          <LookingForDriver setVehicleFound={setVehicleFound} />
        </div>

        <ErrorBoundary>
  <div
    ref={waitingForDriverRef}
    className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl p-6 transform translate-y-full z-50 h-[50vh]"
  >
    {/* Pass setWaitingForDriver as a prop */}
    <WaitingForDriver 
      setWaitingForDriver={setWaitingForDriver} 
      waitingForDriver={waitingForDriver} 
    />
  </div>
</ErrorBoundary>

      </div>
    </div>
  );
};

export default Home;
