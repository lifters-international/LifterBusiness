export const userLogInMutation =  `
    mutation LoginFoodApiAccount($foodApiAccount: CreateFoodApiAccount!) {
        loginFoodApiAccount(foodApiAccount: $foodApiAccount) {
            token
        }
    }
`;
