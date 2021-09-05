import ReactDOM from "react-dom";
import CommentInfo from "./CommentInfo";
import Card from "./Card";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <Card>Some text</Card>
          <Card>
            <CommentInfo name={faker.name.findName()} date="Today" comment="I love nature" avatar={faker.image.avatar()} />
            <br />
            </Card>
            <Card>
            <CommentInfo name={faker.name.findName()} date="Yesterday" comment="I hate wind" avatar={faker.image.avatar()} />
            <br />
            </Card>
            <Card>
          
            <CommentInfo name={faker.name.findName()} date="9th August" comment="I do not like parties" avatar={faker.image.avatar()} />
            <br />
            </Card>
            <Card>
            <CommentInfo name="John" date="Tomorrow" comment="Try to share" avatar={faker.image.avatar()} />
            </Card>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector("#root"));