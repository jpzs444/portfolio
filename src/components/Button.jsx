const Button = ({ label, bgColor, borderColor, labelColor, iconURL, iconHeight, iconWidth, buttonType }) => {
  return (
    <button type={`${buttonType ? buttonType : "button" }`} className={`flex justify-center items-center gap-2 border border-1 ${borderColor} ${bgColor} ${labelColor} px-[26px] py-[9px] rounded-lg font-medium font-inter text-lg max-lg:text-md`}>
      {label}
      <img
        src={iconURL}
        width={iconWidth}
        height={iconHeight}
        className={`${iconURL ? "opacity-80 -z-10" : "hidden"}`}
      />
    </button>
  )
}

export default Button