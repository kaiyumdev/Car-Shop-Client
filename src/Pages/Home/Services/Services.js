import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((json) => setServices(json));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold">Services</h1>
        <p>This is the main services section </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
