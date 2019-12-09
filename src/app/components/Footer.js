import React from 'react';


class Footer extends React.Component {




    render() {
        return <footer class="page-footer font-small fixed-bottom " id='bg-color-footer'>
            <div class="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
        </div>
        </footer>
    }
}


export default Footer