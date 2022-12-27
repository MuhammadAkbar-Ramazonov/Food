import "./Select.scss";

export const Select = ({name, children, className}) => {
    return (
			<>
				<select
					defaultValue={name}
					className={`site-select ${className}`}
					name={`${name}_reuslt`}
				>
					{children}
				</select>
			</>
		);
}