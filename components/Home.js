import React from 'react';
import styles from '../styles/Home.module.css';
import Lastproduct from './Lastproduct';
import Allproduct from './Allproduct';

function Home(){
    const lastProductData = [
        {
        title: 'LATEST LAUNCH',
        description: 'DIONE SOUNDBAR',
        image:
          '/soundbar.png',
      }
    ];


    const allProductData = [
        {
          title: 'PHANTOM I White',
          description:
            'A Class of its own.',
          image:
            '/phantom1.png',
        }, 
        {
            title: 'PHANTOM II Gold',
            description:
              'Pure sound.',
            image:
              '/phantom2.png',
          }, 
          {
            title: 'PHANTOM II Black',
            description:
              'Deeply nomadic.',
            image:
              '/phantom3.png',
          }, 
          {
            title: 'PHANTOM II White',
            description:
              'Intensively immersive.',
            image:
              '/phantom4.png',
          }, 
    ]
    

    const produits = allProductData.map((data, i) =>{
        //<Article urlToImage={data.urlToImage} autheur={data.author} Titre={data.title} description={data.description} />
        return (
        
        <Allproduct  key={i} {...data} />
        
        )
          });

          const DernierProduits = lastProductData.map((data) =>{
            return <Lastproduct {...data} />
              });
              
    return (
        <>

{DernierProduits}

  <div className={styles.Produits}>
 
  {produits}
 </div>
      </>
    );

  
        }

export default Home;