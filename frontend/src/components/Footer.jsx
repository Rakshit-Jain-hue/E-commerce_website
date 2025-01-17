import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ullam molestias culpa consectetur quae, minima aut repudiandae ducimus omnis laboriosam enim eligendi labore officia animi odio eaque impedit nisi earum, quisquam illum.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>
                    COMPANY
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>
                    GET IN TOUCH
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>random@forever.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-4 text-sm text-center'>
                Copyright 2024@ forver.com -All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer