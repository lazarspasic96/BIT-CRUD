import React from 'react';


class Footer extends React.Component {




    render() {
        return <footer class="page-footer font-small blue fixed-bottom ">
            <div class="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
        </div>
        </footer>
    }
}


export default Footer