const SubscriptionForm = () => {
  return (
    <div className="text-center px-4 lg:px-0">
      <form>
        <p className="text-4xl md:text-5xl lg:text-5xl font-bold leading-snug mb-8 bg-clip-text text-transparent bg-gradient-to-bl from-teal-900 to-yellow-300">
          Amazing content,
          <br />
          on your mailbox
        </p>
        <p className="w-5/6 md:w-1/2 lg:w-1/2 mx-auto text-xl leading-8 mb-12">
          Join my newsletter and get cool articles about Web Development, Design
          and more cool tech-related stuff.
        </p>
        <label
          className="w-5/6 mx-auto mb-2 md:mb-0 lg:mb-0 text-left md:mr-4 lg:mr-4 block md:inline lg:inline"
          htmlFor="email"
        >
          E-Mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-3/5 md:w-2/5 lg:w-1/4 px-4 py-2 bg-gray-300 border border-gray-800 rounded-tl-md rounded-bl-md outline-none focus:outline-none focus:ring focus:border-pink-300 placeholder-gray-500"
        />
        <input
          type="submit"
          value="Sign up"
          className="bg-gradient-to-bl from-pink-900 to-pink-300 md:w-1/6 lg:w-1/12 font-bold px-4 py-2 rounded-tr-md rounded-br-md cursor-pointer focus:outline-none focus:ring focus:border-pink-300"
        />
      </form>
    </div>
  )
}

export default SubscriptionForm
