import { Col, Card, Image } from "react-bootstrap";

export default  function Panel ({data: {id, game, genre, platform, online, cover}}) {
    return(
        <Col key={id} sm={10} md={6} lg={4}>
        <Card className="p-4">
        <figure>
            <Image src={cover} fluid />
        </figure>


        <div className="content">
            <h3>{game}</h3>
            <p>{platform}</p>
            </div>
        </Card>
        </Col>
        
    )
}