const TextButton = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 text-black text-lg max-lg:text-md font-normal">
      {label}
      <img 
        src={iconURL}
        width={22}
        height={22}
        className="opacity-70"
      />
    </button>
  )
}

export default TextButton