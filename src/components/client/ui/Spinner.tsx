function Spinner() {
  return (
    <div className="p-2 mx-auto text-center">
      <svg
        fill="#0f6971"
        width="800px"
        height="800px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto w-7 h-7 animate-spin"
      >
        <g>
          <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
        </g>
      </svg>
    </div>
  )
}

export default Spinner
