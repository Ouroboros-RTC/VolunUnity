import { useEffect } from "react";
import ServiceDetails from '../components/ServiceDetails';
import ServiceForm from "../components/ServiceForm";
import { useServicesContext } from "../hooks/useServicesContext";

const Tracker = () => {
    const { services, dispatch } = useServicesContext();

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch('/api/services');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_SERVICES', payload: json });
            }
        };

        fetchServices();
    }, [dispatch]);

    return (
        <div className="page">
            <div className="services">
                {services && services.map((service) => (
                    <ServiceDetails key={service._id} service={service} />
                ))}
            </div>
            <ServiceForm />
        </div>
    );
};

export default Tracker
