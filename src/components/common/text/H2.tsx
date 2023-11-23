export interface H2Props {
	children: string;
}

function H2(props: H2Props) {
	const { children } = props;

	return <h2 className={"text-4xl font-bold text-center"}>{children}</h2>;
}

export default H2;
