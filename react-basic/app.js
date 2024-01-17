
// Using DOM ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// let rootEl = document.getElementById('root');

// let h1 = document.createElement('h1');
// h1.innerHTML = "hello delhi";

// rootEl.appendChild(h1);

// Using React ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

let rootEl = document.getElementById('root');
// let h1 = React.createElement('h1', null, 'hi, I am h1 of react');
// let h2 = React.createElement('h2', { id: 'utk', className: 'heading' }, 'hello, I am h2 of react');

// let div = React.createElement('div', null,
//     [React.createElement('h1', null, 'hello i am h1 element inside Div'), React.createElement('h2', null, 'h2 inside div')]
// );

let div = (
    <div>
        <div>
            <h1>Hello</h1>
        </div>
    </div>
)

// ReactDOM.render(h1, rootEl);
let root = ReactDOM.createRoot(rootEl);
root.render(div);
