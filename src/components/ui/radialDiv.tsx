// import React from "react";

// interface RadialDivProps {
//     size: number; // Diameter of the gradient
//     x: number; // Mouse X position
//     y: number; // Mouse Y position
// }

// const RadialDiv: React.FC<RadialDivProps> = ({ size, x, y }) => {
//     const gradientStyle = {
//         width: `${size}px`,
//         height: `${size}px`,
//         borderRadius: "50%",
//         position: "absolute",
//         left: 0,
//         top: 0,
//         transform: `translate(${x - size / 2}px, ${y - size / 2}px)`, // Center
//         pointerEvents: "none", // Important!
//         background: `radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%)`, // Gradient
//     };

//     return <div style={gradientStyle}></div>;
// };

// export default RadialDiv;
