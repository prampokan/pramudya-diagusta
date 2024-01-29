const TechStackCard = (props) => {
  const {image, bgColor, width} = props
  return (
    <div className={`w-[60px] h-[60px] ${bgColor} rounded-xl flex justify-center items-center overflow-hidden`} >
        <img src={image} alt="" className={`${width}`}/>    
    </div>
  )
}

export default TechStackCard