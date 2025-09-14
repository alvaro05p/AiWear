export default function Hero() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Fashion Reimagined with AI
            <br className="hidden lg:inline-block" />
            Welcome to AiWear
          </h1>
          <p className="mb-8 leading-relaxed">
            AiWear is where creativity meets technology. Each design is crafted with the
            power of artificial intelligence to bring you clothing that’s unique,
            modern, and expressive. More than just style, our pieces represent the
            future of fashion — where innovation shapes identity.
          </p>

          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              About the brand
            </button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <span className="flex items-center">
                My
                <svg 
                  xmlns="http://www.w3.org/2000/svg"  
                  width="24"  
                  height="24"  
                  viewBox="0 0 24 24"  
                  fill="none"  
                  stroke="currentColor"  
                  strokeWidth="2"  
                  strokeLinecap="round"  
                  strokeLinejoin="round"  
                  className="ml-2 icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
      </svg>
    </span>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="heroPick.png"
          />
        </div>
      </div>
    </section>
  )
}
