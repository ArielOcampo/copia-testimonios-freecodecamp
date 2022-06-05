import React  from "react"


function Testimonio (props){
  return(
    <><div className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt="Foto de Shawn" />
    <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="empresa-testimonio">
          <strong>{props.cargo}</strong> en {props.empresa}</p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div></div></>
  )
}
export default Testimonio