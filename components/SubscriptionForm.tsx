const SubscriptionForm = () => {
  return (
    <div className="text-center">
      <form>
        <p className="text-5xl font-bold leading-snug mb-8 bg-clip-text text-transparent bg-gradient-to-bl from-teal-900 to-yellow-300">
          Amazing content,
          <br />
          on your mailbox
        </p>
        <p className="w-1/2 mx-auto text-xl leading-8 mb-12">
          Join my newsletter and get cool articles about Web Development, Design
          and more cool stuff.
        </p>
        <input
          type="email"
          name="email"
          placeholder="Enter your e-mail here"
          className="w-1/4 px-4 py-2 bg-gray-300 border border-gray-800 rounded-tl-md rounded-bl-md outline-none focus:outline-none focus:ring focus:border-pink-300 placeholder-gray-500"
        />
        <input
          type="submit"
          value="Sign up"
          className="bg-gradient-to-bl from-pink-900 to-pink-300 font-bold px-4 py-2 rounded-tr-md rounded-br-md cursor-pointer focus:outline-none focus:ring focus:border-pink-300"
        />
      </form>
    </div>
  )
}

export default SubscriptionForm
