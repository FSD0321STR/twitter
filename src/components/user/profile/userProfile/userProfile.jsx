import React from "react";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Menu from "../../../template/menu/menu";
import Footer from "../../../template/footer/footer";
import EditProfileForm from "../edit/editAccordion";
import InputTweet from "../../../tweets/card/inputTweet";
import Tweet from "../../../tweets/card/tweet";

function UserProfilePage() {
  return (
    <div>
      <div>
        <div>
          <Menu />
        </div>
        <div>
          <InputCard />
        </div>
        <div>
          <EditProfileForm />
        </div>
        <div>
          <TweetCard />
        </div>
      </div>
      <Card style={{ width: "20rem" }}>
        <Col xxs={6} md={4}>
          <Image src="" roundedCircle width={175} height={175} />
        </Col>
        <Card.Body>
          <Card.Title>@userName </Card.Title>

          <Card.Text>
            BIO: Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Name</ListGroupItem>
          <ListGroupItem>City</ListGroupItem>
          <ListGroupItem>URL</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Crows</Button>
          <Button variant="primary">Likes</Button>
          <Button variant="primary">Message</Button>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
}

export default UserProfilePage;
