const TabButton = ({ label, changeActiveTab, activeTab }) => {

  const toggleTab = () => {
    if (activeTab !== label.title) {
      changeActiveTab(label.title);
    }
  }

  return (
    <button 
      className={`info-text font-light px-6 py-3 cursor-pointer border-b-[2px] ${activeTab === label.title ? 'border-black' : 'border-transparent'}`}
      onClick={toggleTab}
    >
      {label.title}
    </button>
  )
}

export default TabButton;