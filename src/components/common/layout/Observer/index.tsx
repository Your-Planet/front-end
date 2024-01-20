import { useEffect, useRef } from "react";

interface IntersectionObserverComponentProps {
	targetRef: React.RefObject<HTMLElement>;
	handleIntersect: (entries: IntersectionObserverEntry[]) => void;
}

const IntersectionObserverComponent: React.FC<IntersectionObserverComponentProps> = ({
	targetRef,
	handleIntersect,
}) => {
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.4,
		};

		observer.current = new IntersectionObserver(handleIntersect, options);

		if (targetRef.current) {
			observer.current.observe(targetRef.current);
		}

		return () => {
			if (targetRef.current && observer.current) {
				observer.current.unobserve(targetRef.current);
			}
		};
	}, [handleIntersect, targetRef]);

	return null;
};

export default IntersectionObserverComponent;
