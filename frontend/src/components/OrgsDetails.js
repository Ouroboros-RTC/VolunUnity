import { useOrganizationsContext } from "../hooks/useOrgsContext"


const OrganizationDetails = ({ organization }) => {
    const { dispatch } = useOrganizationsContext()

    const handleClick = async() => {
        const response = await fetch('./api/organizations/' + organization._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok){
            dispatch({type:'DELETE_ORG', payload: json})
        }
    }

    return (
        <div className="organization-details">
            <h4>{organization.name}</h4>
            <p><strong>Description: </strong>{organization.description}</p>
            <p><strong>Tag: </strong>{organization.tag.name}</p>
            <p><strong>Address: </strong>{organization.address}</p>
            <p><strong>Phone number: </strong>{organization.phoneNumber}</p>
            <p><strong>Email: </strong>{organization.email}</p>
            <p><strong>Link: </strong>{organization.link}</p>
        </div>
    )
}

export default OrganizationDetails