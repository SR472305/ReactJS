import { DECREMNET, INCREMENET, RESET } from "./actiontype"

export const increment = () => (
    {
        type: INCREMENET,
    }
)
export const decrement = () => (
    {
        type: DECREMNET,
}
)
export const rest= () => (
    {
        type: RESET,
})