const Button = ({ label, bgColor, borderColor, labelColor, iconURL, iconHeight, iconWidth, buttonType, paddingY, paddingX }) => {
  return (
    <button type={`${buttonType ? buttonType : "button" }`} className={`flex justify-center items-center gap-2 border border-1 ${borderColor} ${bgColor} ${labelColor} ${paddingY ? paddingY : "py-[9px]"} ${paddingX ? paddingX : "px-[26px]"}  max-lg:px-4  rounded-lg font-medium font-inter text-sm`}>
      {label}
      <img
        src={iconURL}
        width={iconWidth}
        height={iconHeight}
        className={`${iconURL ? "opacity-80 z-0" : "hidden"}`}
      />
    </button>
  )
}

export default Button