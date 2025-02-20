import PropTypes from "prop-types";

const LocationSearchPanel = ({ setVehiclePanel }) => {
  const locations = [
    "24B, Near Kapoor cafe, sheriyans coding school",
    "242B, Near Kapoor cafe, sheriyans coding school",
    "24B, Near Kapoor cafe, sheriyans coding schoolllll"
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

// ✅ Add PropTypes validation
LocationSearchPanel.propTypes = {
  setVehiclePanel: PropTypes.func.isRequired,
};

export default LocationSearchPanel;
