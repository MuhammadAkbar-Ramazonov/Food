import "./Select.scss";

export const Select = ({name, children, className}) => {
    return <>
        <select className={`site-select ${className}`} name={`${name}_reuslt`}>
            {children}
        </select>
    </>
}