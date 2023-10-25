import React, { Component } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, blanditiis totam eligendi fugit esse. Quas ullam ratione quibusdam excepturi dicta repellendus nulla. Facilis doloremque eaque error quam voluptates exercitationem suscipit necessitatibus laborum architecto assumenda! ",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "What is the package version",
      content: "v1.0.5",
    },
  ],
};
const styles = {
  bgColor: "white",
  titleTextColor: "black",
  titleTextSize: "45px",
  rowTitleColor: "black",
  rowTitleTextSize: "medium",
  rowContentColor: "grey",
  rowContentTextSize: "16px",
  rowContentPaddingTop: "10px",
  rowContentPaddingBottom: "10px",
  rowContentPaddingLeft: "50px",
  rowContentPaddingRight: "150px",
  arrowColor: "#7745f6",
  transitionDuration: "0.5s",
  timingFunc: "ease",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default class App extends Component {
  render() {
    return (
      <section className="faq">
        <main>
          <Faq data={data} styles={styles} config={config} />
        </main>
      </section>
    );
  }
}
