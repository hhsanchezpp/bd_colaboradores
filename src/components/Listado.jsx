import BoxCard from './BoxCard';
const Listado = ({ colaboradores }) => {
  return (
    <>
      
     {colaboradores.map((cli, index) => (
       <BoxCard key={index}  colaboradore={cli} />
     ))}
         
    </>
  );
}

export default Listado