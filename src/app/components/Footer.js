import React from 'react';




class Footer extends React.Component {




    render() {
        return <footer className="page-footer font-small fixed-bottom " id='bg-color-footer'>
            <span> Copyright: © {new Date().getFullYear()}</span>


        </footer>
    }
}


export default Footer