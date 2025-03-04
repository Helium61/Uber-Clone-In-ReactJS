const RidePopUp = (props) => {
  return (
    <>
      {/* Header with arrow icon */}
      <h5 className="p-1 text-center">
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-center">New Ride Available!</h3>

      {/* Driver, fare, and distance info */}
      <div className="flex flex-col p-3 bg-yellow-100 rounded-lg mt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src="https://i.pravatar.cc/150?u=estherberry"
              alt="Esther Berry"
            />
            <div>
              <h2 className="text-lg font-medium">Esther Berry</h2>
              <p className="text-sm text-gray-600">ApplePay | Discount</p>
            </div>
          </div>
          <div className="flex items-center gap-2 -mt-5">
            <h3 className="text-2xl font-medium">$25.00</h3>
          </div>
        </div>
        <h5 className="text-lg font-semibold text-right -mt-9">2.2 km</h5>
      </div>

      {/* Pickup and Drop-off locations */}
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-user-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">7958 Swift Village</h3>
            <p className="text-sm -mt-1 text-gray-600">Saroba Garden</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <i className="ri-map-pin-2-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">105 William St, Chicago, US</h3>
            <p className="text-sm -mt-1 text-gray-600">Museum of Kiasma</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-5 w-full flex gap-4">
        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className="bg-gray-300 w-full text-gray-700 font-semibold p-2 px-10 rounded-lg"
        >
          Ignore
        </button>
        <button
          onClick={() => {
            props.setRidePopupPanel(false); // Hide RidePopUp
            props.setConfirmRidePopupPanel(true); // Show ConfirmRidePopup
          }}
          className="bg-yellow-500 w-full text-white font-semibold p-2 px-10 rounded-lg"
        >
          Accept
        </button>
      </div>
    </>
  );
};

export default RidePopUp;