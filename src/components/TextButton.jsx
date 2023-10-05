const TextButton = ({ label, iconURL, iconHeight, iconWidth, hoverStyles }) => {
  return (
    <button className={`flex justify-center items-center gap-2 text-black text-base max-lg:text-sm text-[0.95rem] font-inter border-b border-b-transparent ${hoverStyles}`}>
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