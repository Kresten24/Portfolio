'use strict';

const e = React.createElement;

function card(props) {

const skillList = props.skills.map((skill) =>
    <li>{skill}</li>
);

return (
    <ul>{skillList}</ul>
  );
}

const domContainer = document.querySelector('#card_container');
ReactDOM.render(e(card), domContainer);