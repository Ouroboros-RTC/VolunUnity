import  { useState } from "react"
import { useServicesContext } from "../hooks/useServicesContext"


const ServiceForm = () => {
    const { dispatch } = useServicesContext()
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const service = {title, load, reps}

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
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new service added', json)
            dispatch({type: 'CREATE_SERVICE', payload: json})
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Service</h3>

            <label>Service Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value = {title}
                className={emptyFields.includes('title') ? 'error': ''}
            />

            <label>Load (in kg):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value = {load}
                className={emptyFields.includes('load') ? 'error': ''}
            />

            <label>Reps:</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value = {reps}
                className={emptyFields.includes('reps') ? 'error': ''}
            />
            
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ServiceForm