import React from "react";
import './Style.css'
import Checkbox from "../components/Checkbox";
import SiginUp from "./SiginUp";
import SiginIn from "./SiginIn";
import OverlayPanel from "./OverlayPanel";
/* import './SiginUpInteractive.js' */




class FormPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            overlayForm: true
        }



    }


    handleClick = () => {
        this.setState({ overlayForm: !this.state.overlayForm })
    }

    render() {
        const addOverlay = this.state.overlayForm ? '' : 'right-panel-active';
        return <main className='mainFormPage'>
            <div className={"container containerHomePage" + ' ' + addOverlay} id="container">
                <SiginUp />
                <SiginIn />
                <OverlayPanel handleClick={this.handleClick} />
            </div >
        </main >

    }
}







export default FormPage;