const TabButton = ({ label, changeActiveTab, activeTab }) => {

  const toggleTab = () => {
    if (activeTab !== label.title) {
      changeActiveTab(label.title);
    }
  }

  return (
    <button 
      className={`info-text font-light py-3 cursor-pointer border-b-[2px] hover:bg-slate-100 ${activeTab === label.title ? 'font-semibold border-black' : 'border-transparent'}`}
      onClick={toggleTab}
    >
      {label.title}
    </button>
  )
}

export default TabButton;