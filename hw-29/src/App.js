import { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import LogOutModal from "./components/common/LogOutModal";

class App extends Component {
  constructor() {
    super();
    this.time = null;
    this.state = {
      timeout: 30 * 1000,
      showModal: false,
    };
  }
  removeModal = () => {
    this.setState({ showModal: false });
    this.resetTimerIDLE();
  };
  resetTimerIDLE = () => {
    clearTimeout(this.time);
    this.time = setTimeout(() => {
      this.setState({ showModal: true });
    }, this.state.timeout);
  };
  componentDidMount() {
    this.resetTimerIDLE();
  }
  render() {
    return (
      <div
        className="App"
        onMouseMove={this.resetTimerIDLE}
        onKeyDown={this.resetTimerIDLE}
      >
        {this.state.showModal ? (
          <LogOutModal reset={this.removeModal} />
        ) : (
          <></>
        )}
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
