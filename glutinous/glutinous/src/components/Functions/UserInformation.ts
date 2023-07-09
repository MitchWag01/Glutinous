type AccountType = {
    payAsYouGo: boolean
    advertisements: boolean
    Subscription: boolean
}

type AccountStatus = {
    active: boolean
    accountType: AccountType
}

export type UserInformationProps = {
    firstName: string
    lastName: string
    userCredits: number
    AccountInformation: AccountStatus
}