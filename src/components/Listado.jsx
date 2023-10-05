import BoxCard from './BoxCard';
const Listado = ({ colaboradores }) => {
  return (
    <>
      <h1>Listado de Colaboradores</h1>
      
     {colaboradores.map((cli, index) => (
       <BoxCard key={index}  colaboradore={cli} />
     ))}
         
    </>
  );
}

export default Listado