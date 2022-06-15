import ImgProducto from '../../Images/Camera.jpg'
import { useState, useEffect } from 'react';
import { useQuery } from '../../Hooks/useQuery';


const InfoProducto = ({ products }) => {
    
    const [isLoading, setIsLoading] = useState(true);
    
    const [Product, setProduct] = useState(null);
    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {  
        
        const data = products.find((d) => d.id == search);
        console.log(search)

        if (data) {
            setProduct(data)
        }

    }, [search]);

    // if (isLoading) {
    //     return <Spinner/>;
    // }

    if (!Product) {
        return null;
    }
    
    return (
        <>
            <img src={Product.image} style={{ height: '100%', width: '100%' }} />
            
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '27%',
                transform: 'translate(-50%, -50%)',
                color: 'black'
            }}>
                <div style={{
                    fontSize: '60px',
                    fontWeight: '700',
                    fontFamily: 'sans-serif'
                }}>
                    {Product.name}
                </div>
            </div>
        </>

    )
}

export default InfoProducto