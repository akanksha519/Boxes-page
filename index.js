const Box = props => {
  //  Write your code here
  const{box-text,className}=props
  return (
    <div className={`div ${className}`}>
    {box-text}

    </div>  )
}

const element = (
  //  Write your code here. 
  <div className="box-container">
  <h1 className="heading">Boxes</h1>
  <div className="container">
  <Box className="box-1" box-text="small"/>
   <Box className="box-2" box-text="small"/>
    <Box className="box-3" box-text="small"/>
  </div>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
