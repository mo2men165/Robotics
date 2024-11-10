import React, { useState } from 'react';
import './AnalogJoystick.css';

const AnalogJoystick = ({ onMove }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 50, y: 50 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        moveHandle(e);
    };

    const handleMouseMove = (e) => {
        if (isDragging) moveHandle(e);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        // Do not reset to center, let it stay at the last position
        if (onMove) onMove({ x: 0, y: 0 });
    };

    const moveHandle = (e) => {
        const rect = e.target.closest('.joystick').getBoundingClientRect();
        const radius = rect.width / 2 - 30;  // Adjust radius to keep handle within bounds

        // Calculate the mouse position relative to the joystick's center
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Calculate the distance from the center
        const distance = Math.min(radius, Math.hypot(x, y)); // Limit movement to within the circle

        // Calculate the angle and new position
        const angle = Math.atan2(y, x);

        const newPosition = {
            x: distance * Math.cos(angle) + rect.width / 2 - 30, // Ensure handle stays within bounds
            y: distance * Math.sin(angle) + rect.height / 2 - 30,
        };

        setPosition({
            x: newPosition.x,
            y: newPosition.y,
        });

        // Send movement data for control purposes
        if (onMove) {
            onMove({
                x: distance * Math.cos(angle),
                y: distance * Math.sin(angle),
            });
        }
    };

    return (
        <div
            className="joystick"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // Ensures no accidental reset if mouse leaves joystick area
        >
            <div
                className="joystick-handle"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            ></div>
        </div>
    );
};

export default AnalogJoystick;
