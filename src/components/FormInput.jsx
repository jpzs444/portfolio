const FormInput = ({ label, id, required, ...field }) => {
  return (
    <div>
      <label htmlFor={id} className="font-medium">{label}
        <span className={`${required ? "text-[#890000]" : "hidden"}`}> *</span>
      </label>
      <div className="mt-3">
      <input
        id={id}
        required={required}
        // or use this -> {...(required ? {required: true} : {})}
        {...field}
        className="block w-full border-0 rounded-lg shadow-sm text-gray-700 px-3 py-1.5 text-lg ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#515B60] focus:outline-none"
      />
      </div>
    </div>
  )
}

export default FormInput