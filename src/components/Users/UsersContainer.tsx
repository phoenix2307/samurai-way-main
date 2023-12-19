import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatch, AppRootStateType} from "../../redux/redux-store";
import {PostType} from "../../redux/profileReducer";

type MapStateUsersPropsType = {

}
type MapDispatchUsersPropsType = {

}

const mapStateToProps = (state: AppRootStateType): MapStateUsersPropsType => {
    return {

    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchUsersPropsType => {
    return {

    }
}

export const UsersContainer = connect<MapStateUsersPropsType, MapDispatchUsersPropsType, {}, AppRootStateType >(mapStateToProps, mapDispatchToProps)(Users)