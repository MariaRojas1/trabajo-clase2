import React from 'react';
import { Card, Media, Image, Content, Heading } from 'react-bulma-components';
const ProductoCard = () => {
    return (
        <Card>
            <Card.Image size="4by3" src="https://ep01.epimg.net/elpais/imagenes/2019/04/17/escaparate/1555499418_436206_1555505144_noticia_normal.jpg" />
            <Card.Content>
                <Heading size={4}>Maquillaje</Heading>
                <Heading subtitle size={6}>$ 50.0000</Heading>
                <Content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris.
                </Content>
            </Card.Content>
        </Card>
    )
}

export default ProductoCard;