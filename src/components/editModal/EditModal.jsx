import ReactModal from 'react-modal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import auth_service, { updateProfile } from '../../Redux/services/apiServices'

ReactModal.setAppElement('#root')

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

export const EditModal = ({ firstName, lastName }) => {
    const userName = useSelector((state) => state.user.userName)
    const token = useSelector((state) => state.login.token)
    const [newUserName, setNewUserName] = useState(userName)
    const dispatch = useDispatch()

    let subtitle
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00'
    // }

    function closeModal() {
        setIsOpen(false)
    }
    const submit = (e) => {
        e.preventDefault()
        console.log('bla')
        dispatch(auth_service.updateProfile(newUserName, token)).then(
            setTimeout(() => {
                closeModal()
            }, 500)
        )
    }

    return (
        <div>
            <button className="edit-button" onClick={openModal}>
                Edit Name
            </button>
            <ReactModal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form className="edit-inputs-buttons" onSubmit={submit}>
                    <h2>edit Username</h2>
                    <div className="edit-inputs">
                        <div className="input-group">
                            <label htmlFor="username">User name </label>
                            <input
                                className="edit-input"
                                id="username"
                                onChange={(e) => {
                                    setNewUserName(e.target.value)
                                }}
                                value={newUserName}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="first name"> First name </label>
                            <input
                                type="text"
                                className="edit-input"
                                placeholder={firstName}
                                disabled
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="last name"> Last name </label>
                            <input
                                type="text"
                                className="edit-input"
                                placeholder={lastName}
                                disabled
                            />
                        </div>
                    </div>
                    <div className="edit-buttons">
                        <button className="edit-button-option" type="submit">
                            Save
                        </button>
                        <button
                            className="edit-button-option"
                            onClick={() => {
                                setNewUserName(userName)
                                closeModal()
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </ReactModal>
        </div>
    )
}

export default EditModal
