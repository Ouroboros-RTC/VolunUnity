// fetch all workouts and list them in the home page
import { useEffect } from "react"
import OrgsFilter from "../components/OrgsFilter";

// components
import OrganizationDetails from "../components/OrgsDetails"

import { useOrganizationsContext } from "../hooks/useOrgsContext"

const OrgsPage = () => {
    const {organizations, dispatch} = useOrganizationsContext()
    useEffect(() => {
        const fetchOrganizations = async () => {
            const response = await fetch('/api/organizations')
            const json = await response.json()
            
            if (response.ok){
                dispatch({type: 'SET_ORGS', payload: json})
            }
        }

        fetchOrganizations()
    }, [dispatch])
    
    return (
        <div className="page">
            <div className="organizations">
                {organizations && organizations.map((organization) => (
                    <OrganizationDetails key={organization._id} organization={organization} />
                ))}
            </div>
            <OrgsFilter/>
        </div>
    )
}

export default OrgsPage