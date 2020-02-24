import NavigateToAdmin from '../components/navigateToAdmin/NavigateToAdmin';
import React, { Component } from "react";


class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            showAdmin: false,
        }
    }
    showAdminAfterCompleteConsent =() => {
        this.setState(
            {
                showAdmin: true,
            }
        )
    }
    
    render() {
        // const {subjectData, navigation, handleHeaderMenuDialoge,isRegistered }=this.props;
        const {showAdmin} = this.state;
        return (
           <Admin
           />
        );
    }
}



// const mapDispatchToProps = dispatch => bindActionCreators(
//     {
//         storeSignatureType,
//     },
//     dispatch,
// );

export default AdminPage;
