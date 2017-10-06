var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    getDefaultProps: function() {
        console.log("'getDefaultProps' - use when you want to make sure your child component receives all required props without relying on parent component to pass them on.");
    },

    componentWillMount: function() {
        console.log("'componentWillMount' - called once, before the initial render; a good place to update the state before the render");
    },

    componentDidMount: function() {
        console.log("'componentDidMount' - called once, after the initial render, useful for AJAX requests");
    },

    componentWillReceiveProps: function() {
        console.log("'componentWillReceiveProps' - acts on specific props changes");
    },

    
    shouldComponentUpdate: function() {
        console.log("'shouldComponentUpdate' - allows greater control over when the component re-renders; a good place to optimise performance");
        return true; 
    },
    

    componentWillUpdate: function() {
        console.log("'componentWillUpdate' - apparently, a bit of a useless method; similar to componentWillReceiveProps, but used on a component that also has shouldComponentUpdate");
    },

    componentDidUpdate: function() {
        console.log("'componentDidUpdate' - to update the DOM following prop or state changes");
    },

    componentWillUnmount: function() {
        console.log("'componentWillUnmount' - cleaning up after the component, e.g. removing event listeners");
    },

    render: function() {
        return React.createElement('div', {className: "siamese-twins"},
            React.createElement('button', {onClick: this.increment}, 'Increment' + this.state.counter),
            React.createElement("button", {onClick: this.decrement}, "Decrement" + this.state.counter)
        )
    },
});

var element = React.createElement("div", {},
React.createElement(Counter));
ReactDOM.render(element, document.getElementById('app'));
