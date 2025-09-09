type Props = {
  isExpanded: boolean
  onClick: () => void
}

const NavButton = ({ isExpanded, onClick}: Props) => {

  return (
    <div className='w-10 flex flex-col items-center justify-between gap-2 ' onClick={onClick}>
      <div className={`w-full h-1 bg-blue-50 rounded-sm transition-all duration-500 ease-in-out
              ${isExpanded ? "-rotate-[33deg] scale-110 origin-right " : "rotate-0 origin-right"}`}>
      </div>
      <div className={`w-full h-1 bg-blue-50 rounded-sm transition-all duration-500 ease-in-out
              ${isExpanded ? "opacity-0" : "opacity-100"}`}>
      </div>
      <div className={`w-full h-1 bg-blue-50 rounded-sm transition-all duration-500 ease-in-out
              ${isExpanded ? "rotate-[33deg] scale-110  origin-right " : "rotate-0 origin-right"}`}>
      </div>
    </div>
  )
}

export default NavButton;