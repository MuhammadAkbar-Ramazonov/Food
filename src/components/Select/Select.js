import "./Select.scss";

export const Select = ({name, children}) => {
    return <>
        <select className={`site-select`} name={`${name}_reuslt`}>
            {children}
        </select>
    </>
}