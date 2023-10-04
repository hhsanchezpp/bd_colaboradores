
const Alerts = (mensaje, color) => {
  return (
    <div>
        <p className= {`alert alert-${color}`} >{mensaje}</p>
    </div>
  )
}

export default Alerts