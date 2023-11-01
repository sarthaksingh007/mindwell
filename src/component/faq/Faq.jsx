import React, { Component } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQ",
  rows: [
    {
      title: "What are the common symptoms of stress?",
      content: "Symptoms of stress can manifest physically, emotionally, or behaviorally. They may include headaches, fatigue, irritability, changes in sleep or appetite, difficulty concentrating, and muscle tension.",
    },
    {
      title: "How does stress affect the body?",
      content:
        "Prolonged stress can impact physical health, leading to issues such as high blood pressure, weakened immune system, digestive problems, and an increased risk of heart disease.",
    },
    {
      title: "What are some effective stress management techniques?",
      content:
        "Effective stress management techniques include regular exercise, mindfulness meditation, deep breathing exercises, maintaining a healthy diet, getting adequate sleep, and seeking social support.",
    },
    {
      title: "What is the difference between stress and anxiety?",
      content: "While stress is a response to specific external pressures, anxiety is a sustained and often excessive worry about future events, and it can occur without an identifiable trigger.",
    },
    {
      title: "What role does relaxation play in managing stress?",
      content: "Relaxation techniques like deep breathing, progressive muscle relaxation, and mindfulness exercises help reduce the body's stress response, promoting a sense of calm and well-being.",
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
