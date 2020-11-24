import React from 'react';
import Formfield from './formfield';
import Navbar from './navbar';
import CoolButton from './coolbutton';

function Signup (props) {
    return(<div>
    <Navbar />
    <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
    <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
    <Formfield label="password" type="password" placeholder="******" />
    <CoolButton isSmall isDanger className="button is-rounded my-class" name="Signup"></CoolButton>
    </div>)
}

export default Signup