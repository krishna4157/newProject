import React, { Component } from 'react';
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, SlideAnimation, FadeAnimation } from 'react-native-popup-dialog';
import RelationList from './RelationList';

class DialogPopUp extends Component {
    render() {
        const {navigationPage,visible,handleHeaderMenuDialoge,onClickOutSide,hideDialog}=this.props;
        console.log("in dialog"+visible);
        return (
            <Dialog
                onTouchOutside={() => onClickOutSide(navigationPage)}
                containerStyle={{ justifyContent: 'flex-end' }}
                dialogStyle={{ width:'50%',marginBottom:80 }}
                rounded={true}
                visible={visible}
                // visible={showDialog}
            >
                <DialogContent>
                    
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

