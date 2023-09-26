const Button = ({ label, bgColor, borderColor, labelColor }) => {
  return (
    <button className={`border border-1 ${borderColor} ${bgColor} ${labelColor} px-[26px] py-[7px] rounded-lg font-medium text-lg max-lg:text-md`}>
      {label}
    </button>
  )
}

export default Button