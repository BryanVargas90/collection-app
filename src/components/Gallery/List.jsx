
import {Container, Row, Col} from "react-bootstrap"
import Panel from "./Panel.jsx"
import data from "../data/gallery.json"

export default function List () {
    return (
        <section>
            <Container id="gallery">
                <Row className="justify-content-center">
                    <Col><h2 className="text-center">My collection</h2></Col>
            {
                data.map(
                    (element)=> (
                        element
                        ? <Panel data={element} />
                        : <p>Loading...</p>
                )
            )
         }
         </Row>
        </Container>
        </section>
    )
}