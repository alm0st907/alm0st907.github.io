import React from 'react';
import mdFile from "./markdown/test.md";
import ReactMarkdown from "react-markdown";
class MarkdownEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mdText:""
        };
    }
    componentDidMount() {
        console.log("Markdown mounted");
        fetch(mdFile)
            .then((response) => response.text())
            .then((text) => {
                console.log(text);
                this.setState({
                    mdText: text
                })
            });
    }
    componentDidUpdate() {
        // document.title = `You clicked ${this.state.count} times`;
        console.log("Markdown updated");
    }

    render() {
        return (
            <div>
                <ReactMarkdown children={this.state.mdText}/>
            </div>
        );
    }
}
export default MarkdownEntry