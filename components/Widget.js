const Widget = ({ title, value, icon }) => {
  return (
    <div>
      <img className='forecast-icons' src={icon} />
      <div className='flex'>
        <span className='title'>{title}</span>
        <span className='value'>{value}</span>
      </div>
    </div>
  )
}
export default Widget
