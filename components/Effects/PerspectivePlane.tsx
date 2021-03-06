const PerspectivePlane = ({}) => {
  return (
    <div className="absolute w-full max-w-screen h-screen overflow-clip">
      <div
        style={{
          transform: 'perspective(1000px) rotateX(80deg)',
        }}
      >
        <div className="animate-slow-panning absolute top-0 left-0 w-[300%] h-[300vh]">
          <svg className="w-full h-full " xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                {/* <rect width="40" height="40" fill="url(#smallGrid)" /> */}
                <path
                  filter="url(#glow)"
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  className="stroke-1 stroke-accent-blue"
                />
              </pattern>
            </defs>

            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PerspectivePlane
