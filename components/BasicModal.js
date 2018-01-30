import React from 'react'
import PropTypes from 'prop-types'
import { Text, Modal } from 'react-native'
import { okAction } from '../strings/actions'
import glamorous from 'glamorous-native'

const ModalContainer = glamorous.view(
    {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey'
    }
)

const InnerContainer = glamorous.view(
    {
        alignItems: 'center'
    }
)

const BasicModal = ({ 
    isAlertModalOpen, 
    closeAlertModal,
    message
}) => {
    return (
        <Modal
            visible={isAlertModalOpen}
            animationType={'slide'}
            onRequestClose={() => this.closeAlertModal()}>
            <ModalContainer>
                <InnerContainer>
                    <Text>
                        {message}
                    </Text>
                    <BasicButton
                        onPress={() => this.closeAlertModal()}
                        text={okAction} />
                </InnerContainer>
            </ModalContainer>
        </Modal>
    )
}

BasicModal.defaultProps = {
    isAlertModalOpen: false, 
    message: ''
}

BasicModal.propTypes = {
    isAlertModalOpen: PropTypes.bool.isRequired, 
    closeAlertModal: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired
}

export default BasicModal