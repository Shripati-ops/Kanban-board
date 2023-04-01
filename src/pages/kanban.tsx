import {increaseCounter} from "../stores/features/common/counterSlice"
import { useSelector,useDispatch } from "react-redux"
export const kanbanBoard = () => {
    const dispatch = useDispatch()
    const {counter} = useSelector((state:any) => state.counterReducer)
    return (
        <div>
            <h1> Hello World!</h1>
            <button onClick={() => dispatch(increaseCounter())}>
                Count is {counter}
            </button>
        </div>
        )
}