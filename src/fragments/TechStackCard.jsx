const TechStackCard = (props) => {
  const {image, bgColor, width, height} = props
  return (
    <div className={`${width} ${height} ${bgColor} p-1 rounded-xl flex justify-center items-center overflow-hidden`} >
        <img src={image} alt="" className={`rounded-lg`}/>    
    </div>
  )
}

export default TechStackCard