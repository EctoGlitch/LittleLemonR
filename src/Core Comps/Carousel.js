import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const Carousel = ({ children }) => {
    const constraintsRef = useRef(null);
    const carouselRef = useRef(null);
    const x = useMotionValue(0);
    const [leftConstraint, setLeftConstraint] = useState(0);

    useEffect(() => {
        const calculateConstraints = () => {
            if (constraintsRef.current && carouselRef.current) {
                const containerWidth = constraintsRef.current.offsetWidth;
                const carouselContentWidth = carouselRef.current.scrollWidth
                const newLeftConstraint = containerWidth - carouselContentWidth
                setLeftConstraint(Math.min(0, newLeftConstraint));
            }
        };
        calculateConstraints();
        window.addEventListener('resize', calculateConstraints)
        return () => {
            window.removeEventListener('resize', calculateConstraints)
        };
    }, [children]);

    return (
        <>
            <div className="overflow-hidden" ref={constraintsRef}>
                <motion.div
                    className="flex gap-3 cursor-grab active:cursor-grabbing"
                    style={{ x }}
                    drag='x'
                    dragConstraints={{ left: leftConstraint, right: 0 }}
                    dragElastic={0.2}
                    dragMomentum={true}
                    ref={carouselRef}
                >
                    {children}
                </motion.div>
            </div>
        </>
        
    );
};

export default Carousel;