import { Carousel, Image, Button } from "react-bootstrap"



const LandingCarousel = () => {

    return (
        <Carousel fade >
            <Carousel.Item interval={1000}>
                <Image
                    className="d-block w-100 "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEYoA1AOybv7tsK-2kL1FuACtRrieutrL4A&usqp=CAU"
                    alt="First slide"
                    fluid
                    style={{backgroundImage: "rgba(0, 0, 0, 0.7)"}}
                />
                <Carousel.Caption>
                    <h3>Encuentra tu necesidad</h3>
                    <p>Para cualquiera de tus necesidades</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-0SZq3s-UPjDppb0QYe_vF5pyNSGnQReZw&usqp=CAU"
                    alt="Second slide"
                    fluid

                />

                <Carousel.Caption>
                    <h3>Busca tu soporte</h3>
                    <p>Para levantarte de nuevo.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHdIhsjZHbQBRDwW3nrsXg6VoEkBDecb4ZQ&usqp=CAU"
                    alt="Third slide"
                    fluid
                />

                <Carousel.Caption>
                    <h3>Sobrepasa tus limites</h3>
                    <p>Superalos y sigue avanzando</p>
                    <Button>
                        Hola
                    </Button>
                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    )
}

export default LandingCarousel;