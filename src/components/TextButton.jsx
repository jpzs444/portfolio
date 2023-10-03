const TextButton = ({ label, iconURL, iconHeight, iconWidth }) => {
  return (
    <button className="flex justify-center items-center gap-2 text-black text-md max-lg:text-sm font-medium font-inter">
      {label}
      <img 
        src={iconURL}
        width={iconWidth}
        height={iconHeight}
        className={`${iconURL ? "opacity-70 -z-10" : "hidden"}`}
      />
    </button>
  )
}

export default TextButton