const TechStackCard = (props) => {
  const {image, bgColor, hover, width} = props
  return (
    <div className={`w-[60px] h-[60px] ${bgColor} rounded-xl flex justify-center items-center ease duration-100 ${hover}`}>
        <img src={image} alt="" className={`${width}`}/>    
    </div>
  )
}

export default TechStackCard