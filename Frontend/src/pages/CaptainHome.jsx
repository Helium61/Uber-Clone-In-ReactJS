import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopup from '../components/ConfirmRidePopUp';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true); // Ride popup starts visible
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false); // Confirm popup starts hidden
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null); // Fixed naming convention

  // Animation for RidePopUp
  useGSAP(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        y: 0, // Slide up (visible)
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        y: '100%', // Slide down (hidden)
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [ridePopupPanel]);

  // Animation for ConfirmRidePopup
  useGSAP(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        y: 0, // Slide up (visible)
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        y: '100%', // Slide down (hidden)
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [confirmRidePopupPanel]);

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      {/* Header with Logo */}
      <div className="absolute top-4 left-4 p-2">
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
      </div>

      {/* Logout Button */}
      <Link
        to="/user/logout"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md"
      >
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
      </Link>

      {/* Map Section (Placeholder for Map) */}
      <div
        className="h-2/3 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif')",
        }}
      ></div>

      {/* Bottom Section (Driver Stats) */}
      <div className="h-1/3 p-4 bg-white shadow-md rounded-t-2xl">
        {/* Centered Down Arrow */}
        <div className="flex justify-center mb-2 -mt-2">
          <i className="ri-arrow-down-s-line text-3xl"></i>
        </div>

        {/* Driver Profile and Earnings */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArj45A4HzN-Uk816EhofokQLF8-U5J45llg&s"
              alt="Driver Profile"
            />
            <div>
              <h4 className="text-2xl font-semibold">Jeremiah Curtis</h4>
              <p className="text-lg text-gray-700 font-normal">Basic Level</p>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-2xl font-semibold">$325.00</h4>
            <p className="text-lg text-gray-700">Earned</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-around items-center bg-gray-100 p-6 rounded-lg mt-8">
          <CaptainDetails />
        </div>

        {/* RidePopUp Container */}
        <div
          ref={ridePopupPanelRef}
          className="fixed w-full z-10 bottom-0 bg-white rounded-lg shadow-lg pr-6 pt-4 pb-4"
          style={{ transform: 'translateY(100%)' }} // Start hidden
        >
          <RidePopUp
            setRidePopupPanel={setRidePopupPanel}
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          />
        </div>

        {/* ConfirmRidePopup Container */}
        <div
          ref={confirmRidePopupPanelRef}
          className="fixed w-full z-20 bottom-0 bg-white rounded-lg shadow-lg pr-6 pt-4 pb-4"
          style={{ transform: 'translateY(100%)' }} // Start hidden
        >
          <ConfirmRidePopup
            setConfirmRidePopupPanel={setConfirmRidePopupPanel}
            setRidePopupPanel={setRidePopupPanel}
          />
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;