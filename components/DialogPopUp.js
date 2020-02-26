import React, { Component } from 'react';
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, SlideAnimation, FadeAnimation } from 'react-native-popup-dialog';
import RelationList from './RelationList';

class DialogPopUp extends Component {
    render() {
        const {navigationPage,visible,handleHeaderMenuDialoge,onClickOutSide,hideDialog}=this.props;
        console.log("in dialog"+visible);
        return (
            <Dialog
                containerStyle={{ justifyContent: 'flex-end' }}
                dialogStyle={{ width:'35%',marginBottom:80,height:'27%' }}
                rounded={true}
                visible={visible}
                // visible={showDialog}
            >
                <DialogContent style={{alignItems:'center',alignSelf:'center',marginLeft:-10}}>
                    
                    <RelationList navigationPage={navigationPage} hideDialog={hideDialog} visible={visible} handleHeaderMenuDialoge={handleHeaderMenuDialoge}
                    //    isRegistered={isRegistered}
                    //    screenProps={screenProps}
                    //    navigation={navigation} 
                    //    handleHeaderMenuDialoge={handleHeaderMenuDialoge}
                    //    subjectData={subjectData}
                    //    isRegistered={isRegistered}
                    />
                </DialogContent>
            </Dialog>
        );
    }
}
export default DialogPopUp;

