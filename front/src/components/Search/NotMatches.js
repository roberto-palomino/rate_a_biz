import './NotMatches.css';

export const NotMaches = () => {
  return (
    <>
      <div className='not-matches'>
        <h5 id='no-results'>
          No se han encontrado resultados para tu búsqueda
        </h5>
        <div className='not-matches-image'>{''}</div>
      </div>
    </>
  );
};
