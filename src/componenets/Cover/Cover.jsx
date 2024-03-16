
import "./Cover.css"

export default function Cover() {
  return (
    <div className="container rounded-xl my-2 lg:my-4 md:h-80 lg:h-[520px] flex items-center">
      <div className="text-white flex flex-col gap-2 lg:gap-4 py-1 md:py-4 items-center justify-center w-11/12 md:w-3/4 m-auto text-center">

        <h2 className="text-xl lg:text-4xl font-extrabold">Discover an exceptional cooking class tailored for you!</h2>

        <p className="text-xs md:text-sm lg:text-lg mt-2 lg:mt-4">Savor delectable flavors, indulge in exquisite ambiance, and experience unparalleled service at our captivating restaurant. Join us today!</p>

        <div className="flex flex-col md:flex-row gap-2 lg:gap-4  mt-4 lg:mt-8">
        <button className="btn btn-success text-white">Explore Now</button>
        <button className="btn btn-outline text-white">Get Feedback</button>
        </div>

      </div>

    </div>
  )
}
