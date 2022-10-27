// const newMessage = 'Aqui ando5';
// Los props son valores que se le pasan a los componentes
export const FirstApp = ({title, subTitle}) => {
  const newMessage2 = 'Aqui ando10';
  return (
    // nueva version de react cambia el div por fragment para el empaquetado de elementos
    //<Fragment></Fragment> === <></>
    <>
        <h1>{title}</h1>
        {/* <h1>{newMessage}</h1> */}
        <p>{subTitle}</p>
    </>
        
   
  )
}
