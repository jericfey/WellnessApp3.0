import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "./teammembercards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamMemberCards = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="small"
          src="https://avatars.githubusercontent.com/u/31998201?v=4"
        />
        <Card.Header>Jeri Fey</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <Card.Description>Jeri is the best!</Card.Description>
      </Card.Content>
      <Card.Content className="social-buttons">
        <div className="ui">
          <a href="https://github.com/jericfey" target="about _blank">
            <Button inverted color="purple">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/jerifey/" target="about _blank">
            <Button inverted color="purple">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </Button>
          </a>
          <a href="mailto:jericfey@gmail.com">
            <Button inverted color="purple">
              <FontAwesomeIcon icon={["fas", "paper-plane"]} />
            </Button>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="small"
          src="https://avatars.githubusercontent.com/u/68671968?v=4"
        />
        <Card.Header>Grace Kuo</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <Card.Description>Grace is the best!</Card.Description>
      </Card.Content>
      <Card.Content className="social-buttons">
        <div className="ui">
          <a href="https://github.com/gkuo0831" target="about _blank">
            <Button inverted color="blue">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/gkuo98" target="about _blank">
            <Button inverted color="blue">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </Button>
          </a>
          <a href="mailto:gkuo98@gmail.com">
            <Button inverted color="blue">
              <FontAwesomeIcon icon={["fas", "paper-plane"]} />
            </Button>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="small"
          src="https://avatars.githubusercontent.com/u/3255850?v=4"
        />
        <Card.Header>Gil Orcilla</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <Card.Description>Gil is the best!</Card.Description>
      </Card.Content>
      <Card.Content className="social-buttons">
        <div className="ui">
          <a href="https://github.com/gilorcilla" target="about _blank">
            <Button inverted color="teal">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/gil-o-a001045/"
            target="about _blank"
          >
            <Button inverted color="teal">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </Button>
          </a>
          <a href="mailto:mathnasiumcos@gmail.com">
            <Button inverted color="teal">
              <FontAwesomeIcon icon={["fas", "paper-plane"]} />
            </Button>
          </a>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="small"
          src="https://avatars.githubusercontent.com/u/68437189?v=4"
        />
        <Card.Header>James O'Sullivan</Card.Header>
        <Card.Meta>Full Stack Developer</Card.Meta>
        <Card.Description>
          Fitness Tip: Patience is key! Trust the process and reap the benefits
        </Card.Description>
      </Card.Content>
      <Card.Content className="social-buttons">
        <div className="ui">
          <a href="https://github.com/jamesosull16">
            <Button inverted color="orange">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/james-o-sullivan-5081b941/"
            target="about _blank"
          >
            <Button inverted color="orange">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </Button>
          </a>
          <a href="mailto:jamesosull16@gmail.com">
            <Button inverted color="orange">
              <FontAwesomeIcon icon={["fas", "paper-plane"]} />
            </Button>
          </a>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default TeamMemberCards;
