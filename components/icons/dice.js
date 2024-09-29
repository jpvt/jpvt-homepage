const DiceIcon = (props) => {
    return (
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill={props.fill || "currentColor"} // Allow fill color to be controlled via props or default to currentColor
        stroke={props.stroke || "currentColor"} // Allow stroke color to be controlled via props or default to currentColor
        strokeWidth={props.strokeWidth || 1.44} // Allow stroke width to be controlled via props or default to the provided value
        width={props.width || 20} // Set default width, if not provided
        height={props.height || 20} // Set default height, if not provided
        {...props} // Pass down additional props like `className`, etc.
      >
        {/* First Path */}
        <path
          d="M9.79,37.62,27.91,43.5,14.63,27.86l20.59-8.34-7.31,24L43.5,31.27,35.22,19.52l6.12-6.46L21.64,4.5l13.58,15"
          fill="none"
          stroke={props.stroke || "currentColor"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Second Path */}
        <path
          d="M14.63,27.86,9.79,37.62,4.5,20.27,21.64,4.5Z"
          fill="none"
          stroke={props.stroke || "currentColor"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Third Path */}
        <path
          d="M14.63,27.86,4.5,20.27"
          fill="none"
          stroke={props.stroke || "currentColor"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Fourth Path */}
        <path
          d="M43.5,31.27,41.34,13.06"
          fill="none"
          stroke={props.stroke || "currentColor"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  
  export default DiceIcon;
  