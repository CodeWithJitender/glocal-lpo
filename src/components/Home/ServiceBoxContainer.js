import React from 'react';

import { servicesArray } from "@/utils/serviceInfo";

import ServiceBox from './ServiceBox';

const ServiceBoxContainer = () => {
  return (
		servicesArray.map((service, index) => (
			<ServiceBox
				index={index}
				key={service.id}
				{...service}
			/>
		))
  );
};

export default ServiceBoxContainer;
