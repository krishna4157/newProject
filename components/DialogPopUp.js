import React, { Component } from 'react';
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, SlideAnimation, FadeAnimation } from 'react-native-popup-dialog';
import RelationList from './RelationList';

class DialogPopUp extends Component {
    render() {
        const {visible,handleHeaderMenuDialoge,onClickOutSide,hideDialog}=this.props;
        console.log("in dialog"+visible);
        return (
            <Dialog
                onTouchOutside={() => onClickOutSide(visible)}
                containerStyle={{ justifyContent: 'flex-end' }}
                dialogStyle={{ width:'100%' }}
                rounded={true}
                visible={visible}
                // visible={showDialog}
                width={0.2}
            >
                <DialogContent>
                    
                    <RelationList hideDialog={hideDialog} visible={visible} handleHeaderMenuDialoge={handleHeaderMenuDialoge}
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

