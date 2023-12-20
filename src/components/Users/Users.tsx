import {FC} from "react";
import {UserType} from "../../redux/usersReducer";
import {User} from "./User/User";

type UsersPropsType = {
    users: UserType[],
    toggleFollowCB: (idUser: string) => void
    toggleUnFollowCB: (idUser: string) => void
}

export const Users: FC<UsersPropsType> = ({
                                              users,
                                              toggleFollowCB,
                                              toggleUnFollowCB
                                          }) => {
    return (
        <div>
            {
                users.map(user => {
                    return <li key={user.id}>
                        <User
                            id={user.id}
                            name={user.name}
                            ava={user.ava}
                            status={user.status}
                            location={user.location}
                            followed={user.followed}
                            toggleFollowCB={toggleFollowCB}
                            toggleUnFollowCB={toggleUnFollowCB}
                        /></li>
                })
            }
        </div>
    )
}