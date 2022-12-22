import "./Input.scss"
export const Input = ({placeHolder, classList, typeInput }) => {
    return <>
        <input className={`site-inputs ${classList}`} type={typeInput} placeholder={placeHolder}  />
    </>
}