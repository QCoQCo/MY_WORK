import { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
    children: React.ReactNode;
    className?: string;
}

const FadeInSection = ({ children, className = '' }: FadeInSectionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0, rootMargin: '0px 0px -50px 0px' },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`fade-in-section ${visible ? 'fade-in-section--visible' : ''} ${className}`.trim()}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
