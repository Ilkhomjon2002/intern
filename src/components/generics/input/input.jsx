import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
	(
		{
			children,
			onClick,
			height,
			width,
			type,
			pl,
			onChange,
			placeholder,
			defaultValue,
			value,
			name,
			mr,
			ml,
			mb,
			mt,
		},
		ref
	) => {
		return (
			<Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
				<Icon> {children}</Icon>
				<Container
					type={type}
					width={width}
					height={height}
					onClick={onClick}
					pl={pl}
					onChange={onChange}
					placeholder={placeholder}
					defaultValue={defaultValue}
					value={value}
					ref={ref}
					name={name}
				></Container>
			</Wrapper>
		);
	}
);

export default Input;
