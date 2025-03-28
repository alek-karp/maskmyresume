export default function Home() {
  return (
    <div className="bg-indigo-700 h-screen">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Share your resume securely and with privacy 🔒
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-indigo-200">
            Protect your privacy by redacting sensitive details in your resume.
            Share it with the tech community without compromising personal
            information.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
