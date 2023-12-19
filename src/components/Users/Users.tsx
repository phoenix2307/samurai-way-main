import {FC} from "react";
import {UserType} from "../../redux/usersReducer";
import {User} from "./User/User";

type UsersPropsType = {
    users: UserType[]
}

export const Users: FC<UsersPropsType> = ({...props}) => {
    return (
        <div>
            {
                props.users.map(user => {
                    return <li><User /></li>
                })
            }
        </div>
    )
}