import { OrganizationsContext } from '../context/OrgsContext'
import { useContext } from 'react'

export const useOrganizationsContext = () => {
    const context = useContext(OrganizationsContext)

    if(!context){
        throw Error('useOrganizationsContext must be used inside an OrganizationsContextProvider')
    }

    return context
}