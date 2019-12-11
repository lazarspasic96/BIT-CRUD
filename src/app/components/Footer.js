import React from 'react';




class Footer extends React.Component {




    render() {
        return <footer className="page-footer font-small fixed-bottom " id='bg-color-footer'>
            <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:


            </div>
        </footer>
    }
}


export default Footer