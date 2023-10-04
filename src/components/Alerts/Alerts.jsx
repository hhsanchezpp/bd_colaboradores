import PropsTypes from "prop-types"
const Alerts = ({mensaje, color}) => {
  return (
    <div>
        <p className= {`alert alert-${color}`} >{mensaje}</p>
    </div>
  )
}

Alerts.propTypes = {
  mensaje: PropsTypes.string.isRequired,
  color: PropsTypes.string.isRequired
}

export default Alerts