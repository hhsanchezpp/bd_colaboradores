import PropsTypes from "prop-types"
const Alerts = ({mensaje, color}) => {
  return (
    <div className="text-center mt-3 ">
        <p className= {` alert alert-${color}`} >{mensaje}</p>
    </div>
  )
}

Alerts.propTypes = {
  mensaje: PropsTypes.string.isRequired,
  color: PropsTypes.string.isRequired
}

export default Alerts