import { useState } from "react";
import './App.scss';
let marked = require("marked");

function App() {

  const [markdown, setMarkdown] = useState(placeholder);

  const handleChange = (e) => {
    setMarkdown(() => e.target.value);
  }

  return (
    <div>
      <div className="editor">
        <div className="editor-wrap">
          <Toolbar title="Editor"/>
          <Editor content={markdown} onChange={handleChange}/>
        </div>
      </div>
      <div className="previewer">
        <div className="previewer-wrap">
          <Toolbar title='Previewer'/>
          <div 
            className="previewer-body"
            dangerouslySetInnerHTML={{
              __html: marked(markdown),
            }}
          >
          </div>
        </div>
      </div>
    </div>
    
  );
}

function Toolbar (props) {
  return (
    <div className="toolbar">
      <div className="logo">
        <h3>{props.title}</h3>
      </div>
      <i className="fa fa-compress"></i>
    </div>
  )
}

function Editor (props) {
  return (
    < textarea
      className="editor-body"
      onChange={props.onChange}
      type="text"
      value={props.content}
    />
  )
  
}

export default App;

var placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;