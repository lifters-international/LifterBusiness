export const userHasLoggedInMutation = `
    mutation apiUserLoggedIn($token: String!) {
        apiUserLoggedIn(token: $token) 
    }
`