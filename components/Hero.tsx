const Hero = () => {
  return (
    <div className="text-center py-32">
      <div className="font-extrabold text-7xl text-center leading-tight mb-16">
        <p>Hello there! 👋</p>
        <p>
          I'm{' '}
          <span className="bg-clip-text text-transparent hero__gradient">
            Alan Medina
          </span>
        </p>
      </div>
      <p className="text-2xl font-normal w-4/6 mx-auto mb-24">
        Welcome to my personal place on the Internet. I write code to pay the
        bills, but also enjoy writing and sharing cool stuff.
      </p>
      <svg
        width="33"
        height="62"
        viewBox="0 0 33 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        <rect
          x="1.5"
          y="1.5"
          width="30"
          height="59"
          rx="15"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M16.5 12.5V21.5"
          stroke="white"
          strokeWidth="3"
          className="scroll-line"
        />
      </svg>
    </div>
  )
}

export default Hero
