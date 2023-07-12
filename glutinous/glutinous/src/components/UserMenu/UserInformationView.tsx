import { UserInformationProps } from "../Functions/UserInformation";
import { Typography } from "@mui/material";

const UserInformationDisplay = (userProps: UserInformationProps) => {
    return <Typography>Welcome ${userProps.firstName} ${userProps.lastName}.</Typography>
}

export default UserInformationDisplay;