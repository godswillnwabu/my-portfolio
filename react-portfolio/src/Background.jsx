
function Background() {
    return (
        <svg
            className="absolute inset-0 w-full h-full -z-10"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.15)" />
                </pattern>
            </defs>

            <rect width="100%" height="100%" fill="#0a0a0a" />
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    )
}

export default Background;