import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const MainLayout: FC = () => {

  const [headerIsFixed, setHeaderIsFixed] = useState(false)

  useEffect(() => {
    // fixed header
    let observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting === true){
            // element fully visible
            setHeaderIsFixed(false)
        }
        else {
            // element not visible
            setHeaderIsFixed(true)
        }
    },
    {
        root: null,
        threshold: 0.0
    });       
    observer.observe(document.querySelector('header'));
  },[])

  return (
    <>
      <Header />
      {  headerIsFixed &&
          <Header fixedHeader={true}/>
      } 
      <Outlet />
      <Footer/>
    </>
  );
};