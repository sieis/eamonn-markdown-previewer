marked.setOptions({
    breaks: true
})
const initial=
`# Eamonn's Markdown Previewer
## Built with React

I decided to \`use React's CDN\` rather than create-react-app

**I enjoy** things

1. Coding
1. Spreadsheets
1. UltraRunning
1. Writing

\`\`\`
function codeBlock=()=>{
    return true;
}
\`\`\`

I also like making [sacred geometry objects](https://eamonn.gumroad.com/l/sacred-geometry):

![geometric spinning svg](https://raw.githubusercontent.com/sieis/unmove/main/site/img/sacred%20spinner.svg)

> -sacred geometry spinner

`
console.log(initial)
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={text: initial}

        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }
    render(){
        return (
            <>
                <textarea onChange={this.handleChange} id="editor" value={this.state.text}></textarea>
                <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(this.state.text) }}></div>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)