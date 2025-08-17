export default function Home() {
  return (
    <div className="md:space-y-20 bg-white dark:bg-gray-900">
      {/* ====== Background Shapes ====== */}
      <img
        src="/web imgs/Yellow shape.png"
        alt="circle"
        style={{ width: 200 }}
        className="overflow-y-hidden hidden md:block absolute -top-20 left-0 z-10 opacity-80"
      />
      <img
        src="/web imgs/Blue shape.svg"
        alt="circle"
        style={{ width: 200 }}
        className="md:block hidden absolute -bottom-40 -right-0 z-20 opacity-80"
      />
      {/* ====== Hero Section ====== */}
      <section className="bg-[#fff] dark:bg-gray-900 lg:grid lg:h-screen relative z-3 pt-10">
        <div className="mx-auto w-screen max-w-screen-xl px-4 md:pb-16 sm:px-6 z-30 md:grid md:grid-cols-2 md:gap-4 lg:px-8 lg:py-0">
          {/* ====== Hero Text & Buttons ====== */}
          <div className="text-left">
            <h1 className="md:text-7xl text-4xl font-bold text-gray-900 dark:text-white mt-15 z-30 animate from-left medium delay-1">
              Explore Live Creative Classes
            </h1>
            <p className="mt-4 text-base text-pretty text-gray-500 dark:text-gray-300 sm:text-lg/relaxed animate from-left medium delay-2">
              Choose from over 2,000+ courses on topics like user interface
              design, graphic design, front-end development, and much more...
            </p>
            <div className="mt-4 flex gap-4 sm:mt-6">
              {/* Get Started & Learn More Buttons */}
              <a
                className="inline-block rounded-xl border border-gray-900 dark:border-gray-100 bg-gray-900 dark:bg-gray-100 px-5 py-3 font-medium text-white dark:text-gray-900 shadow-sm animate from-bottom medium delay-3 transition-colors hover:bg-gray-700 dark:hover:bg-gray-200"
                href="#"
              >
                Get Started
              </a>
              <a
                className="inline-block animate from-bottom medium delay-4 rounded-xl border border-gray-200 dark:border-gray-700 px-5 py-3 font-medium text-gray-700 dark:text-gray-200 shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          {/* ====== Hero Image ====== */}
          <img
            className="mx-auto hidden rounded-2xl text-gray-900 dark:text-gray-100 md:block -translate-y-10 z-50 animate from-bottom medium delay-1"
            src="/web imgs/man.jpg"
            style={{width: 350}}
            alt="man"
          />
        </div>
      </section>

      {/* ====== Why Choose Us Section ====== */}
      <div className="flex flex-col justify-center p-10 px-20" style={{ zIndex: 100 }}>
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-15 text-gray-900 dark:text-white">Why Choose Us</h1>
        <div className="flex flex-col md:flex-row space-y-10 ...">
          {/* Feature 1 */}
          <div className="flex flex-col ">
            <img src="/web imgs/dev2-1.png" className="w-10" alt="img" />
            <h2 className="text-left text-2xl font-bold text-gray-900 dark:text-white my-2">
              Learn from anywhere
            </h2>
            <p className="text-left text-gray-500 dark:text-gray-300">
              Ecolabs’s online learning platform empowers you to learn new
              skills and accomplish real growth.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col ">
            <img src="/web imgs/div2-2.png" className="w-10" alt="img" />
            <h2 className="text-left text-2xl font-bold text-gray-900 dark:text-white my-2">
              Courses taught by real experts
            </h2>
            <p className="text-left text-gray-500 dark:text-gray-300">
              Our teachers are experts excited to share their wisdom,
              experience, & trusted tools with you.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col ">
            <img src="/web imgs/div2-3.png" className="w-10" alt="img" />
            <h2 className="text-left text-2xl font-bold text-gray-900 dark:text-white my-2">
              Learn in-demand skills
            </h2>
            <p className="text-left text-gray-500 dark:text-gray-300">
              Explore demanded skills, deepen existing passions, and get lost in
              creativity.
            </p>
          </div>
        </div>
      </div>

      {/* ====== Courses Categories Section (First) ====== */}
      <div className="flex flex-col justify-center p-10 px-20" style={{ zIndex: 100 }}>
        <div className="mb-15 space-y-3">
          <h1 className="md:text-5xl text-2xl font-bold text-center text-gray-900 dark:text-white">Courses categories</h1>
          <p className="text-center md:block hidden md:text-xl text-sm text-gray-500 dark:text-gray-300">
            Provide most popular courses that your want to join and lets start
            the course for the most simply way in here
          </p>
        </div>
        <div className="flex flex-col md:flex-row ...">
          <div className="flex flex-col md:flex-row justify-around gap-y-5 md:gap-x-30">
            {/* Category Card 1 */}
            <div className="flex flex-col ">
              <img src="/web imgs/markiting.png" className="w-150" alt="img" />
              <h2 className="text-left md:text-2xl text-xl font-bold text-gray-900 dark:text-white my-2">
                Marketing
              </h2>
              <p className="text-left text-gray-500 dark:text-gray-300">Course: 18</p>
            </div>
            {/* Category Card 2 */}
            <div className="flex justify-around gap-x-30">
              <div className="flex flex-col ">
                <img src="/web imgs/Frame 12.png" className="w-150" alt="img" />
                <h2 className="text-left md:text-2xl text-xl font-bold text-gray-900 dark:text-white my-2">
                  Marketing
                </h2>
                <p className="text-left text-gray-500 dark:text-gray-300">Course: 18</p>
              </div>
            </div>
            {/* Category Card 3 */}
            <div className="flex justify-around gap-x-30">
              <div className="flex flex-col ">
                <img src="/web imgs/markiting.png" className="w-150" alt="img" />
                <h2 className="text-left md:text-2xl text-xl font-bold text-gray-900 dark:text-white my-2">
                  Marketing
                </h2>
                <p className="text-left text-gray-500 dark:text-gray-300">Course: 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== Courses Categories Section (Cards with Wishlist) ====== */}
      <div className="flex flex-col justify-center space-y-30 md:p-10 md:px-20 px-5 items-center" style={{ zIndex: 100 }}>
        <div className="flex flex-col text-center space-y-3">
          <div className="mb-15 space-y-3">
            <h1 className="md:text-5xl text-3xl font-bold text-gray-900 dark:text-white">Courses categories</h1>
            <p className="text-center text-gray-500 dark:text-gray-300 md:block hidden">
              Provide most popular courses that your want to join and lets start
              the course for the most simply way in here
            </p>
          </div>
          <div className="flex justify-around gap-x-30 flex-col md:flex-row gap-y-8">
            {/* ====== Course Card 1 ====== */}
            <a
              href="#"
              className="group text-left relative block overflow-hidden max-w-90 h-fit border-2 border-gray-500 dark:border-gray-700 rounded-2xl"
            >
              {/* Wishlist Button */}
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white dark:bg-gray-800 p-1.5 text-gray-900 dark:text-white transition hover:text-gray-900/75 dark:hover:text-gray-300">
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              {/* Course Image */}
              <img
                src="/web imgs/image 3.png"
                alt="course"
                className="object-cover transition duration-500 group-hover:scale-105 w-full"
              />
              {/* Course Info */}
              <div className="relative border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
                <p className="text-gray-500 dark:text-gray-300">
                  $49.99
                  <span className="text-gray-400 dark:text-gray-500 line-through mx-1">$80</span>
                </p>
                <h3 className="mt-1.5 text-lg font-medium text-gray-900 dark:text-white">
                  The Complete Copywriting
                </h3>
                <p className="mt-1.5 line-clamp-3 text-gray-500 dark:text-gray-300">
                  Provide most popular courses that your want to join and lets
                  start the course for the most simply way in here
                </p>
                <form className="mt-4 flex gap-4">
                  <button
                    type="button"
                    className="block w-full rounded-xl bg-gray-900 dark:bg-gray-100 px-4 py-3 text-sm font-medium text-white dark:text-gray-900 transition hover:scale-105"
                  >
                    explore
                  </button>
                </form>
              </div>
            </a>
            {/* ====== Course Card 2 ====== */}
            <a
              href="#"
              className="group text-left relative block overflow-hidden max-w-90 h-fit border-2 border-gray-500 dark:border-gray-700 rounded-2xl"
            >
              {/* Wishlist Button */}
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white dark:bg-gray-800 p-1.5 text-gray-900 dark:text-white transition hover:text-gray-900/75 dark:hover:text-gray-300">
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              {/* Course Image */}
              <img
                src="/web imgs/image 3.png"
                alt="course"
                className="object-cover transition duration-500 group-hover:scale-105 w-full"
              />
              {/* Course Info */}
              <div className="relative border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
                <p className="text-gray-700 dark:text-gray-200">
                  $49.99
                  <span className="text-gray-400 dark:text-gray-500 line-through mx-1">$80</span>
                </p>
                <h3 className="mt-1.5 text-lg font-medium text-gray-900 dark:text-white">
                  The Complete Copywriting
                </h3>
                <p className="mt-1.5 line-clamp-3 text-gray-700 dark:text-gray-300">
                  Provide most popular courses that your want to join and lets
                  start the course for the most simply way in here
                </p>
                <form className="mt-4 flex gap-4">
                  <button
                    type="button"
                    className="block w-full rounded-xl bg-gray-900 dark:bg-gray-100 px-4 py-3 text-sm font-medium text-white dark:text-gray-900 transition hover:scale-105"
                  >
                    explore
                  </button>
                </form>
              </div>
            </a>
            {/* ====== Course Card 3 ====== */}
            <a
              href="#"
              className="group text-left relative block overflow-hidden max-w-90 h-fit border-2 border-gray-500 dark:border-gray-700 rounded-2xl"
            >
              {/* Wishlist Button */}
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white dark:bg-gray-800 p-1.5 text-gray-900 dark:text-white transition hover:text-gray-900/75 dark:hover:text-gray-300">
                <span className="sr-only">Wishlist</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              {/* Course Image */}
              <img
                src="/web imgs/image 3.png"
                alt="course"
                className="object-cover transition duration-500 group-hover:scale-105 w-full"
              />
              {/* Course Info */}
              <div className="relative border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 p-6">
                <p className="text-gray-700 dark:text-gray-200">
                  $49.99
                  <span className="text-gray-400 dark:text-gray-500 line-through mx-1">$80</span>
                </p>
                <h3 className="mt-1.5 text-lg font-medium text-gray-900 dark:text-white">
                  The Complete Copywriting
                </h3>
                <p className="mt-1.5 line-clamp-3 text-gray-700 dark:text-gray-300">
                  Provide most popular courses that your want to join and lets
                  start the course for the most simply way in here
                </p>
                <form className="mt-4 flex gap-4">
                  <button
                    type="button"
                    className="block w-full rounded-xl bg-gray-900 dark:bg-gray-100 px-4 py-3 text-sm font-medium text-white dark:text-gray-900 transition hover:scale-105"
                  >
                    explore
                  </button>
                </form>
              </div>
            </a>
          </div>
          {/* ====== View All Courses Button ====== */}
          <div className="flex justify-center items-cnter w-full my-10">
            <a
              className="group inline-block rounded-full bg-gradient-to-r max-w-50 from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white"
              href="#"
            >
              <span className="block rounded-full bg-white dark:bg-gray-900 px-8 py-3 font-bold text-sm group-hover:bg-transparent dark:group-hover:bg-transparent dark:text-white">
                view all cources
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ====== Testimonials Section ====== */}
      <div className="px-2 flex flex-col mb-10 md:mb-0">
        <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-900 dark:text-white">
          What our students say about us
        </h1>
        {/* comments */}
        <section className="">
          <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-6 md:px-6"></div>
          <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                <p className="px-6 py-1 text-lg italic text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus quibusdam, eligendi exercitationem molestias
                  possimus facere.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600 bg-pink-500"></span>
              <p className="text-gray-900 dark:text-white">Leroy Jenkins</p>
            </div>
            {/* Testimonial 2 */}
            <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
              <div className="relative text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                  ></path>
                </svg>
                <p className="px-6 py-1 text-lg italic text-gray-900 dark:text-white">
                  Accusantium illum cupiditate harum asperiores iusto quos quasi
                  quis quae! Fugit doloribus, voluptatum quidem magnam velit
                  excepturi nobis, reprehenderit ducimus incidunt quisquam quae
                  veritatis, quos iure harum.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                >
                  <path
                    fill="currentColor"
                    d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                  ></path>
                </svg>
              </div>
              <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600 bg-pink-500"></span>
              <p className="text-gray-900 dark:text-white">Leroy Jenkins</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
