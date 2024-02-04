import  { useState } from "react"
import { useServicesContext } from "../hooks/useServicesContext"


const ServiceForm = () => {
    const { dispatch } = useServicesContext()
    const [name, setName] = useState('')
    const [duration, setDuration] = useState('')
    const [organization_name, setOrganization] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const service = {name, duration, organization_name}

        const response = await fetch('/api/services/', {
            method: 'POST',
            body: JSON.stringify(service),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setName('')
            setDuration('')
            setOrganization('')
            setError(null)
            setEmptyFields([])
            console.log('new service added', json)
            dispatch({type: 'CREATE_SERVICE', payload: json})
        }
        
    }
    
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Service</h3>

            <label>Service Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value = {name}
                className={emptyFields.includes('name') ? 'error': ''}
            />

            <label>Duration(hours):</label>
            <input 
                type="number"
                onChange={(e) => setDuration(e.target.value)}
                value = {duration}
                // className={emptyFields.includes('duration') ? 'error': ''}
                className={isNaN(duration) ? 'error' : ''}
            />

            <label>Organization:</label>
            <input 
                type="text"
                onChange={(e) => setOrganization(e.target.value)}
                value = {organization_name}
                // className={emptyFields.includes('organization') ? 'error' : ''}
            />
            
            <button>Add Service</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ServiceForm