import { width } from '@mui/system';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { indigo } from '@mui/material/colors';
import { useState, useEffect } from 'react';
import { useQuery } from '../../../Hooks/useQuery';
import styles from './InfoProducto.module.css'



const InfoProducto = ({ products, shoppingCart }) => {
    const [isLoading, setIsLoading] = useState(true);

    const [Product, setProduct] = useState(null);
    const query = useQuery();
    const search = query.get("search");

    useEffect(() => {

        const data = products.find((d) => d.IDProducto == search);
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

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(indigo[800]),
        backgroundColor: indigo[800],
        '&:hover': {
            backgroundColor: indigo[700],
        },
    }));

    return (
        <>
            <div className={styles.background}>
            <article className={styles.article} >

                <div style={{
                    maxWidth: 500,
                    margin: 20
                }}>
                    <img src={Product.QRCode} style={{
                        width: '100%'
                    }} />
                </div>

                <div style={{
                    margin: 20,
                    Width: 600,
                    wordWrap: 'break-word'
                }}>

                    <h1 className={styles.h1} >
                        {Product.Descripcion}
                    </h1>
                    <hr className={styles.hr} />
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.td} >Precio:</td>
                                <td>{Product.Precio}</td>
                            </tr>
                            <tr>
                                <td className={styles.td} >Descuento:</td>
                                <td>{Product.Descuento}%</td>
                            </tr>
                            <tr>
                                <td className={styles.td} >Cantidad Restante:</td>
                                <td>{Product.CantidadRestante}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* <ColorButton variant="outlined" style={{
                        marginLeft: '1rem',
                        justifySelf: 'u'
                    }}
                        onClick={() => {
                            shoppingCart.push(product)
                        }}>
                        {"   "}
                        Add    <AddShoppingCartIcon fontSize="small" style={{ marginLeft: '0.50rem' }} />
                    </ColorButton> */}
                </div>

            </article>
            </div>
        </>

    )
}

export default InfoProducto