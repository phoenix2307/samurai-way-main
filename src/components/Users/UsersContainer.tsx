import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatch, AppRootStateType} from "../../redux/redux-store";
import {followAC, unFollowAC, UserType} from "../../redux/usersReducer";

type MapStateUsersPropsType = {
    users: UserType[]
}
type MapDispatchUsersPropsType = {
    toggleFollowCB: (idUser: string) => void
    toggleUnFollowCB: (idUser: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateUsersPropsType => {
    return {
        users: state.usersPage.usersData
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchUsersPropsType => {
    return {
        toggleFollowCB: (idUser: string) => dispatch(followAC(idUser)),
        toggleUnFollowCB: (idUser: string) => dispatch(unFollowAC(idUser))
    }
}

export const UsersContainer = connect<MapStateUsersPropsType, MapDispatchUsersPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(Users)