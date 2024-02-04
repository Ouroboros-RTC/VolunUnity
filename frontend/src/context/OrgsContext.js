import { createContext, useReducer } from 'react'

export const OrganizationsContext = createContext()

// reducer函数根据action的类型，实现操作
export const organizationsReducer = (state, action) => {

    switch (action.type) {
        case 'SET_ORGS':
            return {
                organizations: action.payload
            }
        case 'CREATE_ORG':
            return {
                organizations: [action.payload, ...state.organizations]
            }
        case 'DELETE_ORG':
            return {
                organizations: state.organizations.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const OrganizationsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(organizationsReducer, {
        organizations: null
    })
    return (
        <OrganizationsContext.Provider value={{...state, dispatch}}>
            { children }
        </OrganizationsContext.Provider>
    )
}