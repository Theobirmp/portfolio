import '../css/AnimatedBoxes.css'
const AnimatedBoxes = () => {
  return (
    <div className="loader">
            <span style={{animationDelay:"-7s",zIndex:7}}></span>
            <span style={{animationDelay:"-6s",zIndex:6}}></span>
            <span style={{animationDelay:"-5s",zIndex:5}}></span>
            <span style={{animationDelay:"-4s",zIndex:4}}></span>
            <span style={{animationDelay:"-3s",zIndex:3}}></span>
            <span style={{animationDelay:"-2s",zIndex:2}}></span>
            <span style={{animationDelay:"-1s",zIndex:1}}></span>
        </div>
  )
}

export default AnimatedBoxes