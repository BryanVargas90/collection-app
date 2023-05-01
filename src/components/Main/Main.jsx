import { HashLink } from "react-router-hash-link"
import { Container, Row, Col, Button } from "react-bootstrap"

export default function Main () {

    return (
        <main>
            <Container>
                <Row>
                    <Col>
                    <h1>Gallery</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat itaque unde similique eaque quae reprehenderit dolorum dolorem, laudantium, cumque sed earum sunt officiis ratione placeat hic fugit omnis vitae doloremque.</p>
                     <HashLink to="/#gallery"><Button>See Gallery</Button></HashLink> {/*when using Hashlink for forget to import browser routes */}
                    </Col>
                </Row>
            </Container>
            <h1>Gallery</h1>
        </main>
    )
}