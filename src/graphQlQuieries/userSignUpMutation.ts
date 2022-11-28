export const userSignUpMutation = `
    mutation CreateFoodApiAccount($foodApiAccount: CreateFoodApiAccount!) {
        createFoodApiAccount(foodApiAccount: $foodApiAccount) {
            key
            type
            value
        }
    }
`