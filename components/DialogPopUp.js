import React, { Component } from 'react';
import Dialog, { DialogContent, DialogFooter, DialogButton, ScaleAnimation, SlideAnimation, FadeAnimation } from 'react-native-popup-dialog';
import RelationList from './RelationList';

class DialogPopUp extends Component {
    render() {
        const {visible,handleHeaderMenuDialoge}=this.props;
        return (
            <Dialog
                onTouchOutside={() => handleHeaderMenuDialoge(visible)}
                containerStyle={{ justifyContent: 'flex-start' }}
                dialogStyle={{ marginTop: 10,width:'100%' }}
                rounded={true}
                visible={visible}
                // visible={showDialog}
                width={0.5}
                footer={
                    <DialogFooter style={{ backgroundColor:'white' }}>
                        <DialogButton text = 'close'>
                        </DialogButton>
                    </DialogFooter>
                }
            >
                <DialogContent>
                    
                    <RelationList
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

