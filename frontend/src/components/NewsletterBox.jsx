const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">
            Subscribe Now and get 20% off
        </p>
        <p className="text-gray-400 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magni.
        </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your e-mail" />
            <button className="bg-[#FFDAD6] text-black text-sm px-10 py-4" type="submit">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox