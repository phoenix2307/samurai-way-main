import {FC} from "react";
import {UserType} from "../../redux/usersReducer";

type UsersPropsType = {
    users: UserType[]
}

export const Users: FC<UsersPropsType> = ({...props}) => {
    return (
        <div>
            {
                props.users.map(user => {
                    return <li></li>
                })
            }
        </div>
    )
}