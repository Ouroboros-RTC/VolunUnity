import { useServicesContext } from "../hooks/useServicesContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { ReactComponent as TrashBinIcon } from "../icons/trash-bin-icon.svg";


const ServiceDetails = ({ service }) => {
    const { dispatch } = useServicesContext()

    const handleClick = async() => {
        const response = await fetch('./api/services/' + service._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok){
            dispatch({type:'DELETE_SERVICE', payload: json})
        }
    }

    return (
        <div className="service-details">
            <h4>{service.name}</h4>
            <p><strong>Duration(hours): </strong>{service.duration}</p>
            <p><strong>Organization: </strong>{service.organization_id? service.organization_id.name: 'Unregistered Organization'}</p>
            <p>{formatDistanceToNow(new Date(service.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}><TrashBinIcon /></span>
        </div>
    )
}

export default ServiceDetails