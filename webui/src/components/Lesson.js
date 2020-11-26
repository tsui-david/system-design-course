import React from "react";
import Video from "./Video";
import { Card } from "antd";
import { PageHeader, Button } from "antd";
import Icon, {
  CheckCircleTwoTone,
  QuestionCircleTwoTone,
  RightCircleTwoTone,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import ReactMarkdown from "react-markdown";
import { withRouter } from "react-router-dom";

function Answer(props) {
  if (props.isDisplayAnswer) {
    return (
      <div
        style={{
          marginTop: "10px",
          marginLeft: "25px",
          fontSize: "16px",
          display: "flex",
        }}
      >
        <br />
        <CheckCircleTwoTone
          twoToneColor="#52c41a"
          style={{ fontSize: "30px", marginRight: "10px" }}
        />{" "}
        <ReactMarkdown>{props.data}</ReactMarkdown>
      </div>
    );
  } else {
    return null;
  }
}

function Hint(props) {
  if (props.isDisplayHint) {
    return (
      <div
        style={{
          marginTop: "10px",
          marginLeft: "25px",
          fontSize: "16px",
          display: "flex",
        }}
      >
        <RightCircleTwoTone
          twoToneColor="#722ed1"
          style={{ fontSize: "30px", marginRight: "10px" }}
        />{" "}
        <ReactMarkdown>{props.data}</ReactMarkdown>
      </div>
    );
  } else {
    return null;
  }
}

function Question(props) {
  return (
    <Card bordered>
      <div style={{ fontSize: "18px", display: "flex", fontWeight: "bold" }}>
        <QuestionCircleTwoTone
          twoToneColor="#1890ff"
          style={{ fontSize: "30px", marginRight: "10px" }}
        />{" "}
        <ReactMarkdown>{props.data}</ReactMarkdown>
      </div>
    </Card>
  );
}

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionIndex: 0,
      hintIndex: 0,
      isDisplayAnswer: false,
      isDisplayHint: false,
      isDisplayHintButton: false,
    };
  }

  componentDidMount() {
    this.setState({
      isDisplayHintButton: this.getCurrentQuestionBlock().hints.length > 0,
    });
  }

  getCurrentQuestionBlock() {
    return this.props.lessonData.questions[this.state.questionIndex];
  }

  getCurrentHint() {
    return this.getCurrentQuestionBlock().hints[this.state.hintIndex];
  }

  shouldDisplayHintButton(currentHintIndex) {
    return currentHintIndex + 1 < this.getCurrentQuestionBlock().hints.length;
  }

  onClickHint() {
    if (this.state.isDisplayHint) {
      this.setState({
        hintIndex: this.state.hintIndex + 1,
        isDisplayHintButton: this.shouldDisplayHintButton(
          this.state.hintIndex + 1
        ),
      });
    } else {
      this.setState({
        isDisplayHint: true,
        isDisplayHintButton: this.shouldDisplayHintButton(0),
      });
    }
  }

  constructHints() {
    return this.getCurrentQuestionBlock().hints.map((data, index) => {
      if (index <= this.state.hintIndex) {
        return <Hint data={data} isDisplayHint={this.state.isDisplayHint} />;
      }
    });
  }

  onClickAnswer() {
    this.setState({ isDisplayAnswer: true });
  }

  onClickNextQuestion() {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
      hintIndex: 0,
      isDisplayAnswer: false,
      isDisplayHint: false,
      isDisplayHintButton:
        this.props.lessonData.questions[this.state.questionIndex + 1].hints
          .length > 0,
    });
  }

  displayHintsNavigation() {
    if (this.state.isDisplayAnswer) {
      return null;
    } else if (this.state.isDisplayHintButton) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => this.onClickHint()}
            shape="round"
            style={{ marginRight: "15px", color: "" }}
          >
            I need a hint
          </Button>
          <Button onClick={() => this.onClickAnswer()} shape="round">
            Show me the answer
          </Button>
        </div>
      );
    } else if (!this.state.isDisplayAnswer) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => this.onClickAnswer()} shape="round">
            Show me the answer
          </Button>
        </div>
      );
    } else {
      return null;
    }
  }

  displayQuestionNavigation() {
    if (
      this.state.isDisplayAnswer &&
      this.state.questionIndex + 1 < this.props.lessonData.questions.length
    ) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => this.onClickNextQuestion()} shape="round">
            Next Question
          </Button>
        </div>
      );
    } else {
      return null;
    }
  }

  goToNextOrPreviousLesson(topic, id) {
    this.props.history.push(`/lessons/${topic}/${id}`);
  }

  render() {
    console.log(this.props);
    console.log(typeof this.props.previousTopic, typeof this.props.previousTopic === "undefined", this.props.nextTopic, this.props.nextTopic == null)
    return (
      <div style={{ maxWidth: "1200px", minWidth: "500px" }}>
        <PageHeader
          className="site-page-header-ghost-wrapper"
          ghost={false}
          onBack={() => window.history.back()}
          title={this.props.lessonData.lesson_title}
        ></PageHeader>
        <Video video_url={this.props.lessonData.video_url} />
        <br />
        <Question data={this.getCurrentQuestionBlock().question} />
        {this.constructHints()}
        <Answer
          data={this.getCurrentQuestionBlock().answer}
          isDisplayAnswer={this.state.isDisplayAnswer}
        />
        <br />
        {this.displayHintsNavigation()}
        <br />
        {this.displayQuestionNavigation()}
        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            type="link"
            disabled={typeof this.props.previousTopic === "undefined"}
            onClick={() =>
              this.goToNextOrPreviousLesson(
                this.props.previousTopic,
                this.props.previousID
              )
            }
          >
            <ArrowLeftOutlined /> Previous Lesson
          </Button>
          <Button
            type="link"
            disabled={typeof this.props.nextTopic === "undefined"}
            onClick={() =>
              this.goToNextOrPreviousLesson(
                this.props.nextTopic,
                this.props.nextID
              )
            }
          >
            Next Lesson <ArrowRightOutlined />
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Lesson);
