// initializing constants
const reactContainer = document.querySelector(".react-container");

class MarkdownApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      parsedText: "",
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(event) {
    const newValue = event.target.value;
    this.setState({
      inputValue: newValue,
      parsedText: marked.parse(newValue),
    });
  }

  render() {
    return (
      <div className="markdown-app row">
        <p className="text-center header3">#Editor</p>
        <textarea
          className="well col-xs-12 markdown-app"
          id="editor"
          placeholder="Enter your markdown here..."
          onChange={this.updateValue}
          rows={10}
        />
        <p className="text-center header3" style={{ margin: "0" }}>
          #Previewer
        </p>
        <div
          className="col-xs-12 well"
          id="preview"
          dangerouslySetInnerHTML={{ __html: this.state.parsedText }}
        />
      </div>
    );
  }
}

const MainContainer = () => {
  return (
    <div>
      <MarkdownApp />
    </div>
  );
};

ReactDOM.render(<MainContainer />, reactContainer);
