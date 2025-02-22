
const Header = ({ title }) => {
  return (
    <header className="bg-gray-800 dark:bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between">
        <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>
        <div className="flex mr-6">
        <img src="/tailwind.svg" className="mr-5"/>
        <img src="/react.svg"/>
        </div>
      </div>
    </header>
  )
}

export default Header