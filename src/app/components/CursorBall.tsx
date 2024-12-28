
'use client'
import React, { useState, useEffect } from 'react';

const CursorBall = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        

        const handleMouseMove = (event: MouseEvent): void => {
            const scrollY = window.scrollY; // Get the vertical scroll position
            setPosition({
                x: event.clientX, // X position relative to the viewport
                y: event.clientY + scrollY, // Y position including scroll offset
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="blurry-ball"
            style={{
                left: position.x,
                top: position.y,
            }}
        ></div>
    );
};

export default CursorBall;
