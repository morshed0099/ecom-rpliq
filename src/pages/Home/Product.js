import React from 'react';
import Card from '../../Components/Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useQuery } from 'react-query';


const Product = () => {

    const {data:products=[],refetch,isLoading}=useQuery({
      queryKey:['products'],
      queryFn:async()=>{
        const res=await fetch('https://ecom-repliq-server-morshed0099.vercel.app/product')
        const data=await res.json()
        return data
      }      
    })
   
    
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        return (
          <div className='p-8'>           
            <Slider {...settings}>              
            
              {
                products.map(product=><Card
                  key={product._id}
                  product={product}
                ></Card>)
              }               
            
             
            </Slider>
          </div>
        )
};

export default Product;