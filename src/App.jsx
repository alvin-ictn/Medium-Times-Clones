import React from "react";
import logo from "./logo.svg";
import styles from "./assets/css/App.module.css";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  state = {
    news: [
      {
        id: 1,
        headline: true,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla. Diam justo tincidunt suspendisse vitae mauris eget. Vel, tincidunt viverra in nulla porttitor. Morbi faucibus imperdiet magna sit adipiscing purus. Pellentesque pellentesque ultricies arcu amet.\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla. Diam justo tincidunt suspendisse vitae mauris eget. Vel, tincidunt viverra in nulla porttitor. Morbi faucibus imperdiet magna sit adipiscing purus. Pellentesque pellentesque ultricies arcu amet.",
      },
      {
        id: 2,
        headline: false,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast2",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla. Diam justo tincidunt suspendisse vitae mauris eget. Vel, tincidunt viverra in nulla porttitor. Morbi faucibus imperdiet magna sit adipiscing purus. Pellentesque pellentesque ultricies arcu amet.",
      },
      {
        id: 3,
        headline: false,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast3",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla. Diam justo tincidunt suspendisse vitae mauris eget. Vel, tincidunt viverra in nulla porttitor. Morbi faucibus imperdiet magna sit adipiscing purus. Pellentesque pellentesque ultricies arcu amet.",
      },
      {
        id: 4,
        headline: false,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast4",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla..",
      },
      {
        id: 5,
        headline: false,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast5",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla.",
      },
      {
        id: 6,
        headline: false,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast5",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla.",
      },
      {
        id: 7,
        headline: false,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast5",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla.",
      },
      {
        id: 8,
        headline: false,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast5",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla.",
      },
      {
        id: 9,
        headline: false,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast5",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla.",
      },
      {
        id: 10,
        headline: false,
        title:
          "Some of the Planet’s Most Polluted Skies Are Now Over the West Coast5",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nisl, quam volutpat ac. Risus urna, at tellus natoque nulla.",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <header className={styles["App-header"]}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
          <p>Adsvertisement</p>
          <a
            className={styles["App-link"]}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Info
          </a>
        </header>
        <Dashboard news={this.state.news}/>
      </div>
    );
  }
}

export default App;
